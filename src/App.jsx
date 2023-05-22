import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import '@fontsource/jost/400.css';
import '@fontsource/jost/500.css';
import '@fontsource/jost/700.css';
import '@fontsource/jost/800.css';

const Homepage = lazy(() => import('./pages/Homepage'));
const Suggestionpage = lazy(() => import('./pages/Suggestionpage'));

function App() {
  return (
    <>
      <Routes>
        <Route
          index
          element={
            <Suspense>
              <Homepage />
            </Suspense>
          }
        />
        <Route
          path='/suggestion/:id'
          element={
            <Suspense>
              <Suggestionpage />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
}

export default App;
