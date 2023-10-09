import classNames from 'classnames';
import { useReducer } from 'react';
import styles from './styles.module.css';
import { Button } from '../Button/component';

const initialState = {
  name: 'Ivan',
  review: 'Оставьте ваш отзыв',
  rate: 5,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'change_name': {
      return {
        ...state,
        name: action.payload.value,
      };
    }
    case 'change_review': {
      return {
        ...state,
        review: action.payload.value,
      };
    }
    case 'change_rate': {
      return {
        ...state,
        rate: action.payload.value,
      };
    }
    case 'reset': {
      return { ...initialState };
    }
    default:
      return state;
  }
};

export function ReviewForm() {
  const [formValue, dispatch] = useReducer(reducer, initialState);
  console.log(formValue);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submited: ', formValue);
    dispatch(
      {
        type: 'reset',
      },
    );
  };

  return (
    <div>
      <h4 className={styles['review-form__title']}>Leave your review</h4>
      <form
        data-id={styles['review-form']}
        onSubmit={handleSubmit}
      >
        <div className={styles['form-group']}>
          <div className={styles['form-name']}>
            Name:
          </div>
          <input
            value={formValue.name}
            onChange={(event) => dispatch(
              {
                type: 'change_name',
                payload: { field: 'name', value: event.target.value },
              },
            )}
            id="name"
            type="text"
            name="name"
          />
        </div>
        <div className={styles['form-group']}>
          <div className={styles['form-name']}>
            Review:
          </div>
          <textarea
            value={formValue.review}
            onChange={(event) => dispatch(
              {
                type: 'change_review',
                payload: { field: 'review', value: event.target.value },
              },
            )}
            className={['styles.review-form_message']}
            data-id="review-form-text"
          />
        </div>
        <div className={styles['form-group']}>
          <div className={classNames(
            styles['form-name'],
            styles['rate-name'],
          )}
          >
            Rating:
          </div>
          <div className={styles['review-form__rate_wrapper']}>
            <select
              value={formValue.rate}
              onChange={(event) => dispatch(
                {
                  type: 'change_rate',
                  payload: { field: 'rate', value: event.target.value },
                },
              )}
              name="select"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="2">3</option>
              <option value="2">4</option>
              <option value="2">5</option>
            </select>
          </div>
        </div>
        <Button
          title="PUBLISH REVIEW"
          className={styles['review-form__submit']}
          type="submit"
        />
      </form>
    </div>

  );
}
