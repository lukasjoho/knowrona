import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import Footer from "./components/footer.component";
import PostsList from "./components/posts-list.component";
import EditPost from "./components/edit-post.component";
import CreatePost from "./components/create-post.component";
import CreateUser from "./components/create-user.component";
import Knowrona from "./components/knowrona.component";
import "./main.scss";

function App() {
  return (
    <Router>
      
    <Navbar/>
    <div className="container">
    <br/>
    <Route path="/knowrona" exact component={Knowrona}/>
    <Route path="/" exact component={PostsList}/>
    <Route path="/edit/:id" exact component={EditPost}/>
    <Route path="/create" exact component={CreatePost}/>
    <Route path="/user" exact component={CreateUser}/>
    </div>
    <Footer/>
    </Router>
  );
}

export default App;
