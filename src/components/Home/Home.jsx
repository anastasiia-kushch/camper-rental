import { NavLink } from 'react-router-dom';
import { Button } from '../Button/Button';
import css from './Home.module.css';

export default function Home() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>
        Discover Ukraine like never before
        <br />
        Rent a <span className={css.spanCamp}>camper</span> today!
      </h1>

      <ul className={css.benefits}>
        <li className={css.benefit}>
          <span className={css.span}>modern</span> campers
        </li>
        <li className={css.benefit}>
          <span className={css.span}>flexible</span> rental terms
        </li>
        <li className={css.benefit}>
          <span className={css.span}>24/7</span> support
        </li>
      </ul>

      <NavLink to="/catalog">
        <Button text={'Book now'} type={'bookNow'} />
      </NavLink>
    </div>
  );
}
