import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './Pages/HomePage';
import ClientConfigPage from './Pages/ClientConfig';
import ClientInputPage from './Pages/ClientInputPage'; // Import the new page

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route path="/client-config/:clientId" element={<ClientConfigPage/>} />
          <Route path="/add-client" element={<ClientInputPage/>} /> {/* New route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;





