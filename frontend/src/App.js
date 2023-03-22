import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import SnippetsListPage from "./pages/SnippetsListPage";
import SnippetsPage from "./pages/SnippetsPage";
import { Link } from "react-router-dom";

// import "./App.css";

function App() {
  return (
    <Router>
      <div className="container dark">
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" exact element={<SnippetsListPage/>} />
            <Route path="/snippet/:id" element={<SnippetsPage/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

