import consumer from "./consumer"

document.addEventListener('turbolinks:load', () => {

  const room_element = document.getElementById('room-id');
  const room_id = room_element.getAttribute('data-room-id');

  // window.subscriptions = consumer.subscriptions
  // console.log(consumer.subscription)

  // ActionCable JavaScript library - Read more about this
  consumer.subscriptions.subscriptions.forEach((subscription) => { 
    if (JSON.parse(subscription.identifier).channel == 'RoomChannel')
      consumer.subscriptions.remove(subscription)
  })

  consumer.subscriptions.create({channel: "RoomChannel", room_id: room_id}, {
    connected() {
      console.log(`Connected to Room Channel ${room_id}`)
      // Called when the subscription is ready for use on the server
    },
  
    disconnected() {
      // Called when the subscription has been terminated by the server
    },
  
    received(data) {
  
      const user_element = document.getElementById('user-id');
      const user_id = Number(user_element.getAttribute('data-user-id'));
      if (user_id != data.message.user_id) { 
        const messageContainer = document.getElementById('messages')
        messageContainer.innerHTML = messageContainer.innerHTML + data.html
      }
    }
  });
})