import Home from './components/Home';
import Services from './components/Services';
import ComingSoon from './components/ComingSoon';

const routes = [
  { path: '/', element: <Home /> },
  { path: '/service', element: <Services /> },
  { path: '/bio', element: <ComingSoon title="Bio" /> },
  { path: '/about', element: <ComingSoon title="About" /> },
  { path: '/contact', element: <ComingSoon title="Contact Us" /> },
];

export default routes;
