import CamperItem from '../CamperItem/CamperItem';
import css from './CamperList.module.css';

export default function CamperList() {
  return (
    <div className={css.cont}>
      <CamperItem />
      <CamperItem />
      <CamperItem />
    </div>
  );
}
