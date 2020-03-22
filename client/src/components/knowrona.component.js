// import React, {Component} from "react";
// import { Link } from 'react-router-dom';
// import posed from "react-pose"
// const Box = posed.div({
//     visible: { opacity: 1 },
//     hidden: { opacity: 0 }
// });
// export default class Knowrona extends Component {
//     state = { isVisible: true};
//     componentDidMount(){
//         setInterval(()=> {
//             this.setState({
//                 isVisible: !this.state.isVisible});
//             }, 1000);
//     }

    
//     render(){
//         const { isVisible } = this.state;
//         return(
//             <div class="knowrona">
//             <Box className="box" pose={this.state.isVisible ? 'visible' : 'hidden'}><h1 className="one">This is not your average knowledge base!</h1></Box>;
            
                
//                 <div className="titles">
                
//                 </div>
//             </div>
//         )
//     }
// }
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const textArray = ['Not Your Average Knowledge Base.', 'Clarity Is Power.', 'Knowledge Makes The Difference.', 'You Gonna Kick Covids Ass Soon.', "Embrace The Knowledge.", "Make Sense Of The Data.", "Broaden Your Horizon.", "No need to panic.", "Differentiate.", "Understand Statistics.", "Stay Fucking Home!", "And don't eat other peoples stuff!"];

export default class Knowrona extends Component {
  constructor() {
    super();
    this.state = { textIdx: 0 };
  }

  componentDidMount() {
    this.timeout = setInterval(() => {
      let currentIdx = this.state.textIdx;
      this.setState({ textIdx: currentIdx + 1 });
    }, 1500);
  }

  componentDidUnmount() {
    clearInterval(this.timeout);
  }

  render() {
    let textThatChanges = textArray[this.state.textIdx % textArray.length];

    return (
        <div className="introcard">
            <div className="centered">
            <h1>{textThatChanges}</h1>
            <Link to="/"><button className="btn">Now go get yourself some Covid Understanding!</button></Link>
            </div>
        </div>
    )
  }
}