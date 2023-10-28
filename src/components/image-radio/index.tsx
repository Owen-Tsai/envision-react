import { useState } from 'react'
import cn from 'classnames'
import style from './style.module.scss'

export type ItemProps = {
  value: string | number
  icon: JSX.Element
  label: string
  desc?: string
}

export type IProps = {
  onChange?: (v: IProps['value']) => void
  value?: string | number | undefined
  options: ItemProps[]
}

export default function ImageRadio({ onChange, value, options }: IProps) {
  const [val, setVal] = useState<IProps['value']>(value)

  function Item(props: ItemProps) {
    const cls = cn(style.radio, val === props.value ? style.selected : null)

    const onItemClick = () => {
      if (val === props.value) return
      setVal(props.value)
      onChange?.(props.value)
    }

    return (
      <div className={cls} onClick={onItemClick}>
        <span className={style.icon}>{props.icon}</span>
        <div>
          <div className={style.label}>{props.label}</div>
          {props.desc && <span className={style.desc}>{props.desc}</span>}
        </div>
      </div>
    )
  }

  return (
    <div className={style.group}>
      {options.map((e, idx) => (
        <Item
          icon={e.icon}
          label={e.label}
          value={e.value}
          desc={e.desc}
          key={idx}
        />
      ))}
    </div>
  )
}
