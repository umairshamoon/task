import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Login from './components/Login';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/login' exact element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
