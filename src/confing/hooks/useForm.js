import methods from "../methods";

export const useInput = () => {
  const handleChange = (e, key, values, setValues) => {
    const value = e.target.value;
    setValues({
      ...values,
      [key]: value,
    });
  };

  return [handleChange];
};
export const useValue = () => {
  const handleChange = (value, key, values, setValues) => {
    setValues({
      ...values,
      [key]: value,
    });
  };

  return [handleChange];
};
export const useInt = () => {
  const handleChange = (e, key, values, setValues) => {
    const value = e.target.value;
    const num = methods.convertToLatin(value);
    const number = methods.removeAllOccurances(num, ",");
    const isNumber = !isNaN(number);
    if (isNumber) {
      setValues({
        ...values,
        [key]: Number(number),
      });
    } else {
      setValues({
        ...values,
      });
    }
  };
  return [handleChange];
};
export const usePhone = () => {
  const handlePhone = (e, key, values, setValues) => {
    const val = e.target.value;
    const num = methods.convertToLatin(val);
    const reg = new RegExp("^[0-9]+$");
    const isReg = reg.test(num);
    if (isReg) {
      setValues({
        ...values,
        [key]: num,
      });
    } else {
      if (!num) {
        setValues({
          ...values,
          [key]: "",
        });
      } else {
        setValues({
          ...values,
        });
      }
    }
  };
  return [handlePhone];
};
