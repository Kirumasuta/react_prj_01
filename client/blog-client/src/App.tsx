import './App.css';
import {Header} from "./components/Header/Header";
import {ArticleList} from "./components/Article/ArticleList";
import {ArticleMainBlock} from "./components/Article/ArticleMainBlock";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {

  return (

      <div className="App">
          <Router>
              <Header/>
              <Routes>
                  <Route path="/" element={<ArticleList/>}/>
                  <Route path="/category/:category_id" element={<ArticleList/>}/>
                  <Route path="/article/:article_id" element={<ArticleMainBlock/>}/>
              </Routes>
          </Router>
      </div>
  );
}

export default App;
