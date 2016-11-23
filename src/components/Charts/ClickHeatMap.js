import createG2 from './utils/createG2'
import G2 from 'g2'

export const ClickHeatMap = createG2((chart, { data, defs }) => {
  //由于数据坐标的原点在左下角，但是图片坐标原点在左上角，所以需要将数据坐标翻转
  chart.coord().reflect();

  //使用图片后可以隐藏坐标轴
  chart.axis(false);
  chart.source(data, defs);
  chart.heatmap().position('x*y').color('value').size(40); //为了呈献更好的效果，需要调整热力图的叠加范围

  //引入背景图片
  chart.guide().image([0, 384], [512, 0], {
    src: 'https://zos.alipayobjects.com/rmsportal/psmMpWXLgUvKtbm.jpg'
  });
  chart.render();
});



