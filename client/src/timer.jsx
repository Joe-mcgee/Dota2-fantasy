import React, { Component } from 'react';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { endTime: Date.parse(props.schedule) }; // the time here should be the schedual time - current time
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  secondsToTime(secs){
    var seconds = Math.floor( (secs/1000) % 60 );
    var minutes = Math.floor( (secs/1000/60) % 60 );
    var hours = Math.floor( (secs/(1000*60*60)) % 24 );

    let obj = {
      "h": hours,
      "m": minutes,
      "s": seconds
    };
    return obj;
  }

  componentDidMount() {
    // let timeLeftVar = this.secondsToTime(this.state.seconds);
    // this.setState({ time: timeLeftVar });
  }

  startTimer(handleTimeExpiry) {
    if (this.timer === 0) {
      var endTime = this.state.endTime;
      var secondsToTime = this.secondsToTime;
      this.timer = setInterval(function(){
        var seconds = endTime - Date.parse(new Date());
          if (seconds <= 0) {
            // var timeObj = secondsToTime(seconds);
            var clock = document.getElementById('clock');
            clock.innerHTML = 'The bid for this match is expired';
            handleTimeExpiry();
            return
        } else {
          var timeObj = secondsToTime(seconds);
          var clock = document.getElementById('clock');
          clock.innerHTML = 'h:'+ timeObj.h + 'm:' + timeObj.m + 's:' + timeObj.s;}

        // Check if we're at zero.

      });
    }
  }

  countDown(endTime) {
    // // Remove one second, set state so a re-render happens.
    // var seconds = this.state.seconds - 1;
    // this.setState({
    //   time: this.secondsToTime(seconds),
    //   seconds: seconds,
    // });
    // console.log("boxuanlu")

  }
// how to set up a tiemr without click start
//h: {this.state.time.h} m: {this.state.time.m} s: {this.state.time.s}
  render() {
    var handleTimeExpiry = this.props.handleTimeExpiry;
    {this.startTimer(handleTimeExpiry)}
    return(
      <div id='clock'>

      </div>
    );
  }
}

export default Timer;
