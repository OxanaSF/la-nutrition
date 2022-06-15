import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Cuisine from './Cuisine';
import Searched from './Searched';
import GenerateWeek from './GenerateWeek';



const Pages = () => {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cuisine/:type" element={<Cuisine />} />
      <Route path="/searched/:search" element={<Searched />} />
      <Route path="/generate" element={<GenerateWeek />} />
    </Routes>

  );
};


export default Pages;
