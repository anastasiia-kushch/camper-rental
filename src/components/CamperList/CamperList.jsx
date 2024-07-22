import { useState, useEffect } from 'react';
import CamperItem from '../CamperItem/CamperItem.jsx';
import css from './CamperList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCampers,
  selectLoading,
  selectError,
} from '../../redux/campers/selectors.js';
import Filters from '../Filters/Filters.jsx';
import { getCampers } from '../../redux/campers/operations.js';
import Loader from '../Loader/Loader.jsx';
import ModalWindow from '../ModalWindow/ModalWindow.jsx';

export default function CamperList() {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  const [visibleCampers, setVisibleCampers] = useState(4);
  const [filteredCampers, setFilteredCampers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCamper, setSelectedCamper] = useState(null);

  useEffect(() => {
    dispatch(getCampers());
  }, [dispatch]);

  useEffect(() => {
    setFilteredCampers(campers);
  }, [campers]);

  const handleSearch = (query) => {
    const filtered = filteredCampers.filter((camper) =>
      camper.location.toLowerCase().includes(query.location.toLowerCase())
    );
    setFilteredCampers(filtered);
    setVisibleCampers(4);
  };

  const handleLoadMore = () => {
    setVisibleCampers((prevCount) => prevCount + 4);
  };

  const openModal = (camper) => {
    setSelectedCamper(camper);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCamper(null);
  };

  if (isError) {
    return <div>Error loading campers...</div>;
  }

  return (
    <div className={css.mainCont}>
      {isLoading && <Loader />}
      <Filters onSubmit={handleSearch} />
      <div className={css.cont}>
        <ul className={css.listCont}>
          {filteredCampers.slice(0, visibleCampers).map((camper) => (
            <li key={camper._id}>
              <CamperItem data={camper} onShowMore={() => openModal(camper)} />
            </li>
          ))}
        </ul>
        {visibleCampers < filteredCampers.length && (
          <button className={css.loadMoreBtn} onClick={handleLoadMore}>
            Load More
          </button>
        )}
      </div>
      <ModalWindow
        isOpen={isModalOpen}
        onClose={closeModal}
        data={selectedCamper}
      />
    </div>
  );
}
