import BookForm from '../BookForm/BookForm';
import { Icon } from '../Icons/Icons';
import css from './Features.module.css';

export default function Features({ data }) {
  const {
    adults,
    transmission,
    details = {},
    engine,
    form,
    length,
    width,
    height,
    tank,
  } = data;

  function formatText(text) {
    return text
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      .replace(/^./, (str) => str.toUpperCase());
  }
  return (
    <div className={css.mainCont}>
      <div className={css.infoCont}>
        <ul className={css.featuresList}>
          <li className={css.feature}>
            <Icon width="20" height="20" id="icon-adults" />
            <p>{adults} adults</p>
          </li>
          <li className={css.feature}>
            <Icon width="20" height="20" id="icon-automatic" />
            <p className={css.text}>{transmission}</p>
          </li>
          {details.airConditioner && (
            <li className={css.feature}>
              <Icon width="20" height="20" id="icon-ac" />
              <p>AC</p>
            </li>
          )}
          <li className={css.feature}>
            <Icon width="20" height="20" id="icon-petrol" />
            <p className={css.text}>{engine}</p>
          </li>
          {details.kitchen && (
            <li className={css.feature}>
              <Icon width="20" height="20" id="icon-kitchen" />
              <p>Kitchen</p>
            </li>
          )}
          <li className={css.feature}>
            <Icon
              width="20"
              height="20"
              id="icon-beds"
              fill="none"
              stroke="#101828"
            />
            <p>{details.beds} beds</p>
          </li>
          <li className={css.feature}>
            <Icon
              width="20"
              height="20"
              id="icon-air"
              fill="none"
              stroke="#101828"
            />
            <p>{details.airConditioner} air conditioner</p>
          </li>
          {details.CD ? (
            <li className={css.feature}>
              <Icon
                width="20"
                height="20"
                id="icon-CD"
                fill="none"
                stroke="#101828"
              />
              <p>CD</p>
            </li>
          ) : (
            ''
          )}
          {details.radio && (
            <li className={css.feature}>
              <Icon
                width="20"
                height="20"
                id="icon-radio"
                fill="none"
                stroke="#101828"
              />
              <p>Radio</p>
            </li>
          )}
          <li className={css.feature}>
            <Icon
              width="20"
              height="20"
              id="icon-hob"
              fill="none"
              stroke="#101828"
            />
            <p>{details.hob} hob</p>
          </li>
        </ul>
        <h3 className={css.subTitle}>Vehicle details</h3>
        <hr className={css.hr} />
        <ul className={css.detailsList}>
          <li className={css.detailsItem}>
            <p>Form</p>
            <p>{formatText(form)}</p>
          </li>
          <li className={css.detailsItem}>
            <p>Length</p>
            <p>{formatText(length)}</p>
          </li>
          <li className={css.detailsItem}>
            <p>Width</p>
            <p>{formatText(width)}</p>
          </li>
          <li className={css.detailsItem}>
            <p>Height</p>
            <p>{formatText(height)}</p>
          </li>
          <li className={css.detailsItem}>
            <p>Tank</p>
            <p>{formatText(tank)}</p>
          </li>
        </ul>
      </div>
      <BookForm />
    </div>
  );
}
