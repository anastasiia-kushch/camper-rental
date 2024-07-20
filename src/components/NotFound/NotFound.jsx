import { NavLink } from 'react-router-dom';
import css from './NotFound.module.css';
import Icon from '../NotFoundIcon/NotFoundIcon.jsx';

export default function NotFound() {
  return (
    <div className={css.container}>
      <Icon />
      <h2 className={css.text}>Page not found</h2>
      <NavLink to="/" className={css.button}>
        Go back
      </NavLink>
    </div>
  );
}
