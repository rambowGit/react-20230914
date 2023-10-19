import { DishContainer } from "../Dish/container";
import styles from './styles.module.css';

export function Menu({ menu }) {
  if (menu?.length === 0) {
    return null;
  }

  return (
    <ul>
      {menu.map((id) => (
        <li key={id}>
          <div className={styles.product_content}>
            <DishContainer dishId={id} />
          </div>

        </li>
      ))}
    </ul>
  );
}
