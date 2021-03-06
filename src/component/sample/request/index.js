import Request from "../../../confing/request";
import PostUrls from "../../../confing/urls/postUrls";
import GetUrls from "../../../confing/urls/getUrls";

const getUrl = new GetUrls();
const postUrl = new PostUrls();

export const requestPostLogin = (data) => {
  const postLogin = new Request(postUrl.login());
  return postLogin.post(data).then((res) => res.data);
};
export const requestGetLists = (params) => {
  const getLists = new Request(getUrl.lists());
  return getLists.get(params).then((res) => res.data);
};
export const requestGetUser = (id) =>{
  const params = {
    id
  }
  const getUser = new Request(getUrl.user())
  return getUser.get(params).then(res => res.data)
}
export const requestPostUser = (data) =>{
  const postUser = new Request(postUrl.user())
  return postUser.post(data).then(res=> res.data)
}
