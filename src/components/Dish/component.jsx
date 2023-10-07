import { useState } from 'react';
import { Button } from '../Button/component';
import styles from './styles.module.css';

export function Dish({ name }) {
  const [amount, setAmount] = useState(0);

  if (!name) {
    return null;
  }

  return (
    <div>
      {name}
      -
      <div className={styles.product_counter}>
        <div className={styles.product_buttonGroup}>
          <Button
            title="-"
            onClick={() => setAmount(amount - 1)}
            disabled={amount === 0}
          />
          <div className={styles['product-count']}>
            {amount}
          </div>

          <Button
            title="+"
            onClick={() => setAmount(amount + 1)}
            disabled={amount === 5}
          />
        </div>
      </div>

    </div>
  );
}
