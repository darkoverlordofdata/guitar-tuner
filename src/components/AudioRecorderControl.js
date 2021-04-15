import React from "react"
import { setupAudio } from "./setupAudio"
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import StringSelector from "./StringSelector"
import PitchGauge from "./PitchGauge"

//https://campedersen.com/react-audio/

function AudioRecorderControl() {
  const [audio, setAudio] = React.useState(undefined)
  const [running, setRunning] = React.useState(false)
  const [latestPitch, setLatestPitch] = React.useState(undefined)
  const [string, setString] = React.useState('E2')


  // Initial state. Initialize the web audio once a user gesture on the page
  // has been registered.
  if (!audio) {
    return (
      <button
        onClick={async () => {
          setAudio(await setupAudio(setLatestPitch))
          setRunning(true)
        }}
      >
        Tune Your Guitar or Bass
      </button>
    )
  }

  // Audio already initialized. Suspend / resume based on its current state.
  const { context } = audio
  return (
    <Grid container direction="column">
      <Grid>
        A4 = 440hz
      </Grid>

      <Grid>
        <PitchGauge running={running} latestPitch={latestPitch} using={string} />
      </Grid>

      <Grid>
        <StringSelector instrument='guitar' tuning='standard' selected={string} /> 
      </Grid>

      <Grid>
        <Button
          onClick={async () => {
            if (running) {
              await context.suspend()
              setRunning(context.state === "running")
            } else {
              await context.resume()
              setRunning(context.state === "running")
            }
          }}
          disabled={context.state !== "running" && context.state !== "suspended"}
        >
          {running ? "Pause" : "Resume"}
        </Button>
      </Grid>
    </Grid>
  )
}


export default AudioRecorderControl
