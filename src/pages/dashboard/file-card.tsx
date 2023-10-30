import { Card, Tag, Tooltip, Avatar } from 'antd'
import cn from 'classnames'
import dayjs from 'dayjs'
import { QuestionCircleOutlined } from '@ant-design/icons'
import { IFile, UserAvatarInfo } from '@/types'
import style from './style/files.module.scss'

const genUserAvatar = (user: UserAvatarInfo) => {
  return user.avatar ? (
    <Avatar size="small" src={user.avatar} />
  ) : (
    <Avatar size="small" style={{ backgroundColor: 'var(--colorPrimaryText)' }}>
      {user.username.slice(0, 1)}
    </Avatar>
  )
}

export default function FileCard({
  item,
  className,
}: {
  item: IFile
  className?: string
}) {
  const subText = item.team ? (
    <a href="#">{item.team}</a>
  ) : (
    <span>个人文件</span>
  )

  const initiator = (
    <>
      {genUserAvatar(item.initiator)}
      <span className="ml-2">{item.initiator.username}</span>
    </>
  )

  const collaborators = (
    <Avatar.Group>
      {item.collaborators.map((e, i) => (
        <Tooltip title={e.username} key={i}>
          {genUserAvatar(e)}
        </Tooltip>
      ))}
    </Avatar.Group>
  )

  return (
    <Card className={cn(style.entry, className)} bordered={false}>
      <div className={style.subtext}>{subText}</div>
      <div className={style.title}>
        {item.title}
        {item.desc ? (
          <Tooltip placement="top" title={item.desc}>
            <QuestionCircleOutlined />
          </Tooltip>
        ) : (
          <></>
        )}
      </div>

      <div className={style.user}>
        <div>
          <span className={style.label}>创建人</span>
          <span className={style.content}>{initiator}</span>
        </div>
        <div>
          <span className={style.label}>协作者</span>
          <span className={style.content}>{collaborators}</span>
        </div>
      </div>

      <div className={style.footer}>
        <Tag>{item.type}</Tag>
        <div className={style.time}>
          编辑于 {dayjs(`2023-${item.time}`).fromNow()}
        </div>
      </div>
    </Card>
  )
}
