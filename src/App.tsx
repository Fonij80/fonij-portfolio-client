import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import "./App.css";
import { Home, Blog, Contact, Hire } from './pages';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/hire" element={<Hire />} />
        </Routes>
      </Router>
    </I18nextProvider>
  );
}

export default App;
