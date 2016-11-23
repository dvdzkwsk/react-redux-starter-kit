import G2 from 'g2'
import React from 'react'

let uniqueId = 0;
function generateUniqueId() {
  return `rc-g2-${uniqueId++}`;
}

export default function createG2(__operation) {
  class Component extends React.Component {

    constructor(props, context) {
      super(props, context);
      this.chart = null;
      this.chartId = generateUniqueId();
    }

    componentDidMount() {
      this.initChart(this.props);
    }

    componentWillReceiveProps(newProps) {
      const { data: newData, width: newWidth, height: newHeight, plotCfg: newPlotCfg } = newProps;
      const { data: oldData, width: oldWidth, height: oldHeight, plotCfg: oldPlotCfg } = this.props;

      if (newPlotCfg !== oldPlotCfg) {
        console.warn('plotCfg 不支持修改');
      }

      if (newData !== oldData) {
        this.chart.changeData(newData);
      }
      if (newWidth !== oldWidth || newHeight !== oldHeight) {
        this.chart.changeSize(newWidth, newHeight);
      }
    }

    componentWillUnmount() {
      this.chart.destroy();
      this.chart = null;
      this.chartId = null;
    }

    initChart(props) {
      const { width, height, data, plotCfg, forceFit } = props;
      const chart = new G2.Chart({
        id: this.chartId,
        width, 
        height
      });
      __operation(chart, props);
      this.chart = chart;
    }

    render() {
      return (<div id={this.chartId} />);
    }
  }

  Component.propTypes = {
    data: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    width: React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired,
    plotCfg: React.PropTypes.object,
    forceFit: React.PropTypes.bool,
  };

  return Component;
}