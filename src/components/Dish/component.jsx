import { useState } from 'react';
import { Button } from '../Button/component';
import styles from './styles.module.css';

export function Dish({ dish }) {
  const [amount, setAmount] = useState(0);

  if (!dish) {
    return null;
  }
  
  return (
    <div>
      {dish.name}
      -
      <div className={styles.product_counter}>
        <div className={styles.product_buttonGroup}>
          <Button
            title="-"
            onClick={() => setAmount(amount - 1)}
            className={styles['product-button']}
            disabled={amount === 0}
          />
          <div className={styles['product-count']}>
            {amount}
          </div>

          <Button
            title="+"
            onClick={() => setAmount(amount + 1)}
            className={styles['product-button']}
            disabled={amount === 5}
          />
        </div>
      </div>

    </div>
  );
}
