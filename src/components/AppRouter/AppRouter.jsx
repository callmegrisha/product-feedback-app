import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const HomePage = lazy(() => import('../../pages/HomePage'));
const SuggestionPage = lazy(() => import('../../pages/SuggestionPage'));
const FeedbackPage = lazy(() => import('../../pages/FeedbackPage'));

export const AppRouter = () => {
  return (
    <Routes>
      <Route
        index
        element={
          <Suspense>
            <HomePage />
          </Suspense>
        }
      />
      <Route
        path="/suggestion/:id"
        element={
          <Suspense>
            <SuggestionPage />
          </Suspense>
        }
      />
      <Route
        path="/suggestion/new"
        element={
          <Suspense>
            <FeedbackPage />
          </Suspense>
        }
      />
      <Route
        path="/suggestion/:id/edit"
        element={
          <Suspense>
            <FeedbackPage isEdit />
          </Suspense>
        }
      />
    </Routes>
  );
};
