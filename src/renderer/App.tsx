import './styles/app.scss';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import { Loading, TitleBar } from './components';
import { HomePage, CourseList, ExamList, Courses, Exams } from './pages';
import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 6000);
  }, []);

  return loading ? (
    <Loading cancel={() => setLoading(false)} />
  ) : (
    <HashRouter>
      <header>
        <TitleBar />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<CourseList />} />
          <Route path="/exams" element={<ExamList />} />

          {/* Courses Pages */}
          <Route path="/courses/2/1" element={<HomePage />} />
          <Route
            path="/courses/1/1"
            element={<Courses.FirstCourse.First1Course />}
          />
          <Route
            path="/courses/1/2"
            element={<Courses.FirstCourse.Second1Course />}
          />
          <Route
            path="/courses/1/3"
            element={<Courses.FirstCourse.Third1Course />}
          />

          {/* Exams Pages */}
          <Route path="/exams/1/1" element={<Exams.FirstExam.First1Exam />} />
        </Routes>
      </main>
    </HashRouter>
  );
}

export default App;
