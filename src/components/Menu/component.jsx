import { Dish } from '../Dish/component';

export function Menu({ menuList }) {
  if (!menuList?.length === 0) {
    return null;
  }

  return (
    <ul>
      {menuList.map((menu) => <li key={menu.id}><Dish name={menu.name} /></li>)}
    </ul>
  );
}
