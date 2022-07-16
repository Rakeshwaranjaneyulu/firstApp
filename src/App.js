// import React from 'react';  
// import logo from './logo.svg';  
// import './App.css';  
  
// function App() {  
//   return (  
//     <div className="App">  
//       <header className="App-header">  
//         <img src={logo} className="App-logo" alt="logo" />  
//         <p>  
//           Welcome To ReactJS  
  
//       <p>edit src/App.js and save to reload.</p>  
//         </p>  
//         <a  
//           className="App-link"  
//           href="https://reactjs.org"  
//           target="_blank"  
//           rel="noopener noreferrer"  
//         >  
//           Learn React  
//         </a>  
//       </header>  
//     </div>  
//   );  
// }  
  
// export default App;  
// ==================
// import React, { Component } from 'react';  
// class App extends React.Component {  
//  constructor() {  
//       super();        
//       this.state = { displayBio: true };  
//       }  
//       render() {  
//           const bio = this.state.displayBio ? (  
//               <div>  
//                   <p><h3>IBM’s Redhat cloud program includes full stack development  skills</h3></p>   
//             </div>  
//               ) : null;  
//               return (  
//                   <div>  
//                       <h1> Welcome to IBM! </h1>  
//                       { bio }   
//                   </div>  
//               );  
//      }  
// }  
// export default App;


// ==========================

// import React, { Component } from 'react';  
// class App extends React.Component {  
//  constructor() {  
//       super();        
//       this.state = { displayBio: false };  
//       console.log('Component this', this);  
//       this.toggleDisplayBio = this.toggleDisplayBio.bind(this);  
//       }  
//       toggleDisplayBio(){  
//           this.setState({displayBio: !this.state.displayBio});  
//           }  
//       render() {  
//           return (  
//               <div>  
//                   <h1>IBM redhat learning program</h1>  
//                   {  
//                       this.state.displayBio ? (   
//                           <div>  
//                               <p><h4>A unique program inducted during this year to prepare full stack developers for various commercial projects</h4></p>  
//                               <button onClick={this.toggleDisplayBio}> Show Less </button>  
//                         </div>  
//                           ) : (  
//                               <div>  
//                                   <button onClick={this.toggleDisplayBio}> Read More </button>  
//                               </div>  
//                           )  
//                   }  
//              </div>  
//         )  
//     }  
// }  
// export default App; 
// ===============================

// import React, { Component } from 'react';  
// class App extends React.Component {  
//    render() {     
//       return (  
//           <div>  
//               <h1>Default Props Example</h1>  
//             <h3>Welcome to {this.props.name}</h3>   
//             <p>{this.props.name} is for 2021 induction batch preparing full stack developers</p>          
//           </div>  
//         );  
//     }  
// }  
// App.defaultProps = {  
//    name: "IBM’s Redhat training program"  
// }  
// export default App; 
// =====================


// import React, { Component } from 'react';  
// class App extends React.Component {  
//    constructor(props) {  
//       super(props);  
//       this.state = {  
// name: "IBM’s Redhat training program" ,         
//       }  
//    }  
//    render() {  
//       return (  
//          <div>  
//           <CApp cappProp = {this.state.name}/>             
//          </div>  
//       );  
//    }  
// }  
// class CApp extends React.Component {  
//    render() {  
//       return (  
//           <div>  
//               <h1>State & Props Example</h1>  
//               <h3>Welcome to {this.props.cappProp}</h3>  
//               <p>{this.props.cappProp} is for 2021 induction batch preparing full stack developers </p>  
//          </div>    
//       );  
//    }  
// }  
// export default App; 
// ==========================
// import React, { Component } from 'react';  
// import PropTypes from 'prop-types';  
// class App extends React.Component {  
//    render() {  
//       return (  
//  <div>  
//      <h1>ReactJS Props validation example</h1>  
//    <h3>Array : {this.props.propArray} -- {this.props.propArray ? "true" : "False"}</h3>  
//    <h3>Boolean : {this.props.propBool ? "true" : "False"}--{this.props.propBool ? "true" : "False"}</h3>  
//    <h3>Function : {this.props.propFunc(5)}--{this.props.propFunc(5) ? "true" : "False"}</h3>  
//    <h3>String : {this.props.propString}--{this.props.propString ? "true" : "False"}</h3>  
//    <h3>Number : {this.props.propNumber}--{this.props.propNumber ? "true" : "False"}</h3> 
//    <h3>Object: {this.props.propObject.objectName1}</h3>
//    <h3>Object: {this.props.propObject.objectName2}</h3>
//    <h3>Object: {this.props.propObject.objectName3}</h3> 
//         </div>  
//         );  
//    }  
// }  
// App.propTypes = {  
//     propArray: PropTypes.array.isRequired,  
//     propBool: PropTypes.bool.isRequired,  
//     propFunc: PropTypes.func,  
//     propNumber: PropTypes.number,  
//     propString: PropTypes.string,
//     propObject: PropTypes.object,       
// }  
// App.defaultProps = {  
//     propArray: [1,2,3,4,5],  
//     propBool: true,  
//     propFunc: function(x){return x+5},  
//     propNumber: 1,  
//     propString: "IBM",
//     propObject: {
//       objectName1:"objectValue1",
//       objectName2: "objectValue2",
//       objectName3: "objectValue3"
//    },      
// }  
// export default App; 
// ======================================



// ===========================================
// import React, { Component } from 'react';  
//   class App extends Component {  
//   constructor(props){  
//     super(props);  
//     this.state = {           data: 'www.ibm.com'        }  
//   }  
//   handleEvent = () => {      console.log(this.props);    }  
//   render() {  
//     return (  
//       <div className="App">  
//     <input type ="text" value={this.state.data} />  
//         <button onClick={this.handleEvent}>Please Click</button>  
//       </div>  
//     );  
//   }  }  
// export default App;  


// ==========================================
// import React, { Component } from 'react';  
// import PropTypes from 'prop-types';  
// class App extends React.Component {  
//    constructor() {  
//       super(); 
//       this.flag=true;
//       this.state = {  
//           msg: "Welcome to IBM induction program"  
//       };      
//       this.updateSetState = this.updateSetState.bind(this);  
//    }  
//    updateSetState() {  
//        this.setState(
//           {  msg: (this.flag)? "Its a best induction program" :  "Welcome to IBM induction program" }
//         );
//       this.flag = !this.flag;  
//    }  
//    render() {  
//       return (  
//          <div>  
//              <h1>{this.state.msg}</h1>  
// <button onClick = {this.updateSetState}>SET STATE</button>  
//          </div>  
//       );  
//    }  
// }  
// export default App;
// ======================

// ===============================


// import React, { Component } from 'react';  
// import ReactDOM from 'react-dom';  
// class App extends React.Component {  
//    constructor() {  
//       super();  
//       this.findDomNodeHandler1 = this.findDomNodeHandler1.bind(this);  
//       this.findDomNodeHandler2 = this.findDomNodeHandler2.bind(this);  
//    };  
//    findDomNodeHandler1() {  
//        var myDiv = document.getElementById('myDivOne');  
//        ReactDOM.findDOMNode(myDiv).style.color = 'red';  
//    }  
//    findDomNodeHandler2() {  
//        var myDiv = document.getElementById('myDivTwo');  
//        ReactDOM.findDOMNode(myDiv).style.color = 'blue';  
//    }  
//    render() {  
//       return (  
//          <div>  
//              <h1>ReactJS Find DOM Node Example</h1> 
//              <h3 id = "myDivOne">NODE1</h3>  
//              <h3 id = "myDivTwo">NODE2</h3>               
//              <button onClick = {this.findDomNodeHandler1}>FIND_DOM_NODE1</button>  
//              <button onClick = {this.findDomNodeHandler2}>FIND_DOM_NODE2</button>  
//           </div>  
//       );  
//    }  
// }  
// export default App;
// ==========================
// import React, { Component } from 'react';  
  
// class App extends React.Component {  
//    constructor(props) {  
//       super(props);  
//       this.state = {hello: "IBMers"};  
//       this.changeState = this.changeState.bind(this)  
//    }    
//    render() {  
//       return (  
//          <div>  
//              <h1>ReactJS component's Lifecycle</h1>  
//              <h3>Hello {this.state.hello}</h3>  
//              <button onClick = {this.changeState}>Click Here!</button>          
//          </div>  
//       );  
//    }  
//    componentWillMount() {  console.log('Component Will MOUNT!')  }  
//    componentDidMount() {   console.log('Component Did MOUNT!')   }  
//    changeState(){  this.setState({hello:"All!!- you should proud to be in IBM."});  }  
//    componentWillReceiveProps(newProps) { console.log('Component Will Recieve Props!')  }  
//    shouldComponentUpdate(newProps, newState) { return true;  }  
//    componentWillUpdate(nextProps, nextState) {  console.log('Component Will UPDATE!');  }  
//    componentDidUpdate(prevProps, prevState) {  console.log('Component Did UPDATE!')  }  
//    componentWillUnmount() {  console.log('Component Will UNMOUNT!')  }  
// }  
// export default App;
// ==========================
// import React, { Component } from 'react';  
//  class App extends React.Component {  
//    constructor(props) {  
//       super(props);  
//       this.state = {hello: "IBMers"};  
//       this.changeState = this.changeState.bind(this)  
//    }    
//    render() {  
//       return (  
//          <div>  
//              <h1>ReactJS component's Lifecycle</h1>  
//              <h3>Hello {this.state.hello}</h3>  
//              <button onClick = {this.changeState}>Click Here!</button>          
//          </div>  
//       );  
//    }  
//    componentWillMount() {  console.log('Component Will MOUNT!')  }  
//    componentDidMount() {   console.log('Component Did MOUNT!')   }  
//    changeState(){  this.setState({hello:"All!!- you should pride to be in IBM."});  }  
//    componentWillReceiveProps(newProps) { console.log('Component Will Recieve Props!')  }  
//    shouldComponentUpdate(newProps, newState) { return true;  }  
//    componentWillUpdate(nextProps, nextState) {  console.log('Component Will UPDATE!');  }  
//    componentDidUpdate(prevProps, prevState) {  console.log('Component Did UPDATE!')  }  
//    componentWillUnmount() {  console.log('Component Will UNMOUNT!')  }  
// }  
// export default App;
// ============================
// import React, { Component } from 'react';  
// import ReactDOM from 'react-dom';  
// class App extends React.Component {  
//    constructor() {  
//       super();  
//       this.findDomNodeHandler1 = this.findDomNodeHandler1.bind(this);  
//       this.findDomNodeHandler2 = this.findDomNodeHandler2.bind(this);  
//    };  
//    findDomNodeHandler1() {  
//        var myDiv = document.getElementById('myDivOne');  
//        ReactDOM.findDOMNode(myDiv).style.color = 'red';  
//    }  
//    findDomNodeHandler2() {  
//        var myDiv = document.getElementById('myDivTwo');  
//        ReactDOM.findDOMNode(myDiv).style.color = 'blue';  
//    }  
//    render() {  
//       return (  
//          <div>  
//              <h1>ReactJS Find DOM Node Example</h1> 
//              <h3 id = "myDivOne">NODE1</h3>  
//              <h3 id = "myDivTwo">NODE2</h3>               
//              <button onClick = {this.findDomNodeHandler1}>FIND_DOM_NODE1</button>  
//              <button onClick = {this.findDomNodeHandler2}>FIND_DOM_NODE2</button>  
//           </div>  
//       );  
//    }  
// }  
// export default App;
// ==========================
import React, { Component } from 'react';  
  
class App extends React.Component {  
   constructor(props) {  
      super(props);  
      this.state = {hello: "IBMers"};  
      this.changeState = this.changeState.bind(this)  
   }    
   render() {  
      return (  
         <div>  
             <h1>ReactJS component's Lifecycle</h1>  
             <h3>Hello {this.state.hello}</h3>  
             <button onClick = {this.changeState}>Click Here!</button>          
         </div>  
      );  
   }  
   componentWillMount() {  console.log('Component Will MOUNT!')  }  
   componentDidMount() {   console.log('Component Did MOUNT!')   }  
   changeState(){  this.setState({hello:"All!!- you should proud to be in IBM."});  }  
   componentWillReceiveProps(newProps) { console.log('Component Will Recieve Props!')  }  
   shouldComponentUpdate(newProps, newState) { return true;  }  
   componentWillUpdate(nextProps, nextState) {  console.log('Component Will UPDATE!');  }  
   componentDidUpdate(prevProps, prevState) {  console.log('Component Did UPDATE!')  }  
   componentWillUnmount() {  console.log('Component Will UNMOUNT!')  }  
}  
export default App;
