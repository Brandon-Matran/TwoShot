import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import HatsList from './HatsList';
import HatsForm from './HatsForm';
import ShoesList from './ShoesList';
import ShoeForm from './ShoeForm';
import ImageSlider from './ImageSlider';

function App(props) {


  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="hats/">
            /* <Route index element={<HatsList/>} />
            <Route path="new" element={<HatsForm />} />
          </Route>
          <Route path="shoes/">
            <Route index element={<ShoesList/>} />
            <Route path="new" element={<ShoeForm />} /> */
          /* </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
