import { Card, Tag, Tooltip, Avatar, Dropdown, type MenuProps } from 'antd'
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

const menu: MenuProps['items'] = [
  {
    key: 'open',
    label: (
      <a target="_blank" href="#">
        打开
      </a>
    ),
  },
  {
    key: 'rename',
    label: <div>重命名</div>,
  },
  {
    key: 'move',
    label: '移动至...',
    children: [
      {
        key: 'individual',
        label: <div>个人</div>,
      },
      {
        key: 'team1',
        label: <div>肉夹馍研发团队</div>,
      },
      {
        key: 'team2',
        label: <div>芝士炸鸡口味团队</div>,
      },
      {
        key: 'team3',
        label: <div>生酪拿铁迭代团队</div>,
      },
    ],
  },
  { type: 'divider' },
  {
    key: 'remove',
    label: <div>移除</div>,
    danger: true,
  },
]

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
    <Dropdown menu={{ items: menu }} trigger={['contextMenu']}>
      <Card
        className={cn(style.entry, className)}
        bordered={false}
        tabIndex={0}
      >
        <div className={style.subtext}>{subText}</div>
        <div className={style.title}>
          {item.title}
          {item.desc ? (
            <Tooltip placement="top" title={item.desc}>
              <QuestionCircleOutlined
                size={14}
                style={{ fontSize: '14px', color: 'var(--colorTextSecondary)' }}
              />
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
    </Dropdown>
  )
}
