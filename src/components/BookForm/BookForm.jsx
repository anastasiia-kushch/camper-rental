import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { addBookings } from '../../redux/booking/operations';
import toast from 'react-hot-toast';
import css from './BookForm.module.css';

export default function BookForm() {
  const schema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    bookingDate: Yup.date().required('Booking date is required'),
    comment: Yup.string(),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  });

  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      console.log('Form data before processing:', data);

      data.name = data.name.trim();
      data.email = data.email.trim();
      data.comment = data.comment.trim();
      data.bookingDate = new Date(data.bookingDate).toISOString();
      await dispatch(addBookings(data)).unwrap();
      toast.success('Reservation completed!🥳');
      reset();
    } catch (error) {
      toast.error('Something went wrong.. Try again!');
    }
  };

  return (
    <div className={css.cont}>
      <div className={css.textCont}>
        <h4 className={css.mainText}>Book your campervan now</h4>
        <p className={css.text}>
          Stay connected! We are always ready to help you.
        </p>
      </div>
      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        <input
          className={`${css.input} ${errors.name ? css.error : ''}`}
          type="text"
          placeholder="Name"
          {...register('name')}
        />
        {errors.name && (
          <p className={css.errorMessage}>{errors.name.message}</p>
        )}

        <input
          className={`${css.input} ${errors.email ? css.error : ''}`}
          type="text"
          placeholder="Email"
          {...register('email')}
        />
        {errors.email && (
          <p className={css.errorMessage}>{errors.email.message}</p>
        )}

        <input
          className={`${css.input} ${errors.bookingDate ? css.error : ''}`}
          type="date"
          placeholder="Booking date"
          {...register('bookingDate')}
        />
        {errors.bookingDate && (
          <p className={css.errorMessage}>{errors.bookingDate.message}</p>
        )}

        <textarea
          className={css.comment}
          placeholder="Comment"
          {...register('comment')}
        />
        {errors.comment && (
          <p className={css.errorMessage}>{errors.comment.message}</p>
        )}

        <button className={css.button} type="submit">
          Send
        </button>
      </form>
    </div>
  );
}
