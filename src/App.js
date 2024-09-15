import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
//import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Tickets from './pages/Tickets';
import Approvals from './pages/Approvals';
import Restaurants from './pages/Restaurants';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/approvals" element={<Approvals />} />
          <Route path="/restarurants" element={<Restaurants />} />
        </Routes>
        {/* <div className="App">
          <header className="App-header">
            Admin App
          </header>
        </div> */}
      </Layout>
    </>
  );
}

export default App;
