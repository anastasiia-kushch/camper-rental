import { useState, useEffect } from 'react';
import CamperItem from '../CamperItem/CamperItem';
import css from './CamperList.module.css';
import { useSelector } from 'react-redux';
import { selectCampers } from '../../redux/selectors.js';
import { Button } from '../Button/Button';
import Filters from '../Filters/Filters.jsx';

export default function CamperList() {
  const campers = useSelector(selectCampers);
  const [visibleCampers, setVisibleCampers] = useState(4);
  const [filteredCampers, setFilteredCampers] = useState([]);

  useEffect(() => {
    if (campers) {
      setFilteredCampers(campers);
    }
    console.log(campers);
  }, [campers]);

  const handleLoadMore = () => {
    setVisibleCampers((prevCampers) => prevCampers + 4);
  };

  const handleSearch = (query) => {
    const filtered = (campers || []).filter((camper) =>
      camper.location.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCampers(filtered);
    setVisibleCampers(4);
  };

  return (
    <div>
      <Filters onSubmit={handleSearch} />
      <ul className={css.cont}>
        {(filteredCampers || []).slice(0, visibleCampers).map((camper) => (
          <li key={camper.id}>
            <CamperItem data={camper} />
          </li>
        ))}
      </ul>
      {visibleCampers < (filteredCampers || []).length && (
        <Button type={'loadMore'} text={'Load more'} onClick={handleLoadMore} />
      )}
    </div>
  );
}
