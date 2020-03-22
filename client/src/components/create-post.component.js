import React, {Component} from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import { Link } from 'react-router-dom';
import "react-datepicker/dist/react-datepicker.css";

export default class CreatePosts extends Component {
    constructor(props){
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
        this.onChangeUrl = this.onChangeUrl.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);



        this.state = {
            username: "",
            title: "",
            description: "",
            type: "Video",
            url: "",
            date: "",
            users: [],
            isSubmitted: false
        }
    }

    componentDidMount(){
        axios.get("https://floating-hamlet-81586.herokuapp.com/users/")
        .then(response => {
            if (response.data.length > 0) {
                this.setState({
                    users: response.data.map(user => user.username),
                    username: response.data[0].username
                })
            }
        })
    }

    handleSubmission(){
        // this.setState({isSubmitted: true});
    }

    onChangeUsername(e){
        this.setState({
            username: e.target.value
        }); 
    }

    onChangeTitle(e){
        this.setState({
            title: e.target.value
        }); 
    }

    onChangeDescription(e){
        this.setState({
            description: e.target.value
        }); 
    }

    onChangeType(e){
        this.setState({
            type: e.target.value
        }); 
    }

    onChangeUrl(e){
        this.setState({
            url: e.target.value
        }); 
    }

    onChangeDate(date){
        this.setState({
            date: date
        }); 
    }

    onSubmit(e){
        e.preventDefault();

        const post = {
            username: this.state.username,
            title: this.state.title,
            description: this.state.description,
            type: this.state.type,
            url: this.state.url,
            date: new Date()
        }

        console.log(post);

        axios.post("https://floating-hamlet-81586.herokuapp.com/posts/add", post)
            // .then(res => console.log(res.data));
            .then(() => {
                this.setState({isSubmitted: true});
            });
        
        // window.location = "/";
    }

    render(){
        const isSubmitted = this.state.isSubmitted;
        let message;
        if(isSubmitted){
            message = <Link className="alert-post" to="/"><div class="alert alert-success " role="alert">You successfully published a post!</div></Link>;
            setTimeout(() => { this.setState({isSubmitted: false}); }, 3000);
        } else {
            message = <div></div>;
        }
        return (
            <div>
                <h3>Create New Post</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <select ref="userInput"
                        required
                        className="form-control"
                        value={this.state.username}
                        onChange={this.onChangeUsername}
                        >
                        {
                            this.state.users.map(function(user){
                                return <option 
                                key={user}
                                value={user}>{user}
                                </option>;
                            })
                        }   
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Title: </label>
                        <input type="text"
                        required
                        className="form-control"
                        value={this.state.title}
                        onChange={this.onChangeTitle}/>
                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <input type="text"
                        required
                        className="form-control"
                        value={this.state.description}
                        onChange={this.onChangeDescription}/>
                    </div>
                    <div className="form-group">
                        <label>Type: </label>
                        <select ref="typeInput"
                        required
                        className="form-control"
                        value={this.state.type}
                        onChange={this.onChangeType}
                        >
                            <option value={"Video"}>Video</option>
                            <option value={"Blog"}>Blog</option>
                            <option value={"Dokument"}>Dokument</option>
                            <option value={"Datenanalyse"}>Datenanalyse</option>
                            <option value={"Magazin"}>Magazin</option>
                            <option value={"Artikel"}>Artikel</option>
                            <option value={"Studie"}>Studie</option>
                            <option value={"Paper"}>Paper</option>
                            

                            {/* {
                            this.state.types.map(function(type){
                                return <option 
                                key={type}
                                value={type}>{type}
                                </option>;
                            })
                        }    */}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Url: </label>
                        <input type="text"
                        required
                        className="form-control"
                        value={this.state.url}
                        onChange={this.onChangeUrl}/>
                    </div>
                    {/* <div className="form-group">
                        <label>Date: </label>
                        <div>
                            {this.state.date}
                            {<DatePicker
                            selected={this.state.date}
                            onChange={this.onChangeDate}
                            />}
                        </div>
                    </div> */}
                    <div className="form-group">
                        <input type="submit" value="Create Post" className="btn"/>
                    </div>
                    <div className="form-group">
                        {message}
                    </div>

                </form>
            </div>
        )
    }
}