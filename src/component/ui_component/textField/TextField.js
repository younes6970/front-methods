import styles from "./textField.module.scss";
import PropTypes from "prop-types";
import { BoxInput, DivField, Input, Label } from "./styles";

const TextField = (props) => {
  const {
    name,
    title,
    onChange,
    maxLength,
    type,
    placeholder,
    value,
    disabled,
    error,
    touched,
  } = props;
  return (
    <DivField>
      <Label htmlFor={name}>{title} :</Label>
      <BoxInput>
        <Input
          onChange={onChange}
          maxLength={maxLength}
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          id={name}
        />
        {error && touched && (
          <div className={styles.error_message}>{error}</div>
        )}
      </BoxInput>
    </DivField>
  );
};
export default TextField;

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  maxLength: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  touched: PropTypes.bool,
};
