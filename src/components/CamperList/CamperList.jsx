import { useState, useEffect } from 'react';
import CamperItem from '../CamperItem/CamperItem';
import css from './CamperList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCampers,
  selectLoading,
  selectError,
} from '../../redux/selectors.js';
import { Button } from '../Button/Button';
import Filters from '../Filters/Filters.jsx';
import { getCampers } from '../../redux/operations.js';
import Loader from '../Loader/Loader.jsx';

export default function CamperList() {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  const [visibleCampers, setVisibleCampers] = useState(4);
  const [filteredCampers, setFilteredCampers] = useState([]);

  useEffect(() => {
    dispatch(getCampers()); // Dispatch the action to fetch campers
  }, [dispatch]); // Add dispatch to dependency array

  useEffect(() => {
    if (campers) {
      setFilteredCampers(campers);
    }
  }, [campers]); // React to changes in campers

  const handleLoadMore = () => {
    setVisibleCampers((prevCount) => prevCount + 4);
  };

  const handleSearch = (query) => {
    if (campers) {
      const filtered = campers.filter((camper) =>
        camper.location.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredCampers(filtered);
      setVisibleCampers(4);
    }
  };

  if (isError) {
    return <div>Error loading campers...</div>;
  }

  return (
    <div>
      {isLoading && <Loader />}
      <Filters onSubmit={handleSearch} />
      <ul className={css.cont}>
        {filteredCampers.slice(0, visibleCampers).map((camper) => (
          <li key={camper.id}>
            <CamperItem data={camper} />
          </li>
        ))}
      </ul>
      {visibleCampers < filteredCampers.length && (
        <Button type={'loadMore'} text={'Load more'} onClick={handleLoadMore} />
      )}
    </div>
  );
}
