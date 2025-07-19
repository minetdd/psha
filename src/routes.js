import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import ContactUs from './components/ContactUs';

const routes = [
  { path: '/', element: <Home /> },
  { path: '/service', element: <Services /> },
  { path: '/about', element: <About /> },
  { path: '/contact', element: <ContactUs /> },
];

export default routes;
