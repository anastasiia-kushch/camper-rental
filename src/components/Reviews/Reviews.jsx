import BookForm from '../BookForm/BookForm';
import { Rating } from '@mui/material';
import css from './Reviews.module.css';

export default function Reviews({ data }) {
  return (
    <div className={css.mainCont}>
      <ul className={css.reviewsCont}>
        {data.reviews.map((review, index) => (
          <li key={index}>
            <div className={css.user}>
              <div className={css.userIcon}>{review.reviewer_name[0]}</div>
              <div className={css.userInfo}>
                <p className={css.name}>{review.reviewer_name}</p>
                <Rating
                  name="half-rating-read"
                  defaultValue={review.reviewer_rating}
                  precision={0.5}
                  readOnly
                />
              </div>
            </div>
            <p className={css.comment}>{review.comment}</p>
          </li>
        ))}
      </ul>
      <BookForm />
    </div>
  );
}
