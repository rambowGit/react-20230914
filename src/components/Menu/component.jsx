import { Dish } from '../Dish/component';

export function Menu({ menu }) {
  if (menu?.length === 0) {
    return null;
  }

  return (
    <ul>
      {menu.map((dish) => (
        <li key={dish.id}>
          <Dish name={dish.name} />
        </li>
      ))}
    </ul>
  );
}
