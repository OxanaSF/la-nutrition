import { Route, Routes, BrowserRouter } from 'react-router-dom';
import GlobalStyles from './components/GlobalStyles';
import Pages from './pages/Pages';
import Categories from './components/Categories';

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <BrowserRouter>
        <Categories />
        <Pages />
      </BrowserRouter>
    </div>
  );
};

export default App;
