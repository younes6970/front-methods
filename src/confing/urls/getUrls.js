import Urls from "./urls";

class GetUrls extends Urls {
lists () {
    return `${this.web("v1")}/list`
}
user(){
    return `${this.web("v1")}/list/user`
}
}
export default GetUrls