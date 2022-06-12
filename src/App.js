import React from 'react';

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>
  }

  return <p>The water would not boil.</p>
}

function App() {
  return (
    <div className="App">
      <Calculator />     
    </div>
  );
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    
    this.state = {temperature: ''};

  }

  handleChange = (e) => { 
    this.setState({temperature: e.target.value});
  }

  render() {
    const temperature = this.state.temperature;

    return (
      <fieldset>
        <legend>
          <input
            value={temperature}
            onChange={this.handleChange} />
          <BoilingVerdict
            celisus={parseFloat(temperature)} />
        </legend>
      </fieldset>
    )
  }
}


export default App;
