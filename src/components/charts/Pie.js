import createG2 from './utils/createG2'
import G2 from 'g2'

export const Pie = createG2((chart, { data }) => {
  chart.source(data);

  // 重要：绘制饼图时，必须声明 theta 坐标系
  chart.coord('theta', {
    radius: 0.8 // 设置饼图的大小
  });
  chart.legend('name', {
    position: 'bottom'
  });
  chart.tooltip({
    title: null,
    map: {
      value: 'value'
    }
  });
  chart.intervalStack()
    .position(G2.Stat.summary.percent('value'))
    .color('name')
    .label('name*..percent', function (name, percent) {
      percent = (percent * 100).toFixed(2) + '%';
      return name + ' ' + percent;
    });

  chart.render();
});
