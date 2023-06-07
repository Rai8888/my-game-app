import { useRoutes } from 'react-router-dom';
import { PrivateRoute } from './components';
import { Auth, Game, Stats, NotFound } from './pages';

export const App = () => {
    const routes = useRoutes([
        {
            path: '/',
            element: <Auth />,
        },
        {
            path: '/game',
            element: <PrivateRoute element={<Game />} />,
        },
        {
            path: '/stats',
            element: <PrivateRoute element={<Stats />} />,
        },
        {
            path: '*',
            element: <NotFound />,
        },
    ]);
    return routes;


};