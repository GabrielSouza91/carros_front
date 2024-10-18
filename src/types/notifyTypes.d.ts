export interface initialNotifyLoadingProps {
  open: boolean;
  msg: string;
  horizontoal: 'center'| 'left'| 'right',
  vertical: 'bottom'| 'top',
  class: 'success' | 'error',
  time: number
}
