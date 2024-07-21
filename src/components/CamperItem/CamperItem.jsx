import css from './CamperItem.module.css';
import { Button } from '../Button/Button.jsx';

export default function CamperItem({ ...data }) {
  return (
    <div className={css.cont}>
      <img src="{}" className={css.img} alt="camper" />
      <div className={css.content}>
        <div className={css.firstSec}>
          <p>{data.name}</p>
          <p>{data.price}</p>
        </div>
        <div className={css.secondSec}>
          <div className={css.rating}>
            {/* {icon} */}
            <p>rating</p>
          </div>
          <p>location</p>
        </div>
        <p className={css.description}>
          Embrace simplicity and freedom with the Mavericks panel truck, an
          ideal choice for solo travelers or couples seeking a compact and
          efficient way to explore the open roads.
        </p>
        <div className={css.features}></div>
        <Button type={'showMore'} text={'Show more'} />
      </div>
    </div>
  );
}
