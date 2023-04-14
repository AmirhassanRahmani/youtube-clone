import "./App.css";
import Header from "./Header";
import RecommendedVideo from "./RecommendedVideo";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchPage from "./SearchPage";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <div className="app__page">
                <Sidebar />
                <RecommendedVideo />
              </div>
            }
          />
          <Route
            path="/search/:searchTerm"
            element={
              <div className="app__page">
                <Sidebar />
                <SearchPage />
              </div>
            }
          />
          <Route path="/search/:s" element={<h1>search page</h1>} />
        </Routes>
      </Router>

      {/* <Header />

      <div className="app__page">
        <Sidebar />
        <RecommendedVideo />
      </div> */}
    </div>
  );
}

export default App;
