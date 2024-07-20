import NotFound from '../../components/NotFound/NotFound';
import css from './NotFoundPage.module.css';

export default function NotFoundPage() {
  return (
    <div className={css.container}>
      <NotFound />
    </div>
  );
}
