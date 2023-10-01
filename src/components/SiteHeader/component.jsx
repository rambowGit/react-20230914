import { useState } from 'react';
import classNames from 'classnames';
import styles from './styles.module.css';

export function SiteHeader({ title, height, children }) {
  const [isSticky, onSticky] = useState(false);

  /*
   Add the sticky class to the header when you reach its scroll position.
   Remove "sticky" when you leave the scroll position
   */
  const stickyHandler = () => {
    if (window.pageYOffset > height + 20) {
      onSticky(true);
    } else {
      onSticky(false);
    }
  };

  // When the user scrolls the page, execute stickyHandler
  window.onscroll = () => stickyHandler();

  return (
    <div>
      <div className={classNames(
        styles['top-container'],
      )}
      >
        <p>ANYfOOD</p>
      </div>
      <div
        className={
          classNames(
            styles.header,
            {
              [styles.sticky]: isSticky,
            },
          )
        }
      >
        <h2>{title}</h2>
        <div>
          {/* tabs menu */}
          {children}
        </div>
      </div>

    </div>

  );
}
