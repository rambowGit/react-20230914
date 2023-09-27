import restaurants from '../../constants/mock';
import { Button } from '../Button/component';

export function Tab({ title, onClickFn }) {
  if (!restaurants?.length) {
    return null;
  }

  return (
    <Button
      title={title}
      onClick={onClickFn}
      disabled={null}
    />
  );
}
