import React from 'react';

class BowlingPins extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      availablePins: [0, 1, 3, 4, 5, 6, 7, 8, 9, 10],
      pins: {
        0: true,
        1: true,
        3: true,
        4: true,
        5: true,
        6: true,
        7: true,
        8: true,
        9: true,
        10: true,
      },
    };
    this.knockPinsDown = this.knockPinsDown.bind(this);
    this.resetPins = this.resetPins.bind(this);
  }

  resetPins() {
    const defaultPins = {
      0: true,
      1: true,
      3: true,
      4: true,
      5: true,
      6: true,
      7: true,
      8: true,
      9: true,
      10: true,
    };
    // console.log('rollCount', rollCount, 'reset', defaultPins);
    this.setState({
      pins: defaultPins,
    });
  }

  knockPinsDown(e) {
    const { pins } = this.state;
    const { pinSelector, rollCount } = this.props;
    pinSelector(e);
    const avail = 10 - e.target.id;
    console.log('Pins Available below the equal to or below: ', avail);

    // I think I can reepurpose this from SA 11 to set the selected pins to false
    // Object.keys(provinces).map((state) => {
    //   filtered.map((record) => {
    //    // if filtered.state = provinces "state" push record denom to the correct province
    //     if (record.state === state) {
    //       provinces[state].push(record.denominator);
    //     }
    //   })
    // })
    // END reuse
    //
    // const prevPins = { ...pins };
    // prevPins[e.target.id] = false;
    // // console.log(prevPins);
    // this.setState({
    //   pins: prevPins,
    // });
    // if (this.props.rollCount === 1) {
    //   //this.resetPins();
    // }
  }

  render() {
    const { availablePins, pins } = this.state;
    const { pinSelector } = this.props;
    const pinButtons = availablePins.map((num) => {
      if (pins[num] === true) {
        return <button key={num} id={num} onClick={this.knockPinsDown} type="button">{num}</button>;
      }
    });
    return (
      <>
        {pinButtons}
      </>

    );
  }
}
export default BowlingPins;
