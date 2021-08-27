import { menuConfig } from "../Utils/menuConfig.js";
import styles from "./menu.module.css";
function Menu() {
  return (
    <div className={styles.menu}>
      {menuConfig.map((menuItem) => (
        <div key={menuItem.id} className={styles.menuItem}>
          {menuItem.icon}
          <span className={styles.menuName}>{menuItem.name}</span>
        </div>
      ))}
    </div>
  );
}
export { Menu };
