import { Dayjs, ManipulateType } from 'dayjs'

// eslint-disable-next-line import/prefer-default-export
export const dateRange = (
  start: Dayjs,
  end: Dayjs,
  unit: ManipulateType = 'day',
) => {
  const range = []
  let current = start
  while (!current.isAfter(end)) {
    range.push(current)
    current = current.add(1, unit)
  }
  return range
}
