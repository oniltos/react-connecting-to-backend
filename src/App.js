import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import ApartmentsPage from './pages/ApartmentsPage'
import AddApartmentPage from './pages/AddApartmentPage'
import Navbar from './components/Navbar'
import ApartmentDetailsPage from './pages/ApartmentDetailsPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<ApartmentsPage />} />
        <Route path="/apartments/new" element={<AddApartmentPage />} />
        <Route path="/apartments/:apartmentId" element={ <ApartmentDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
