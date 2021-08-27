import styles from "./sidebar.module.css";
import { Menu } from "../Menu/Menu.jsx";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Menu />
    </div>
  );
}
export { Sidebar };
