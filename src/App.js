import { Routes, Route } from "react-router-dom";
import "./App.css";
import Articles from "./Articles";
import ArticleCard from "./ArticleCard";
import Header from "./Header";
import Nav from "./Nav";
import Topics from "./Topics";
import Users from "./Users";
function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/users" element={<Users />} />
        <Route path="/articles/:article_id" element={<ArticleCard />} />
      </Routes>
    </div>
  );
}

export default App;
