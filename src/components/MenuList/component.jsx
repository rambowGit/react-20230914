import { Menu } from './Menu/component';

export function MenuList({ menuList }) {
  if (!menuList?.length === 0) {
    return null;
  }

  const listItems = menuList.map((menu) => <li key={menu.id}><Menu name={menu.name} /></li>);

  return (
    <ul>
      {listItems}
    </ul>
  );
}
