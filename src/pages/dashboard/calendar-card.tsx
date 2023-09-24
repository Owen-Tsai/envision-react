import { useState } from 'react'
import dayjs from 'dayjs'
import { Card, Space, Tooltip, Button, Empty, List } from 'antd'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons'
import cn from 'classnames'
import { dateRange } from '@/utils/day'
import { Link } from 'react-router-dom'
import style from './style/calendar.module.scss'

export default function CalendarCard() {
  // [!] actual dateRange should be passed from server
  const days = dateRange(dayjs().startOf('week'), dayjs().endOf('week'))
  const todayIndex = dayjs().weekday()

  const [selectedDay, setSelectedDay] = useState(todayIndex)
  const [items, setItems] = useState<string[]>([])

  const genItemCls = (i: number) => {
    if (todayIndex === i) {
      return style.current
    }
    if (selectedDay === i) {
      return style.selected
    }
    return ''
  }

  const genItemContent = (i: number) => {
    if (i === 2) {
      setItems(['参加青椒肉夹馍项目可行性研讨会'])
    } else if (i === 4) {
      setItems([
        '完成审批 @只因威 的代码提交',
        '实现 Envision 项目 CI/CD 任务编写',
      ])
    } else {
      setItems([])
    }
  }

  const handleDayClick = (i: number) => {
    if (selectedDay === i) return
    setSelectedDay(i)
    genItemContent(i)
  }

  const extra = (
    <Space direction="horizontal" className={style.extra}>
      <Tooltip title="查看前一周">
        <Button icon={<ArrowLeftOutlined />} type="text" />
      </Tooltip>
      <Tooltip title="查看后一周">
        <Button icon={<ArrowRightOutlined />} type="text" />
      </Tooltip>
    </Space>
  )

  return (
    <Card title="本周日程" bordered={false} extra={extra}>
      <div className={style.calendar}>
        {days.map((item, i) => (
          <div
            className={cn(style.day, genItemCls(i))}
            key={i}
            onClick={() => handleDayClick(i)}
          >
            <div className={style.date}>{item.date()}</div>
            <div className={style.weekday}>
              {dayjs.weekdays(true)[i].slice(2)}
            </div>
          </div>
        ))}
      </div>
      {items.length > 0 && (
        <List className={style.list} itemLayout="horizontal">
          {items.map((e, i) => (
            <List.Item className={style.item} key={i}>
              <div className={style.title}>{e}</div>
              <Link to="#">查看详情</Link>
            </List.Item>
          ))}
        </List>
      )}
      {items.length <= 0 && (
        <Empty className={style.empty} image={Empty.PRESENTED_IMAGE_SIMPLE} />
      )}
    </Card>
  )
}
