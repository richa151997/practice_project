import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

// #1
// function App() {
//   return (
//       <div>
//           <Header />
//           <Greeting />
//       </div>
//   )
// }

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      lastName: "Agrawal",
      isLoggedIn: false
    }
  }
  render() {
    return (
      <div>
        <h1>User is Logged {this.state.isLoggedIn ? "in" : "out"}</h1>
        <Header username={`Richa ${this.state.lastName}`} />
        <Greeting />
      </div>
    )
  }
}

// #2
// function Header(props) {
//   return (
//     <header>
//       <p>Welcome, {props.username}!</p>
//     </header>
//   )
// }

class Header extends React.Component {
  render(props) {
    return (
      <header>
        <p>Welcome, {this.props.username}!</p>
      </header>
    )
  }
}

// #3
// function Greeting() {
//   const date = new Date()
//   const hours = date.getHours()
//   let timeOfDay

//   if (hours < 12) {
//     timeOfDay = "morning"
//   } else if (hours >= 12 && hours < 17) {
//     timeOfDay = "afternoon"
//   } else {
//     timeOfDay = "night"
//   }
//   return (
//     <h1>Good {timeOfDay} to you, sir or madam!</h1>
//   )
// }

class Greeting extends React.Component {
  render() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay

    if (hours < 12) {
      timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17) {
      timeOfDay = "afternoon"
    } else {
      timeOfDay = "night"
    }
    return (
      <h1>Good {timeOfDay} to you, sir or madam!</h1>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
