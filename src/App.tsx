import * as React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import Loading from './components/Loading';
import { ThemeModeProvider } from './context/ThemeMode';
import ErrorBoundaryClass from './components/ErrorBoundaryClass';

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
    <ErrorBoundaryClass>
    <ThemeModeProvider>
      <BrowserRouter>
        <Routes>
          <Route
            index
            path='/'
            errorElement={<ErrorBoundary />}
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
                key="show_movie"
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
                key="show_tv"
                element={
                  <React.Suspense fallback={<Loading />}>
                    <TV />
                  </React.Suspense>
                }
              />,
              <Route
                path='tv/:id/season'
                key="show_tv_season"
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
                key="show_people"
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
    </ThemeModeProvider>
    </ErrorBoundaryClass>
  );
};

export default App;
