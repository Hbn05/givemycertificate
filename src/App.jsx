import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import CertificatePortal from './components/CertificatePortal';

const HomeRedirect = () => {
  useEffect(() => {
    window.location.replace("https://givemycertificate.com/");
  }, []);
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900">
      <div className="text-slate-400 italic">Redirecting to Give My Certificate...</div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeRedirect />} />
        <Route path="/:id" element={<CertificatePortal />} />
      </Routes>
    </Router>
  );
}

export default App;
