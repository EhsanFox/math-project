import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './styles/app.scss';

import { TitleBar } from './components';
import { FirstPage, SecondPage, ThirdPage } from './pages';

function App() {
  return (
    <BrowserRouter>
      <header>
        <TitleBar />
      </header>

      <main>
        {/* you can remove header in main if you want */}
        <header>
          <Link to="/">firstPage</Link>
          <Link to="/sec">secondPage</Link>
          <Link to="/thi">thirdPage</Link>
        </header>

        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/sec" element={<SecondPage />} />
          <Route path="/thi" element={<ThirdPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
