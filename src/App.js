import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TickViewer from './components/TickViewer';

function App() {
  return (
    <Router>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Tick Inspector</h1>
        <Routes>
          <Route path="/" element={<TickViewer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;