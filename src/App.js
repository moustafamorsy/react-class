import React from 'react';
import img from './img.jpeg'
import './App.css';


class App extends React.Component {
  state = {
    fullName: "mostafa morsy",
    bio: "iam very passionate person and hardwoker",
    profession: "fullstack developer",
    shows: true,
    count:0,
    img: img ,
    style: {
      App:{
        textAlign: "center" 
      },button: {
        width: "100px", 
        height: "50px",
        backgroundImage:"linear-gradient(#e66465, #9198e5)",
        border:"none",
        fontWeight:"bold",

        color: "white",
            }, img:{
        maxWidth: "150px", 
      },profile:{
   fontSize: "15spx",
    maxWidth: "250px",
    margin: "0 auto",
    backgroundImage:"linear-gradient(#e66465, #9198e5)",
    color:"white",
      },
    }
  };
 

  handleClick = (event) => {
    event.preventDefault();
    this.setState({ shows: !this.state.shows,count:0 });
    
  };
  count() {
    this.setState({count: this.state.count + 1});
  }

  componentDidMount() {
    setInterval(() => this.count(),1000);
  }
  componentWillUnmount() {
    clearInterval();
  }



  render() {

    return (
      <div className="App" style={this.state.style.App}>

        <h2>second : {this.state.count}</h2>
  <button  onClick={this.handleClick} style={this.state.style.button}>show profile</button>
        {this.state.shows ? (

          <article className="profile" style={this.state.style.profile}>
            <h1>{this.state.fullName}</h1>
            <p>{this.state.bio}</p>
            <img  style={this.state.style.img}  src={img} alt="male" />
            <h2>{this.state.profession}</h2>
          </article>

        ) : (<div></div>)}
      </div>
    );
  }
}

export default App;
