import { Dish } from '../Dish/component';
import styles from './styles.module.css';

export function Menu({ menu }) {
  if (menu?.length === 0) {
    return null;
  }

  return (
    <ul>
      {menu.map((dish) => (
        <li key={dish.id}>
          <div className={styles.product_content}>
            <Dish name={dish.name} />
          </div>

        </li>
      ))}
    </ul>
  );
}
