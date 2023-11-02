import { useState } from 'react'
import { Row, Col, Card, Tabs, Input, Space, type TabsProps } from 'antd'
import Sticky from 'react-stickynode'
import { useRequest } from 'ahooks'
import { SearchOutlined } from '@ant-design/icons'
import { getRecentFiles } from '@/api/file'
import Header from './header'
import FileCard from './file-card'
import Calendar from './calendar'
import StatCard from './stat-card'
import style from './style/index.module.scss'

const tabs: TabsProps['items'] = [
  {
    label: '最近访问',
    key: 'recent',
  },
  {
    label: '我创建的',
    key: 'created',
  },
  {
    label: '我参与的',
    key: 'involved',
  },
  {
    label: '回收站',
    key: 'removed',
  },
]

export default function Dashboard() {
  const [searchText, setSearchText] = useState('')
  const [category, setCategory] = useState('recent')

  const { data } = useRequest(getRecentFiles)

  const search = (
    <Input
      value={searchText}
      style={{ borderRadius: '999px', marginTop: '14px' }}
      placeholder="输入文件名过滤"
      allowClear
      prefix={<SearchOutlined style={{ color: 'var(--colorTextSecondary)' }} />}
      onChange={(v) => setSearchText(v.target.value)}
    />
  )

  return (
    <>
      <Header />
      <section className="px-8 py-6">
        <Row gutter={24}>
          <Col span={16}>
            <Sticky
              top={64}
              innerActiveClass={style.shadow}
              innerClass={style.inner}
              innerZ={10}
            >
              <Card bodyStyle={{ padding: '16px 24px' }}>
                <Tabs
                  id="hide-border-bottom"
                  tabBarStyle={{
                    margin: 0,
                    marginTop: '-14px',
                  }}
                  activeKey={category}
                  items={tabs}
                  tabBarExtraContent={search}
                  onChange={setCategory}
                />
              </Card>
            </Sticky>
            <div className="grid grid-cols-3 gap-4 mt-4">
              {data?.files.map((item, idx) => (
                <FileCard item={item} key={idx} />
              ))}
            </div>
          </Col>

          <Col span={8}>
            <Sticky top={64} innerZ={10}>
              <Space direction="vertical" size={16} className="w-full">
                <Calendar />
                <StatCard />
              </Space>
            </Sticky>
          </Col>
        </Row>
      </section>
    </>
  )
}
