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
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/exams">StartCourse</Link>
        <Link to="/exam-template">Exam</Link>
        <Link to="/course-template">Course</Link>
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
