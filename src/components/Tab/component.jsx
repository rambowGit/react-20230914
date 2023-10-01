import classNames from 'classnames';
import styles from './styles.module.css';

export function Tab({
  title, onClick, isActive, index,
}) {
  return (
    <button
      type="button"
      /*
       Обрабатываем клик, чтобы изменить restaurantActivTabIndex в стейте Main page.
       Дополнительно передаем в родительский RestaurantTabs индекс ресторана,
       чтобы выделить таб, по которому кликнули

       */
      onClick={() => onClick(index)}
      className={classNames(
        styles.button,
        {
          [styles.active]: isActive,
        },
      )}
    >
      {title}
    </button>
  );
}
