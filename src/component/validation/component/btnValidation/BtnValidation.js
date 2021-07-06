import Link from "next/link";
import styles from "../../styles/validation.module.scss"
const BtnValidation = () => {
  return (
    <Link href={"/validation"}>
      <a className={styles.boxVali}>اعتبار سنجی</a>
    </Link>
  );
};
export default BtnValidation;
