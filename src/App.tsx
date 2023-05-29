import * as React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import Loading from './components/Loading';

const Home = React.lazy(() => import('./pages/Home'));
const MovieList = React.lazy(() => import('./pages/Movie/List.Page'));
const Movie = React.lazy(() => import('./pages/Movie/Show.Page'));
const TVList = React.lazy(() => import('./pages/TV/List.Page'));
const TV = React.lazy(() => import('./pages/TV/List.Page'));
const TVSeason = React.lazy(() => import('./pages/TV/Season/Show.Page'));
const PeopleList = React.lazy(() => import('./pages/People/List.Page'));
const Person = React.lazy(() => import('./pages/People/Show.Page'));
const NoMatch = React.lazy(() => import('./pages/NoMatch'));

const App = () => {
  return (
    <>
      <BrowserRouter>
      
      <Routes>
        <Route
          index
          ErrorBoundary={ErrorBoundary}
          element={
            <React.Suspense fallback={<Loading />}>
              <Home />
            </React.Suspense>
          }
        />
        <Route
          path="movie"
          element={
            <React.Suspense fallback={<Loading />}>
              <MovieList />
            </React.Suspense>
          }
          children={[
            <Route
              path='movie/:id'
              element={
                <React.Suspense fallback={<Loading />}>
                  <Movie />
                </React.Suspense>
              }
            />
          ]}
        />
        <Route
          path="tv"
          element={
            <React.Suspense fallback={<Loading />}>
              <TVList />
            </React.Suspense>
          }
          children={[
            <Route
              path='tv/:id'
              element={
                <React.Suspense fallback={<Loading />}>
                  <TV />
                </React.Suspense>
              }
            />,
            <Route
              path='tv/:id/season'
              element={
                <React.Suspense fallback={<Loading />}>
                  <TVSeason />
                </React.Suspense>
              }
            />
          ]}
        />
        <Route
          path="people"
          element={
            <React.Suspense fallback={<Loading />}>
              <PeopleList />
            </React.Suspense>
          }
          children={[
            <Route
              path='people/:id'
              element={
                <React.Suspense fallback={<Loading />}>
                  <Person />
                </React.Suspense>
              }
            />
          ]}
        />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
