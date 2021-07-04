class Methods {
  convertArabicToLatin = (input) => {
    if (input == undefined) return;
    var inLatin = "",
      mapping = {
        "١": "1",
        "٢": "2",
        "٣": "3",
        "٤": "4",
        "٥": "5",
        "٦": "6",
        "٧": "7",
        "٨": "8",
        "٩": "9",
        "٠": "0",
      };
    // 66568861  ٠٢١٦٦٥٦٨٨٦١
    input = input.toString();
    for (var i = 0; i < input.length; i++)
      if (mapping[input[i]]) inLatin += mapping[input[i]];
      else inLatin += input[i];

    return inLatin;
  };
  convertToLatin = (input) => {
    if (input == undefined) return;
    var inLatin = "",
      mapping = {
        "۱": "1",
        "۲": "2",
        "۳": "3",
        "۴": "4",
        "۵": "5",
        "۶": "6",
        "۷": "7",
        "۸": "8",
        "۹": "9",
        "۰": "0",
      };

    input = input.toString();
    for (var i = 0; i < input.length; i++)
      if (mapping[input[i]]) inLatin += mapping[input[i]];
      else inLatin += input[i];

    inLatin = this.convertArabicToLatin(inLatin);

    return inLatin;
  };
  convertToPersian = (input) => {
    if (input == undefined) return;
    var inPersian = "",
      mapping = {
        "1": "۱",
        "2": "۲",
        "3": "۳",
        "4": "۴",
        "5": "۵",
        "6": "۶",
        "7": "۷",
        "8": "۸",
        "9": "۹",
        "0": "۰",
        ".": ".",
      };
    input = input.toString();
    for (var i = 0; i < input.length; i++) {
      if (mapping[input[i]]) inPersian += mapping[input[i]];
      else inPersian += input[i];
    }
    return inPersian;
  };
  convertDateToPersian = (input) => {
    if (input == undefined) return;
    const dateValues = input.split("/");
    const year = this.convertToPersian(dateValues[0]);
    const month = this.convertToPersian(dateValues[1]);
    const day = this.convertToPersian(dateValues[2]);

    const persianDate =
      year + (month ? "/" + month : "") + (day ? "/" + day : "");
    return persianDate;
  };
  thousandSeparator = (x) => {
    const numberEN = this.convertToLatin(x);
    const number = this.removeAllOccurances(numberEN, ",");
    if (x || x == 0)
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    else {
      return null;
    }
  };
  removeAllOccurances = (string, find) => {
    if (!string) {
      return "";
    }
    return string.split(find).join("");
  };

  onlyNumber = (number, oldNumber) => {
    const isNumber = !isNaN(number);
    if (isNumber) {
      return number.trimEnd().trimStart();
    } else {
      return oldNumber.trimEnd().trimStart();
    }
  };
  dataCharts = (data, order, isPercent = true) => {
    let value = [];
    data.columns.forEach((val) => {
      const idx = val.order;
      const x = {
        name: "",
        value: "",
        percent: "",
      };
      x.name = val.title;
      x.value = +data.rows[order].columnData[idx];
      if (isPercent) x.percent = +data.rows[order + 1].columnData[idx];
      value.push(x);
    });
    return value;
  };

  isString = (x) => {
    return Object.prototype.toString.call(x) === "[object String]";
  };
  isObject = (obj) => {
    return obj === Object(obj);
  };
  isEnglish = (value) => {
    const onlyEnglish = new RegExp("^\\s*([0-9a-zA-Z]*)\\s*$");
    const isValue = onlyEnglish.test(value);
    return isValue;
  };
  isPassword = (value) => {
    const pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,30}$/;
    const isPass = pass.test(value);

    return isPass;
  };
}
export default new Methods();
