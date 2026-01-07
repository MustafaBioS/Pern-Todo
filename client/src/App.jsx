import HomePage from './pages/HomePage';
import TaskPage from './pages/TaskPage';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/todos/:id" element={<TaskPage />} />
      </Routes>
    </div>
  )
}

export default App
