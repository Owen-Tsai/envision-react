import { Card, Statistic, Row, Col } from 'antd'
import style from './style/stat-card.module.scss'

export default function StatCard() {
  return (
    <Card title="我的数据">
      <Row gutter={24}>
        <Col span={6}>
          <Statistic title="正在跟进" value={27} />
        </Col>
        <Col span={6}>
          <Statistic title="完成项目" value={13} />
        </Col>
        <Col span={6}>
          <Statistic title="加入团队" value={7} />
        </Col>
        <Col span={6}>
          <Statistic title="贡献指数" value={209} />
        </Col>
      </Row>
      <div className={style.hint}>*贡献系数为用户在不同方面贡献的加权总和</div>
    </Card>
  )
}
