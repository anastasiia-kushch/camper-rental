import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

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

function App() {
  return (
    <div>
      <Suspense fallback={<div>LOADING...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<FavouritesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
