import React, {Component} from "react";
import {Link} from "react-router-dom";
import styles from "../styles.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import axios from "axios";

const Post = props => (
    <div className="card">
        <h5>{props.post.type}</h5>
        <h4>{props.post.title}</h4>
            <hr/>
        <div className="row">
            <div className="col-md-8 left">
            <p>{props.post.description}</p>
            
            <div>
            <p class="url">Quelle: {props.post.url}</p>
            <h5><span className="pre-user">eingestellt von</span> {props.post.username}<span className="pre-user"> am:</span></h5>
            <p className="date">{props.post.date.substring(0,10)}</p>
            </div>
            </div>
            <div className="col-md-4 kr-col">
                <a href={props.post.url} target="_blank">
                    <button className="btn">Get To Know</button>
                </a>
                <div class="modify">
                <Link to={"/edit/"+props.post._id}>Edit</Link> | <a href="#" onClick={() => { props.deletePost(props.post._id) }}>Delete</a>
                </div>
            </div>
        </div>
    </div>
)

export default class PostsList extends Component {
    constructor(props){
        super(props);
        this.deletePost = this.deletePost.bind(this);
        
        this.state = {posts: []};
    }

    componentDidMount(){
        axios.get("http://localhost:5000/posts/")
            .then(response => {
                this.setState({posts: response.data})
            })
            .catch((error) => {
                console.log(error);
            } )
    }

    deletePost(id){
        axios.delete("http://localhost:5000/posts/"+id)
            .then(res => console.log(res.data));
        this.setState({
            posts: this.state.posts.filter(el => el._id !== id)
        })
    }

    postList(){
        return this.state.posts.map(currentpost => {
            return <Post post={currentpost} deletePost={this.deletePost} key={currentpost._id}/>;
        })
    }
    render(){
        return (
           <div>
               <h3>Posts</h3>
               <table className="table">
                   <thead className="thead-light">
                       <tr>
                       </tr>
                   </thead>
                   <tbody>
                       {this.postList()}
                   </tbody>
               </table>
           </div>
        )
    }
}