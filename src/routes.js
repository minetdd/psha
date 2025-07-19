import Home from './components/Home';
import Services from './components/Services';
import ComingSoon from './components/ComingSoon';
import About from './components/About';

const routes = [
  { path: '/', element: <Home /> },
  { path: '/service', element: <Services /> },
  { path: '/about', element: <About /> },
  { path: '/contact', element: <ComingSoon title="Contact Us" /> },
];

export default routes;
