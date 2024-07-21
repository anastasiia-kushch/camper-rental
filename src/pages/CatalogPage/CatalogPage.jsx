import CamperList from '../../components/CamperList/CamperList';
import css from './CatalogPage.module.css';

export default function CatalogPage() {
  return (
    <div className={css.cont}>
      <CamperList />
    </div>
  );
}
