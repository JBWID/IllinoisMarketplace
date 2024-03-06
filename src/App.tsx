import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Components Import
import Header from "./components/Header";

// Pages
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <main className="">
      <div className="">
        <Header />
      </div>

      <div className="">
        <Router>
          <nav>
            {/* <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/mainpage">MainPage</Link>
              </li>
              <li>
                <Link to="/nonexistentroute">404test</Link>
              </li>
            </ul> */}
          </nav>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    </main>
  );
}
