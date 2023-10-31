import Mock, { Random } from 'mockjs'
import setupMock, { responseWrap } from '@/utils/mock'
import { FileRes } from '@/api/file'
import avatar from '@/assets/avatar.jpg'
import avatar2 from '@/assets/avatar-2.jpg'

setupMock({
  setup() {
    Mock.mock('/api/recent-file', () => {
      return responseWrap<FileRes>({
        files: [
          {
            title: '测试页面',
            initiator: {
              username: '蔡仲晨',
              avatar,
            },
            collaborators: [
              {
                username: '蔡仲晨',
                avatar,
              },
            ],
            time: Random.datetime('MM-dd'),
            type: '视图',
          },
          {
            title: '后台首页',
            team: '炸鸡部',
            project: '肉夹馍青椒项目',
            initiator: {
              username: '蔡仲晨',
              avatar,
            },
            collaborators: [
              {
                username: '蔡仲晨',
                avatar,
              },
              { username: '只因威' },
              { username: '马德华' },
              { username: '陆地战神' },
            ],
            time: Random.datetime('MM-dd'),
            type: '视图',
          },
          {
            title: '岗位发布表单',
            team: '济南人才',
            project: '济南云聘小程序',
            initiator: {
              username: '薛帕德',
              avatar: avatar2,
            },
            collaborators: [
              {
                username: '蔡仲晨',
                avatar,
              },
              { username: '只因威' },
              { username: '陆地战神' },
            ],
            time: Random.datetime('MM-dd'),
            type: '事务',
          },
          {
            title: '测试页面',
            initiator: {
              username: '蔡仲晨',
              avatar,
            },
            collaborators: [
              {
                username: '蔡仲晨',
                avatar,
              },
            ],
            time: Random.datetime('MM-dd'),
            type: '可视化',
          },
          {
            title: '后台首页',
            team: '炸鸡部',
            project: '肉夹馍青椒项目',
            initiator: {
              username: '蔡仲晨',
              avatar,
            },
            collaborators: [
              {
                username: '蔡仲晨',
                avatar,
              },
              { username: '只因威' },
              { username: '马德华' },
              { username: '陆地战神' },
            ],
            time: Random.datetime('MM-dd'),
            type: '视图',
            desc: '一个测试页面，用来测试低代码开发平台的正确性以及更好地展示文件',
          },
          {
            title: '岗位发布表单',
            team: '济南人才',
            project: '济南云聘小程序',
            initiator: {
              username: '薛帕德',
              avatar: avatar2,
            },
            collaborators: [
              {
                username: '蔡仲晨',
                avatar,
              },
              { username: '只因威' },
              { username: '陆地战神' },
            ],
            time: Random.datetime('MM-dd'),
            type: '事务',
          },
        ],
      })
    })
  },
})
