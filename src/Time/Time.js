import React from 'react';
import './time.css';



class Timer extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        time: 0,
        isOn: false
      }
    }
    startTimer = ()=> {
    if(!this.state.isOn) {
          this.setState({
        isOn: true
      })
     this.timer = setInterval(() => this.setState({
        time: this.state.time + 1
      }), 1000);}
    }
    stopTimer = () => {
      this.setState({isOn: false})
      clearInterval(this.timer)
    }
    resetTimer = () => {
      this.setState({time: 0})
    }
  
    render() {
let hours=String(Math.floor((this.state.time)/3600)).padStart(2,'0');
let minute=String(Math.floor(((this.state.time)%3600)/60)).padStart(2,'0');
let second=String(Math.floor(((this.state.time)%3600)%60)).padStart(2,'0');
      return(
        <div>
        <div className="static-tim">
            <div className="Numbes-timer">
                <span>{hours}</span>
                <span>:</span>
                <span>{minute}</span>
                <span>:</span>
                <span>{String(second).padStart(2,'0')}</span>
            </div>
            <div className="String-timer">
                <span>HOUR</span>
                <span>MINUTE</span>
                <span>SECONd</span>
            </div>
      {/* {(this.state.isOn) ? <button className='btn' onClick={this.stopTimer}>stop</button> :  <button className='btn' onClick={this.startTimer}>start</button>
         }  */}
        <button className='btn' onClick={(this.state.isOn) ? this.stopTimer : this.startTimer}>{this.state.isOn ? "stop" : "start "}</button> 
          
        <button  className='btn' onClick={this.resetTimer}>reset</button> 
            {/* <span >{start}</span>
            <span > {stop}</span>
            <span  >{reset}</span>
            <span >{resume}</span> */}
        </div>
        </div>
      )
    }
  }


export default Timer;