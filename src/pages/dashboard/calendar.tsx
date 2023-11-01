import { Card } from 'antd'
import { Heatmap, type HeatmapConfig } from '@ant-design/charts'
import { useSelector } from '@/hooks/use-store'
import data from '@/mock/calendar-data.json'

export default function Calendar() {
  const theme = useSelector((state) => state.theme.value)

  const chartTheme = theme === 'dark' ? 'dark' : 'default'
  const chartColor =
    theme === 'dark'
      ? [
          '#1f1f1f',
          '#1d3712',
          '#274916',
          '#306317',
          '#3c8618',
          '#49aa19',
          '#6abe39',
          '#8fd460',
          '#b2e58b',
        ]
      : [
          '#f0f0f0',
          '#d9f7be',
          '#b7eb8f',
          '#95de64',
          '#73d13d',
          '#52c41a',
          '#389e0d',
          '#237804',
          '#135200',
        ]

  const config: HeatmapConfig = {
    data,
    xField: 'week',
    yField: 'day',
    colorField: 'commits',
    reflect: 'y',
    height: 140,
    interactions: [{ type: 'element-active' }],
    heatmapStyle: { stroke: chartTheme === 'dark' ? '#000' : '#fff' },
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
    yAxis: { grid: null },
    xAxis: {
      position: 'top',
      tickLine: null,
      grid: null,
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
    color: chartColor,
    theme: chartTheme,
  }

  return (
    <Card title="活跃日历">
      <Heatmap {...config} />
    </Card>
  )
}
