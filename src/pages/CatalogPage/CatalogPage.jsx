import CamperList from '../../components/CamperList/CamperList';
import Filters from '../../components/Filters/Filters';
import css from './CatalogPage.module.css';

export default function CatalogPage() {
  return (
    <div className={css.cont}>
      <Filters />
      <CamperList />
    </div>
  );
}
