import { useState, useEffect } from 'react'
import { Row, Col, Card, Tabs, Input, type TabsProps } from 'antd'
import Sticky from 'react-stickynode'
import { SearchOutlined } from '@ant-design/icons'
import { getRecentFiles } from '@/api/file'
import { IFile } from '@/types'
import Header from './header'
import FileCard from './file-card'
import Calendar from './calendar'
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
  const [items, setItems] = useState<IFile[]>()

  useEffect(() => {
    getRecentFiles().then((res) => {
      setItems(res.data.files)
    })
  }, [])

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
              top={56}
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
              {items?.map((item, idx) => <FileCard item={item} key={idx} />)}
            </div>
          </Col>

          <Col span={8}>
            <Calendar />
          </Col>
        </Row>
      </section>
    </>
  )
}
