import { Section } from "../Section/Section.jsx";
import { Title } from "../Title/Title.jsx";
import styles from "./main.module.css";
function Main() {
  return (
    <div className={styles.container}>
      <Title title="Информация об университете" />
      <Section />
    </div>
  );
}
export { Main };
