import Urls from "./urls";

class PostUrls extends Urls {
 login () {
    return  `${this.web("v1")}/login/pro`
}
user () {
     return `${this.web("v1")}/list`
}
}
export default PostUrls