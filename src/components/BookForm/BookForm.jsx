import { useDispatch } from 'react-redux';
import css from './BookForm.module.css';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { addBookings } from '../../redux/booking/operations';
import toast from 'react-hot-toast';
react - hook - form;

export default function BookForm() {
  const schema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    bookingDate: Yup.date().required('Booking date is required'),
    comment: Yup.string(),
  });

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      data.name = data.name.trim();
      data.email = data.email.trim();
      data.comment = data.comment.trim();

      data.bookingDate = new Date(data.bookingDate).toISOString();

      await dispatch(addBookings(data)).unwrap();

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
          className={css.input}
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className={css.input}
          type="text"
          placeholder="Email"
          name="email"
        />
        <input
          className={css.input}
          type="text"
          placeholder="Booking date"
          name="bookingDate"
        />
        <textarea
          className={css.comment}
          type="text"
          placeholder="Comment"
          name="comment"
        />
      </form>
      <button className={css.button}>Send</button>
    </div>
  );
}
