class Urls {
  version(v) {
    return v;
  }
  platform() {
    return "/web";
  }
  web(v) {
    return `${this.version(v) + this.platform()}`;
  }
}
export default Urls;
