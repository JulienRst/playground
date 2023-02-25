import AboutMePage from 'business/aboutMe/pages/aboutMe';
import HomePage from 'business/home/pages/home';
import SandboxPage from 'business/sandbox/pages/sandbox';
import { createBrowserRouter } from 'react-router-dom';
import Routes from './routes';

const router = createBrowserRouter([
  {
    path: Routes.Home,
    element: <HomePage />,
  },
  {
    path: Routes.AboutMe,
    element: <AboutMePage />,
  },
  {
    path: Routes.Sandbox,
    element: <SandboxPage />,
  },
]);

export default router;
