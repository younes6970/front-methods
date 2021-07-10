import UserForm from "./UserForm";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { requestGetUser, requestPostUser } from "../request";
import { toast } from "react-toastify";
import Loading from "../../ui_component/loading/Loading";

const User = () => {
  const { back, query: id } = useRouter();
  const [value, setValue] = useState(null);
  const getUser = () => {
    requestGetUser(id.id)
      .then((data) => {
        setValue(data);
      })
      .catch((err) => {
        const {
          errors: { massage },
        } = err;
        toast.error(`${massage}`);
      });
  };
  const handleEdit = (data, setSubmitting) => {
    requestPostUser(data)
      .then((result) => {
        const {
          data: { massage },
        } = result;
        setSubmitting(false);
        toast.success(massage);
        back();
      })
      .catch((err) => {
        const {
          errors: { massage },
        } = err;
        setSubmitting(false);
        toast.error(massage);
      });
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <>{!!value ? <UserForm edit={value} onEdit={handleEdit} /> : <Loading />}</>
  );
};
export default User;
