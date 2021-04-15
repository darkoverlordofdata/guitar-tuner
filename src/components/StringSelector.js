import React from 'react';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';


export default function StringSelector(props) {
  const [selectedValue, setSelectedValue] = React.useState(props.selected);
  const [instrument, setInstrument] = React.useState(props.instrument);
  const [tuning, setTuning] = React.useState(props.tuning);

  /**
   * Raise an event to be caught by PitchGauge
   * event.target.value will be the selected string, E2 ... E4
   */
  const handleChange = (event) => {
    // alert(`selected ${event.target.value}`)
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <FormControlLabel
          value="top"
          control={<Radio
            checked={selectedValue === 'E2'}
            onChange={handleChange}
            value="E2"
            name="radio-button-string"
            inputProps={{ 'aria-label': 'E2' }}
          />}
        label="E2"
        labelPlacement="top"
      />
      <FormControlLabel
          value="top"
          control={<Radio
            checked={selectedValue === 'A2'}
            onChange={handleChange}
            value="A2"
            name="radio-button-string"
            inputProps={{ 'aria-label': 'A2' }}
          />}
        label="A2"
        labelPlacement="top"
      />
      <FormControlLabel
          value="top"
          control={<Radio
            checked={selectedValue === 'D3'}
            onChange={handleChange}
            value="D3"
            name="radio-button-string"
            inputProps={{ 'aria-label': 'D3' }}
          />}
        label="D3"
        labelPlacement="top"
      />
      <FormControlLabel
          value="top"
          control={<Radio
            checked={selectedValue === 'G3'}
            onChange={handleChange}
            value="G3"
            color="default"
            name="radio-button-string"
            inputProps={{ 'aria-label': 'G3' }}
          />}
          label="G3"
          labelPlacement="top"
        />
        <FormControlLabel
          value="top"
          control={<Radio
            checked={selectedValue === 'B3'}
            onChange={handleChange}
            value="B3"
            color="default"
            name="radio-button-string"
            inputProps={{ 'aria-label': 'B3' }}
          />}
          label="B3"
          labelPlacement="top"
        />
        <FormControlLabel
          value="top"
          control={<Radio
            checked={selectedValue === 'E4'}
            onChange={handleChange}
            value="E4"
            color="default"
            name="radio-button-string"
            inputProps={{ 'aria-label': 'E4' }}
          />}
          label="E4"
          labelPlacement="top"
        />
    </div>
  );
}
