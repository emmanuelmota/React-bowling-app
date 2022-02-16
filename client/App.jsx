import React from 'react';
import ReactDOM from 'react-dom';
import BowlingPins from './components/BowlingPins.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      frames: [],
      totalScore: 0,
      rollCount: 0,
      totalRollCount: 0,
      currentFrame: [],
      frameCount: 0,
      firstRoll: 0,
      strike: false,
      spare: false,
    };
    this.pinSelector = this.pinSelector.bind(this);
  }

  pinSelector(e) {
    const pinKnockedDown = Number(e.target.id);
    // eslint-disable-next-line max-len
    const { frames, rollCount, currentFrame, firstRoll, frameCount, totalRollCount, strike, spare } = this.state;
    // console.log('pin Knocked down: ', pinKnockedDown);
    // if You can roll
    if (totalRollCount < 20) {
      // console.log('Not over yet.');
      // Copy state properties to modify then set set later
      let prevFrames = frames;
      let prevFrameCount = frameCount;
      let prevRollCount = rollCount;
      let prevFrame = currentFrame;
      let prevTotalRollCount = totalRollCount;
      // console.log(pinKnockedDown);

      // if you can still roll on this frame
      if (prevRollCount === 0) {
        // console.log(pinKnockedDown);
        // if (pinKnockedDown === 10) {
        //   alert("Strike!");
        // }
        // make an array to push to
        const tempArr = [];
        // push the number to the array
        tempArr.push(Number(pinKnockedDown));
        // push the array to the prevFrames array
        prevFrames.push(tempArr);
        prevRollCount += 1;
        prevTotalRollCount += 1;
        // update state with live score
        this.setState({
          frames: prevFrames,
          rollCount: prevRollCount,
          firstRoll: Number(pinKnockedDown),
          totalRollCount: prevTotalRollCount,
        });
      }

      if (rollCount === 1) {
        // Array to push to
        const frameCombined = [];
        frameCombined.push(firstRoll, Number(pinKnockedDown));
        //console.log('Frame Combined', frameCombined);
        // set the current frame equal to the fully formed frame.
        prevFrames[prevFrameCount] = frameCombined;
        // increment the frame count
        prevFrameCount += 1;
        prevTotalRollCount += 1;
        this.setState({
          frames: prevFrames,
          frameCount: prevFrameCount,
          rollCount: 0,
          totalRollCount: prevTotalRollCount,
        });

        if (prevTotalRollCount === 20) {
          const reducer = (accumulator, currentValue) => accumulator + currentValue;
          const finalScore = frames.flat().reduce(reducer);
          console.log('finalScore = ', finalScore);
          this.setState({ totalScore: [finalScore] });
        }
      }
    }
    // if its a strike
  }

  render() {
    const { frames, totalScore, rollCount } = this.state;
    // For use with Pin Numbers
    const PinNums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // For use with frame count
    const frameNums = PinNums.slice(1);
    // For use with frame score
    const frameScoreNums = PinNums.slice(0, 10);
    // Output Pin buttons 0-10
    // const pinButtons = PinNums.map((num) => <button id={num} onClick={this.pinSelector} type="button">{num}</button>);
    // Output TD with frame number 1-10
    const frameNumber = frameNums.map((num) => (
      <td>
        Frame
        {num}
      </td>
    ));
    // Output each frame and its values per frame
    const frameScore = frameScoreNums.map((num) => (
      <td>
        {frames[num]}
      </td>
    ));
    return (
      <>
        <h1>Bowling App</h1>
        <BowlingPins pinSelector={this.pinSelector} rollCount={rollCount} />
        <table border="1">
          <tbody>
            <tr>
              {frameNumber}
              <td>Final Score</td>
            </tr>
            <tr>
              {frameScore}
              <td id="finalScore">{totalScore}</td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
}
export default App;

ReactDOM.render(<App />, document.getElementById('app'));
