import { useDispatch, useSelector } from 'react-redux';
import css from './FavoritesPage.module.css';
import { selectFavoriteCampers } from '../../redux/campers/selectors';
import { Icon } from '../../components/Icons/Icons.jsx';
import ModalWindow from '../../components/ModalWindow/ModalWindow.jsx';
import { useState } from 'react';
import { deleteFavorite } from '../../redux/campers/slice';

export default function FavouritesPage() {
  const favoriteCampers = useSelector(selectFavoriteCampers);
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCamper, setSelectedCamper] = useState(null);

  const openModal = (camper) => {
    setSelectedCamper(camper);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCamper(null);
  };

  const handleFavoriteClick = (camper) => {
    dispatch(deleteFavorite(camper._id));
  };

  return (
    <div className={css.mainCont}>
      <ul className={css.favList}>
        {favoriteCampers.map((camper) => (
          <li key={camper._id} className={css.favItem}>
            <img src={camper.gallery[0]} alt="camper" className={css.img} />
            <div className={css.title}>
              <p>{camper.name}</p>
              <p>&#8364;{camper.price}.00</p>
            </div>
            <div className={css.secondSec}>
              <div className={css.rating}>
                <Icon
                  id="icon-rating"
                  fill={'#ffc531'}
                  width={'16'}
                  height={'16'}
                />
                <p>
                  {camper.rating}({camper.reviews.length} Reviews)
                </p>
              </div>
              <div className={css.location}>
                <Icon
                  id="icon-location"
                  stroke={'#101828'}
                  fill={'none'}
                  width={'16'}
                  height={'16'}
                />
                <p>{camper.location}</p>
              </div>
            </div>
            <div className={css.buttons}>
              <button
                className={css.buttonShow}
                onClick={() => openModal(camper)}
              >
                Show more
              </button>
              <button
                className={css.buttonDelete}
                onClick={() => handleFavoriteClick(camper)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      <ModalWindow
        isOpen={isModalOpen}
        onClose={closeModal}
        data={selectedCamper}
      />
    </div>
  );
}
