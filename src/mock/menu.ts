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
            iconName: 'org',
            label: '组织结构',
            key: '/org',
            children: [
              {
                label: '部门管理',
                key: '/org/department',
              },
              {
                label: '成员管理',
                key: '/org/mamber',
              },
              {
                label: '角色管理',
                key: '/org/role',
              },
            ],
          },
          {
            iconName: 'project',
            label: '项目管理',
            key: 'project',
            children: [
              {
                label: '项目列表',
                key: '/project',
              },
            ],
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
