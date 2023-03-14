import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import data from './data.json';

class Btn extends Component {
  render() {
    return(
      <button className='btn w-100 round'>Continue</button>
    )
  }
}
class Score extends Component {
  render() {
    return(
      <div className='score d-flex flex-column align-items-center justify-content-center'>
        <h1>76</h1>
        <p>of 100</p>
      </div>
    )
  }
}
class Bar extends Component {
  render() {
    return(
      <div className='bar d-flex align-items-center justify-content-between' style={{backgroundColor: this.props.bgColor}}>
      <span style={{color: this.props.color}}><img src={require(`${this.props.icon}`)} alt='icon' /> &nbsp;{this.props.category}</span> <span>{this.props.score} <span className='per'>/ 100 </span></span> 
      </div>
    )
  }
}
class BarList extends Component {
  render() {
    const list = this.props.data;
    const bars = list.map(el => <Bar color={el.color} bgColor={el.bg} icon={el.icon} category={el.category} score={el.score} />)
    return(
      bars
    )
  }
}
class App extends Component {
  
  render() {
    return(
      <div className='main-container shadow'>
        <div className='left-container d-flex flex-column align-items-center justify-content-between text-center'>
          <h3 className='box-title title-left'>Your Result</h3>
          <Score />
          <h2>Great</h2>
          <p>You scored higher than 65% of the people who have taken these tests.</p>
        </div>
        <div className='right-container d-flex flex-column align-items-center justify-content-between'>
          <div className='w-100'><h3 className='box-title'>Summary</h3></div>
          <div className='w-100'><BarList data={data} /></div>
          <Btn />
        </div>
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
