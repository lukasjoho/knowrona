import React, {Component} from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';

export default class EditPosts extends Component {
    constructor(props){
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeUrl = this.onChangeUrl.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);



        this.state = {
            username: "",
            title: "",
            description: "",
            type:"",
            url: "",
            date: new Date(),
            users: [],
            isSubmitted: false
        }
    }

    componentDidMount(){
        axios.get("https://floating-hamlet-81586.herokuapp.com/posts/"+this.props.match.params.id)
            .then(response => {
                this.setState({
                    username: response.data.username,
                    title: response.data.title,
                    description: response.data.description,
                    type: response.data.type,
                    url: response.data.url, 
                    date: new Date(response.data.date)
                })
            })
            .catch(function(error){
                console.log(error);
            })

        axios.get("https://floating-hamlet-81586.herokuapp.com/users/")
        .then(response => {
            if (response.data.length > 0) {
                this.setState({
                    users: response.data.map(user => user.username),
                })
            }
        })
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

    onChangeUrl(e){
        this.setState({
            url: e.target.value
        }); 
    }

    onChangeType(e){
        this.setState({
            type: e.target.value
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
            date: this.state.date
        }

        console.log(post);

        axios.post("https://floating-hamlet-81586.herokuapp.com/posts/update/"+this.props.match.params.id, post)
            .then(() => {
                this.setState({isSubmitted: true});
            });
    }

    render(){
        const isSubmitted = this.state.isSubmitted;
        let message;
        if(isSubmitted){
            message = <Link className="alert-post" to="/"><div class="alert alert-success " role="alert">You successfully edited the post!</div></Link>;
            setTimeout(() => { this.setState({isSubmitted: false}); }, 3000);
        } else {
            message = <div></div>;
        }
        return (
            <div>
                <h3>Edit Post</h3>
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
                    <div className="form-group">
                        <label>Date: </label>
                        <div>
                            <DatePicker
                            selected={this.state.date}
                            onChange={this.onChangeDate}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Edit Post" className="btn"/>
                    </div>
                    <div className="form-group">
                        {message}
                    </div>
                </form>
            </div>
        )
    }
}