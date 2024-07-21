import css from './CamperItem.module.css';
import { Button } from '../Button/Button.jsx';

export default function CamperItem({ data }) {
  const { name, price, image, rating, location, description, features } = data;

  return (
    <div className={css.cont}>
      <img src={image} className={css.img} alt="camper" />
      <div className={css.content}>
        <div className={css.firstSec}>
          <p>{name}</p>
          <p>{price}</p>
        </div>
        <div className={css.secondSec}>
          <div className={css.rating}>
            {/* {icon} */}
            <p>{rating || 'No rating'}</p>
          </div>
          <p>{location || 'No location'}</p>
        </div>
        <p className={css.description}>
          {description || 'No description available'}
        </p>
        <div className={css.features}>
          {features &&
            features.map((feature, index) => (
              <div key={index} className={css.feature}>
                {feature}
              </div>
            ))}
        </div>
        <Button type={'showMore'} text={'Show more'} />
      </div>
    </div>
  );
}
