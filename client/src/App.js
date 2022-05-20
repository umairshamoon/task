import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard';
import NotFound from './components/NotFound';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' exact element={<Login />} />
          <Route
            path='/dashboard'
            element={<AdminDashboard />}
          />

          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
