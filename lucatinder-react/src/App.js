import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  // Anteriorment era Switch,
  Routes,
  Route,
  //Antes era Redirect
  //Navigate
} from "react-router-dom";
import Home from './pages/Home'
import Likes from './pages/Likes'
import PageNotFound from './pages/PageNotFound'
import Header from './pages/header'
import Footer from './pages/Footer';
//import 'font-awesome/css/font-awesome.min.css';
import Matches from './pages/Matches';
import DisLikes from './pages/Dislikes';

function App() {
  return (
    <Router>
      {<Header />}
      <div className="App" >
        <main className="Box">
          <Routes >
            {/*<Route exact path="/" component={Home} />   */}
            <Route exact path="/" element={<Home />} />          
            <Route exact path="/likes" element={<Likes />} />
            <Route exact path="/dislikes" element={<DisLikes />} />
            <Route exact path="/matches" element={<Matches />} />
            {/*<Navigate from="/redirect" to="/about" /> */}
            <Route path="*" element={<PageNotFound />} />          
          </Routes>
        </main>
        
</div>
{<Footer />}
    </Router>
  );
}

export default App;