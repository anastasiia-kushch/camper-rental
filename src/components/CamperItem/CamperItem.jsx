import css from './CamperItem.module.css';
import { Button } from '../Button/Button.jsx';

export default function CamperItem() {
  return (
    <div className={css.cont}>
      <img src="{}" className={css.img} alt="camper" />
      <div className={css.content}>
        <div className={css.firstSec}>
          <p>Camper model</p>
          <p>price</p>
        </div>
        <div className={css.secondSec}>
          <div className={css.rating}>
            {/* {icon} */}
            <p>rating</p>
          </div>
          <p>location</p>
        </div>
        <p>The pictures shown here are example vehicles of the respective.</p>
        <div className={css.features}></div>
        <Button type={'search'} text={'Show more'} />
      </div>
    </div>
  );
}
