import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import './styles/app.scss';

import { TitleBar } from './components';
import {
  HomePage,
  CourseList,
  ExamList,
  ExamTemplate,
  CourseTemplate,
} from './pages';

function App() {
  return (
    <HashRouter>
        <header>
          <TitleBar />
        </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<CourseList />} />
          <Route path="/exams" element={<ExamList />} />
          <Route path="/exam-template" element={<ExamTemplate />} />
          <Route path="/course-template" element={<CourseTemplate />} />
        </Routes>
      </main>
    </HashRouter>
  );
}

export default App;
