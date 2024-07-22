import { Suspense, lazy } from 'react';
import { Toaster } from 'react-hot-toast';
import { Routes, Route } from 'react-router-dom';
import NavigationMenu from './components/NavMenu/NavMenu.jsx';

const HomePage = lazy(() => import('../src/pages/HomePage/HomePage.jsx'));
const CatalogPage = lazy(() =>
  import('../src/pages/CatalogPage/CatalogPage.jsx')
);
const FavouritesPage = lazy(() =>
  import('../src/pages/FavouritesPage/FavouritesPage.jsx')
);
const NotFoundPage = lazy(() =>
  import('../src/pages/NotFoundPage/NotFoundPage.jsx')
);

const CatalogPageWithMenu = () => (
  <>
    <NavigationMenu />
    <CatalogPage />
  </>
);

const FavouritesPageWithMenu = () => (
  <>
    <NavigationMenu />
    <FavouritesPage />
  </>
);

function App() {
  return (
    <div>
      <Toaster />
      <Suspense fallback={<div>LOADING...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPageWithMenu />} />
          <Route path="/favorites" element={<FavouritesPageWithMenu />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
