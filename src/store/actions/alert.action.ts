export const actionTypes = {
  change: 'change_alert'
}

export const changeAlert = (value: any) => ({
  type: actionTypes.change,
  value
})