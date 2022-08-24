import { connect } from 'react-redux'

const Notification = (props) => {
  // Get the notification message from the props
  const notification = props.notification
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

const mapStateToProps = (state) => {
  return {
    notification: state.notification,
  }
}

// Connect the state to the props and export the connected component
const ConnectedNotification = connect(mapStateToProps)(Notification)

export default ConnectedNotification
