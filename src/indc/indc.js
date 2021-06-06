import React, { useState } from 'react';
import './indc.css';


var Increment = React.createClass({
  getInitialState: function() {
    return {
      counter: 0
    };
  },

  increment: function() {
    this.setState({
      counter: this.state.counter + 1
    });
  },
  
  decrement: function(){
    this.setState({
      counter: this.state.counter - 1
    });
  },

  render: function() {
    return <div> 
      <div class="B1">
      <button onClick = {this.increment}>
      Increment (+)
      </button>
      </div>
      <div class="B2">
      <button onClick = {this.decrement}>
      Decrement (-)
      </button>
     </div>
    </div>
  }
});

React.render(<Increment />, document.getElementById('mount'))
