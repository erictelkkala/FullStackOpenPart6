import { useSelector } from 'react-redux'

const Notification = () => {
  const notification = useSelector((state) => state.notification)
  console.log('Notification: ', notification)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
  }
  // Only show the notification if the message if not empty
  if (notification.message === '' || notification.message === null) {
    return null
  }
  return <div style={style}>{notification.message}</div>
}

export default Notification
