import cn from 'classnames'
import { CheckOutlined } from '@ant-design/icons'
import style from './style.module.scss'

export type ItemProps = {
  value: string | number
  icon: JSX.Element
  label: string
  desc?: string
  className?: string
  onChange?: (v: ItemProps['value']) => void
}

export type IProps = {
  onChange?: (v: IProps['value']) => void
  value?: string | number | undefined
  options: ItemProps[]
}

function Item(props: ItemProps) {
  const onItemClick = () => {
    props.onChange?.(props.value)
  }

  return (
    <div className={cn(style.radio, props.className)} onClick={onItemClick}>
      <span className={style.icon}>{props.icon}</span>
      <div>
        <div className={style.label}>{props.label}</div>
        {props.desc && <span className={style.desc}>{props.desc}</span>}
      </div>

      <span className={style.check}>
        <CheckOutlined />
      </span>
    </div>
  )
}

export default function ImageRadio({ onChange, value, options }: IProps) {
  return (
    <div className={style.group}>
      {options.map((e, idx) => (
        <Item
          icon={e.icon}
          label={e.label}
          value={e.value}
          desc={e.desc}
          key={idx}
          className={cn(style.radio, value === e.value ? style.selected : null)}
          onChange={(val) => onChange?.(val)}
        />
      ))}
    </div>
  )
}
