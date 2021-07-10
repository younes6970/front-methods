import methods from "../../../../confing/methods";
import { Button, Table, Th, Thead, Tr } from "../../styles/styles";
import Image from "next/image";
import { Div } from "../../../../styles/styles";
import Link from "next/link";
import { useEffect } from "react";
const BoxList = (props) => {
  const { lists, onDelete } = props;
  const handleDelete = (id) => {
    onDelete(id);
  };

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>نام کاربری</Th>
          <Th>نام</Th>
          <Th>سن</Th>
          <Th>کد</Th>
          <Th>عملیات</Th>
        </Tr>
      </Thead>
      <tbody>
        {lists.map((list) => {
          return (
            <Tr>
              <Th as="td">{list.username}</Th>
              <Th as="td">{methods.convertToPersian(list.name)}</Th>
              <Th as="td">{methods.convertToPersian(list.age)}</Th>
              <Th as="td">{methods.convertToPersian(list.code)}</Th>
              <Th as="td">
                <Div content={"center"} item={"center"}>
                  <Link href={`/sample/lists/user/${list.id}`}>
                    <a>
                      <Image
                        src={"/icon/edit.png"}
                        alt={"edit"}
                        width={25}
                        height={25}
                      />
                    </a>
                  </Link>
                  <Button onClick={() => handleDelete(list.id)}>
                    <Image
                      src={"/icon/trash-bin.png"}
                      alt={"edit"}
                      width={25}
                      height={25}
                    />
                  </Button>
                </Div>
              </Th>
            </Tr>
          );
        })}
      </tbody>
    </Table>
  );
};
export default BoxList;
