import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Cuisines from './Cuisines';

const Pages = () => {
  return (

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisines/:type" element={<Cuisines />} />
      </Routes>
   
  );
};

export default Pages;
