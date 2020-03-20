import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import PostsList from "./components/posts-list.component";
import EditPost from "./components/edit-post.component";
import CreatePost from "./components/create-post.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <div className="container">
    <Navbar/>
    <br/>
    <Route path="/" exact component={PostsList}/>
    <Route path="/edit/:id" exact component={EditPost}/>
    <Route path="/create" exact component={CreatePost}/>
    <Route path="/user" exact component={CreateUser}/>
    </div>
    </Router>
  );
}

export default App;
