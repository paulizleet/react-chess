// React, ReactDom

class Button extends React.Component{

	handleClick = () => {
		this.props.onClickFunction(this.props.incrementValue)
     }
  
	render () {
    return (
      <button
        onClick={this.handleClick}>
      	+{this.props.incrementValue}
      </button>
      
    )
  };
}

const Result = (props) => {
	return (
  	<div> {props.counter} </div>
  );
};

//Master class that gives state and whatnot to everything else
class App extends React.Component {
	
  state = {counter: 0};
  
  //Function that will be passed as a prop to buttons, to create only one reference to the function
  incrementCounter = (incrementValue) => {
  	this.setState((prevState) => ({
    	counter: prevState.counter + incrementValue
    }));
  }

	render() {
	//functions and state are passed down by the parent object to allow child objects to access them

  	return(

    	<div>
        <Button incrementValue={1} onClickFunction={this.incrementCounter}/>   	  
		<Button incrementValue={5} onClickFunction={this.incrementCounter}/>
		<Button incrementValue={10} onClickFunction={this.incrementCounter}/>
		<Button incrementValue={100} onClickFunction={this.incrementCounter}/>
		
        <Result counter={this.state.counter}/>
    	</div>
    );
  }
}
ReactDOM.render(<App/>, mountNode);