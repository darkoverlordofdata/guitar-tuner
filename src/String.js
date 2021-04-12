import React from 'react';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';


export default class String extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const handleChange = (event) => {
      // setSelectedValue(event.target.value);
    };
  
    return (
        <FormControlLabel
            value="top"
            control={<Radio
              checked={false}
              onChange={handleChange}
              value={this.props.name}
              name="radio-button-string"
              inputProps={{ 'aria-label': this.props.name }}
            />}
          label={this.props.name}
          labelPlacement="top"
        />
    )
  }
}