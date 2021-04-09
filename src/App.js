import React from "react";
import "./App.css";
import { setupAudio } from "./setupAudio";
import { RadialGauge } from "react-canvas-gauges"

function PitchReadout({ running, latestPitch }) {
  return (
    <RadialGauge
      units='Hz'
      title='Frequency'
      value=      {latestPitch
        ? `${latestPitch.toFixed(1)}`
        : running
        ? '80'
        : '0'}
      minValue={77}
      maxValue={87}
      majorTicks={['77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87']}
      minorTicks={2}
      strokeTicks={true}
      highlights={[
        {"from": 77, "to": 82, "color": "rgba(0,0, 255, .3)"},
        {"from": 82, "to": 87, "color": "rgba(255, 0, 0, .3)"}
      ]}
      width={400}
      height={400}
      ticksAngle={225}
      startAngle={67.5}
      colorMajorTicks="#ddd"
      colorMinorTicks="#ddd"
      colorTitle="#eee"
      colorUnits="#ccc"
      colorNumbers="#eee"
      colorPlate="#222"
      borderShadowWidth="0"
      borders={true}
      needleType="arrow"
      needleWidth={2}
      needleCircleSize={7}
      needleCircleOuter={true}
      needleCircleInner={false}
      animationDuration={1500}
      animationRule="linear"
      colorBorderOuter="#333"
      colorBorderOuter-end="#111"
      colorBorderMiddle="#222"
      colorBorderMiddle-end="#111"
      colorBorderInner="#111"
      colorBorderInner-end="#333"
      colorNeedleShadowDown="#333"
      colorNeedleCircleOuter="#333"
      colorNeedleCircleOuter-end="#111"
      colorNeedleCircleInner="#111"
      colorNeedleCircleInner-end="#222"
      valueBoxBorderRadius="0"
      colorValueBoxRect="#222"
      colorValueBoxRect-end="#333"
      fontValue="Led"
      fontNumbers="Led"
      fontTitle="Led"
      fontUnits="Led"
      

    ></RadialGauge>    
  );
}

function AudioRecorderControl() {
  const [audio, setAudio] = React.useState(undefined);
  const [running, setRunning] = React.useState(false);
  const [latestPitch, setLatestPitch] = React.useState(undefined);

  // Initial state. Initialize the web audio once a user gesture on the page
  // has been registered.
  if (!audio) {
    return (
      <button
        onClick={async () => {
          setAudio(await setupAudio(setLatestPitch));
          setRunning(true);
        }}
      >
        Start listening
      </button>
    );
  }

  // Audio already initialized. Suspend / resume based on its current state.
  const { context } = audio;
  return (
    <div>
      <button
        onClick={async () => {
          if (running) {
            await context.suspend();
            setRunning(context.state === "running");
          } else {
            await context.resume();
            setRunning(context.state === "running");
          }
        }}
        disabled={context.state !== "running" && context.state !== "suspended"}
      >
        {running ? "Pause" : "Resume"}
      </button><div/>
      <PitchReadout running={running} latestPitch={latestPitch} />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        Wasm Audio Tutorial
      </header> */}
      <div className="App-content">
        <AudioRecorderControl />
      </div>
    </div>
  );
}

export default App;
