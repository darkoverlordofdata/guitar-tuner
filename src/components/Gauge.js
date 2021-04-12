import React from 'react'

class Gauge extends React.Component {
    componentDidMount () {
      const options = Object.assign({}, this.props, {
        renderTo: this.el
      })
      // this.gauge = new Gauge(options).draw()
    }
  
    componentWillReceiveProps (nextProps) {
      this.gauge.value = nextProps.value
      this.gauge.update(nextProps)
    }
  
    render () {
      return (
        <div className="gauge gauge__liveupdate" id="gauge">
          <div className="gauge--container" id="gauge-container">
            <div className="gauge--marker"></div>
            <div className="gauge--background"></div>
            <div className="gauge--center"></div>
            <div className="gauge--data"></div>
            <div className="gauge--needle"></div>
          </div>
          <div className="gauge--labels mdl-typography--headline">
              <span className="gauge--label__low">No</span>
              <span className="gauge--label__spacer"></span>
              <span className="gauge--label__high">Yes</span>
          </div>
        </div>
      )
    }
  }
  
  export default Gauge