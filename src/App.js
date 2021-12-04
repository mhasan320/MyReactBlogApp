import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import ArticleListPage from './pages/ArticleListPage';
import Article from './pages/Article';
import Navbar from './Navbar';
import NotFoundPage from './pages/NotFoundPage';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div id="page-body">
            <Routes>
                <Route path="/" element={ <Home/> }/>
                <Route path="/About" element={ <About/>} />
                <Route path="/Article-List" element={ <ArticleListPage/>} />
                <Route path="/Article/:name" element={ <Article />} />
                <Route path="*" element={<NotFoundPage/>} />
            </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
