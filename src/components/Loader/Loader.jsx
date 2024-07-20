import { Bars } from 'react-loader-spinner';
import css from '../Loader/Loader.module.css';

export default function Loader() {
  return (
    <div className={css.loader}>
      <Bars
        height="80"
        width="80"
        color="#292f1be9"
        ariaLabel="bars-loading"
        visible={true}
      />
    </div>
  );
}
