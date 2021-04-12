import React from "react";
import "./App.css";
import { setupAudio } from "./setupAudio";
import { RadialGauge } from "react-canvas-gauges"
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { StringSelector } from "./components";
import { PitchReadout } from "./components";


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
        Tune Your Guitar or Bass
      </button>
    );
  }

  // Audio already initialized. Suspend / resume based on its current state.
  const { context } = audio;
  return (
    <Grid container direction="column">
      <Grid>
        A4 = 440hz
      </Grid>

      <Grid>
        <PitchReadout running={running} latestPitch={latestPitch} />
      </Grid>

      <Grid>
        <StringSelector instrument='guitar' tuning='standard' /> 
      </Grid>

      <Grid>
        <Button
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
        </Button>
      </Grid>
    </Grid>
  );
}


function App() {
  return (
    <div className="App">
      <div className="App-content">
        <AudioRecorderControl />
      </div>
    </div>
  );
}

export default App;
