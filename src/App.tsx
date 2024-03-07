import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components Import
import Header from "./components/Header";

// Pages
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow bg-groundBase">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
          ;
        </main>
      </div>
    </Router>
  );
}

export default App;
