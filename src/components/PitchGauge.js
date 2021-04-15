import React from 'react';
import { RadialGauge } from "react-canvas-gauges"


/**
 * # standard tuning:
 * E2	82.41
 * A2	110.00
 * D3	146.83
 * G3	196.00
 * B3	246.94
 * E4	329.63
 */


// const fq = {
//   'E2': ['77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87'],
//   'A2': [],
//   'D3': [],
//   'G3': [],
//   'B3': [],
//   'E4': [],

// }

// export default class PitchGauge extends React.Component {

export default function PitchGauge(props) {

    return (
    <RadialGauge
        units='Hz'
        title='Frequency'
        value={props.latestPitch
        ? `${props.latestPitch.toFixed(1)}`
        : props.running
        ? '82'
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
    ></RadialGauge>    
    );
}

  
  