

export const actionTypes = {
  change: 'change_loading'
}

export const changeLoading = (value: any) => ({
  type: actionTypes.change,
  value
})