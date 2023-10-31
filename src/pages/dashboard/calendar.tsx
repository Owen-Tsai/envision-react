import { Card } from 'antd'
import { Heatmap, type HeatmapConfig } from '@ant-design/charts'
import data from '@/mock/calendar-data.json'

const config: HeatmapConfig = {
  data,
  xField: 'week',
  yField: 'day',
  colorField: 'commits',
  reflect: 'y',
  height: 140,
  interactions: [{ type: 'element-active' }],
  heatmapStyle: { stroke: '#fff' },
  meta: {
    day: {
      type: 'cat',
      values: [
        '星期日',
        '星期一',
        '星期二',
        '星期三',
        '星期四',
        '星期五',
        '星期六',
      ],
    },
    week: {
      type: 'cat',
    },
    month: {
      type: 'cat',
    },
    commits: {
      sync: true,
    },
    date: {
      type: 'cat',
    },
  },
  xAxis: {
    position: 'top',
    tickLine: null,
    line: null,
    label: {
      offset: 12,
      style: {
        fontSize: 12,
        fill: '#666',
        textBaseline: 'top',
      },
      autoHide: false,
      formatter: (val) => {
        if (val === '9') {
          return '7月'
        }
        if (val === '13') {
          return '8月'
        }
        if (val === '17') {
          return '9月'
        }
        if (val.includes('22')) {
          return '10月'
        }
        return ''
      },
    },
  },
  state: {
    active: {
      style: { stroke: '#fff' },
    },
  },
  tooltip: {
    fields: ['date', 'commits'],
    formatter: (param) => {
      return {
        title: param.date,
        name: '提交',
        value: param.commits,
      }
    },
  },
}

export default function Calendar() {
  return (
    <Card title="活跃日历">
      <Heatmap {...config} />
    </Card>
  )
}
