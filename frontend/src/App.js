import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import SnippetsListPage from "./pages/SnippetsListPage";
import SnippetsPage from "./pages/SnippetsPage";
import { Link } from "react-router-dom";
import { Container } from "@mui/material";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Container sx={containerStyles} maxWidth="md">
          <Routes>
            <Route path="/" exact element={<SnippetsListPage />} />
            <Route path="/snippet/:id" element={<SnippetsPage />} />
          </Routes>
        </Container>
      </Router>
    </div>
  );
}

const containerStyles = {
  backgroundColor: "grey.800",
  color: "black",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
};

export default App;
