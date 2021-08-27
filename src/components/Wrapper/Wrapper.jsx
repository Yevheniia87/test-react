import { Sidebar } from "../Sidebar/Sidebar.jsx";
import { Main } from "../Main/Main.jsx";
import styles from "./wrapper.module.css";

function Wrapper() {
  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <Main />
    </div>
  );
}
export { Wrapper };
