import { Divider, Statistic } from 'antd'
import cn from 'classnames'
import { useSelector } from '@/hooks/use-store'
import defaultAvatar from '@/assets/avatar.jpg'
import style from './style/index.module.scss'

export default function Dashboard() {
  const userInfo = useSelector((state) => state.user.userInfo)

  return (
    <section className={style['user-section']}>
      <div className={style['user-info']}>
        <img src={userInfo?.avatar || defaultAvatar} />
        <div>
          <div className={style.name}>{userInfo?.username}</div>
          <div className={style['job-title']}>
            {userInfo?.dept}
            <Divider type="vertical" className={style.divider} />
            {userInfo?.job}
          </div>
        </div>
      </div>

      <div className={style.statistics}>
        <Statistic
          title="待办事项"
          value={12}
          valueStyle={{ textAlign: 'right' }}
        />
        <Divider type="vertical" className={cn(style.divider, 'h-10')} />
        <Statistic
          title="项目数"
          value={8}
          valueStyle={{ textAlign: 'center' }}
        />
        <Divider type="vertical" className={cn(style.divider, 'h-10')} />
        <Statistic
          title="周任务完成率"
          value={95}
          suffix="%"
          valueStyle={{ textAlign: 'left' }}
        />
      </div>
    </section>
  )
}
