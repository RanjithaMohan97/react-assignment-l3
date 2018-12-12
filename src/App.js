import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          job: "",
          priority: "select",
          high: [],
          medium: [],
          low: []
      }
      this.handleChange = this.handleChange.bind(this);
      this.addTodo = this.addTodo.bind(this);
      this.removeTodo = this.removeTodo.bind(this);
      this.clearText = this.clearText.bind(this);

  }
  handleChange(event) {
      this.setState({
          job: event.target.value
      })
  }
  addTodo() {
      if (this.state.job.length > 0 && this.state.priority !== "select") {
          switch (this.state.priority) {
              case "1":
                  {
                      var temp = this.state.high;
                      if (!temp.includes(this.state.job)) {
                          temp.push(this.state.job);
                      }
                      else{
                        alert("Todo Already Exist");
                      }
                      this.setState({
                          high: temp
                      })
                      break;
                  }
              case "2":
                  {
                      var temp = this.state.medium;
                      if (!temp.includes(this.state.job)) {
                          temp.push(this.state.job);
                      }
                      else{
                        alert("Todo Already Exist");
                      }
                      this.setState({
                          medium: temp
                      })
                      break;
                  }
              case "3":
                  {
                      var temp = this.state.low;
                      if (!temp.includes(this.state.job)) {
                          temp.push(this.state.job);
                      }
                      else{
                        alert("Todo Already Exist");
                      }
                      this.setState({
                          low: temp
                      })
                      break;
                  }
              default:
                  {
                      alert("choose priority");
                  }
          }
      } 
      else {
          {
              alert("Enter values for every field...")
          }
      }
      this.clearText();

  }
  clearText() {
      document.getElementById("dropdown").value = "select";
      this.setState({
          job: ""
      })
  }
  setPriority(event) {
      this.setState({
          priority: event.target.value
      })
  }
  removeTodo(element, category) {
      if (category === "high") {
          var temp1 = this.state.high;
          if (temp1.includes(element)) {
              var i = temp1.indexOf(element)
              temp1.splice(i, 1)
          }
          this.setState({
              high: temp1
          })
      } 
      else if (category === "medium") {
          var temp1 = this.state.medium;
          if (temp1.includes(element)) {
              var i = temp1.indexOf(element)
              temp1.splice(i, 1)
          }
          this.setState({
              medium: temp1
          })
      } 
      else {
          var temp1 = this.state.low;
          if (temp1.includes(element)) {
              var i = temp1.indexOf(element)
              temp1.splice(i, 1)
          }
          this.setState({
              low: temp1
          })
      }
  }
  render() {
    return (
      <div className="App">
        <h2>TODO APP</h2>
            <input type = "text" value = {this.state.job} onChange = {e=>this.handleChange(e)}/>
              <select id = "dropdown" onChange={e=>{this.setPriority(e)}}>
                <option value="select">select</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
                  <button onClick={this.addTodo}>Add ToDo</button>
                  {
                  this.state.high.map((todo,i)=>
                    <div key = {i} id = "list">
                      <li style={{"color":"red"}}>{todo}</li>
                      <button onClick = {e=>this.removeTodo(todo,"high")}>Remove</button>
                    </div>
                  )}
                  {
                  this.state.medium.map((todo,i)=>
                    <div key = {i} id = "list">
                      <li style={{"color":"blue"}}>{todo}</li>
                      <button onClick = {e=>this.removeTodo(todo,"medium")}>Remove</button>
                    </div>
                  )
                }
                {
                  this.state.low.map((todo,i)=>
                  <div key = {i} id = "list">
                    <li style={{"color":"violet"}}>{todo}</li>
                    <button onClick = {e=>this.removeTodo(todo,"low")}>Remove</button>
                  </div>
                )
                }
    </div>
    );
  }
}

export default App;
