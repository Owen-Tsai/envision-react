import { getMenu } from '@/api/menu'

const menuLoader = async () => {
  const { menu } = (await getMenu()).data
  return { menu }
}

export default menuLoader
