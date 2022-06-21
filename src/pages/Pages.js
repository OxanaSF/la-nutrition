import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './Home';
import Cuisine from './Cuisine';
import Searched from './Searched';
import Recipe from './Recipe';
import GenerateWeek from './GenerateWeek';
import { AnimatePresence } from 'framer-motion';

const Pages = (props) => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="/recipe/:name" element={<Recipe />} />
        <Route path="/generate" element={<GenerateWeek />} />
      </Routes>
    </AnimatePresence>
  );
};

export default Pages;
