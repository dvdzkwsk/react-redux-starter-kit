import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {Pie} from '../../../components/Charts'
import {ClickHeatMap} from '../../../components/Charts'

//模拟数据，用户使用时可用真实数据代替
var data = [];
for (var i = 0; i <= 20; i++) {
  for (var j = 0; j <= 20; j++) {
    var x = i * 25.6;
    var y = j * 19.2;
    if ((x > 220 && x < 360) && (y > 70 && y < 230)) {
      var z = Math.random() * (400);
    } else if ((x > 320 && x < 500) && (y > 230 && y < 380)) {
      var z = Math.random() * (200);
    } else {
      var z = Math.random() * (100);
    }

    data.push({
      x: x,
      y: y,
      value: z
    });
  }
}
//为了将数据与图片上的位置完全吻合，我们需要将横轴和纵轴的范围设定为数据对应范围，并将范围优化处理关闭
var defs = {
  'x': {
    type: 'linear',
    min: 0,
    max: 512,
    nice: false //优化处理关闭
  },
  'y': {
    type: 'linear',
    min: 0,
    max: 384,
    nice: false
  }
};
export class RootContainer extends Component {
    constructor(props) {
      super(props)
      this.state = {
        data: [{
          name: 'Microsoft Internet Explorer',
          value: 56.33
        }, {
          name: 'Chrome',
          value: 24.03
        }, {
          name: 'Firefox',
          value: 10.38
        }, {
          name: 'Safari',
          value: 4.77
        }, {
          name: 'Opera',
          value: 0.91
        }, {
          name: 'Proprietary or Undetectable',
          value: 0.2
        }],
        width: 500,
        height: 250
      }
    }

    render () {
        return (
            <div>
            <div>
              <Pie
                data={this.state.data}
                width={this.state.width}
                height={this.state.height}
                ref="myChart" /> 
            </div>
            <div>
             <ClickHeatMap
                data={data}
                width= {800}
                height= {500}
                defs={defs} />
            </div>
            </div>
        )
    }
}
