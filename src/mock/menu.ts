import Mock from 'mockjs'
import setupMock, { responseWrap } from '@/utils/mock'
import { MenuRes } from '@/api/menu'

setupMock({
  setup() {
    Mock.mock('/api/menu', () => {
      return responseWrap<MenuRes>({
        menu: [
          {
            iconName: 'dashboard',
            label: '工作台',
            key: '/dashboard',
          },
          {
            iconName: 'team',
            label: '我的团队',
            key: '/team',
            children: [
              {
                label: '肉夹馍研发团队',
                key: '/team/12',
              },
              {
                label: '芝士炸鸡口味团队',
                key: '/team/13',
              },
            ],
          },
          {
            iconName: 'archive',
            label: '已归档文件',
            key: 'archive',
          },
          {
            iconName: 'material',
            label: '物料市场',
            key: 'material',
          },
          {
            iconName: 'org',
            label: '组织架构',
            key: '/org',
          },
          {
            iconName: 'setting',
            label: '系统设置',
            key: '/settings',
          },
        ],
      })
    })
  },
})
