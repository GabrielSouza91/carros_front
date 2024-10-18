export const actionTypes = {
  change: 'change_notify'
}

export const changeNotify = (value: any) => ({
  type: actionTypes.change,
  value
})