import methods from "../../../../confing/methods";
import {Button, Table, Th, Thead, Tr} from "../../styles/styles";
import Image from "next/image";
import {Div} from "../../../../styles/styles";
const BoxList = (props) => {
  const { lists } = props;
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
              <Th as="td">{glist.username}</Th>
              <Th as="td">{methods.convertToPersian(list.name)}</Th>
              <Th as="td">{methods.convertToPersian(list.age)}</Th>
              <Th as="td">{methods.convertToPersian(list.code)}</Th>
              <Th as="td">
                <Div content={"center"} item={"center"}>
                  <Button>
                    <Image
                      src={"/icon/edit.png"}
                      alt={"edit"}
                      width={25}
                      height={25}
                    />
                  </Button>
                  <Button>
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
