import { useState } from 'react'
import { Divider, Modal, Form, Input, Select, type SelectProps } from 'antd'
import {
  LayoutTwoTone,
  PieChartTwoTone,
  ProfileTwoTone,
  PlusOutlined,
} from '@ant-design/icons'
import ImageRadio, { type ItemProps } from '@/components/image-radio'
import { useSelector } from '@/hooks/use-store'
import defaultAvatar from '@/assets/avatar.jpg'
import iconTeam from '@/assets/icons/icon-team.png'
import iconFile from '@/assets/icons/icon-file.png'
import { IFileType } from '@/types/file'
import style from './style/header.module.scss'

type TeamForm = {
  name?: string
}
type FileForm = {
  name?: string
  team?: number
  type?: IFileType
}
type FormValue<T> = T extends 'team' ? TeamForm : FileForm

const fakeOptions: SelectProps['options'] = [
  {
    label: '肉夹馍研发团队',
    value: 0,
  },
  {
    label: '芝士炸鸡口味团队',
    value: 1,
  },
  {
    label: '生酪拿铁迭代团队',
    value: 2,
  },
]

const typeOptions: ItemProps[] = [
  {
    icon: <LayoutTwoTone />,
    label: '视图',
    desc: '通用型页面',
    value: 0,
  },
  {
    icon: <ProfileTwoTone />,
    label: '事务',
    desc: '具有流程的表单',
    value: 1,
  },
  {
    icon: <PieChartTwoTone />,
    label: '可视化页',
    desc: '数据可视化页面',
    value: 2,
  },
]

export default function Header() {
  const userInfo = useSelector((state) => state.user.userInfo)

  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)
  const [createType, setCreateType] = useState<'team' | 'file'>('file')
  const [form] = Form.useForm()

  const [value, setValue] = useState<FormValue<typeof createType>>()

  const modalContent =
    createType === 'file' ? (
      <>
        <Form
          form={form}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 20 }}
          onValuesChange={(v) => setValue({ ...value, ...v })}
        >
          <Form.Item<FormValue<'file'>>
            label="应用名称"
            name="name"
            rules={[{ required: true, message: '请输入应用名称' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item<FormValue<'file'>> label="添加到团队" name="team">
            <Select options={fakeOptions} allowClear showSearch />
          </Form.Item>
          <Form.Item<FormValue<'file'>>
            label="应用类型"
            name="type"
            rules={[{ required: true }]}
            validateTrigger="onChange"
          >
            <ImageRadio options={typeOptions} />
          </Form.Item>
        </Form>
      </>
    ) : (
      <>
        <Form form={form} onValuesChange={(v) => setValue({ ...value, ...v })}>
          <Form.Item<FormValue<'team'>>
            label="团队名称"
            name="name"
            rules={[{ required: true, message: '请输入团队名称' }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </>
    )

  const openModal = (type: 'team' | 'file') => {
    setValue({})
    form.resetFields()
    setCreateType(type)
    setOpen(true)
  }

  return (
    <>
      <section className={style.header}>
        <div className={style.info}>
          <img src={userInfo?.avatar || defaultAvatar} />
          <div>
            <div className={style.name}>{userInfo?.username}</div>
            <div className={style.job}>
              {userInfo?.dept}
              <Divider type="vertical" className={style.divider} />
              {userInfo?.job}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className={style.action} onClick={() => openModal('team')}>
            <img src={iconTeam} />
            <div>
              <div>创建新团队</div>
              <span>新建团队，开始新项目</span>
            </div>

            <PlusOutlined />
          </div>

          <div className={style.action} onClick={() => openModal('file')}>
            <img src={iconFile} />
            <div>
              <div>新建低代码应用</div>
              <span>视图、事务或可视化页</span>
            </div>

            <PlusOutlined />
          </div>
        </div>
      </section>

      <Modal
        title={createType === 'file' ? '创建低代码应用' : '创建团队'}
        open={open}
        onOk={() => setOpen(false)}
        confirmLoading={loading}
        onCancel={() => setOpen(false)}
        width={600}
      >
        <>
          <div className="mt-6">{modalContent}</div>
          <pre>{JSON.stringify(value, null, 2)}</pre>
        </>
      </Modal>
    </>
  )
}
