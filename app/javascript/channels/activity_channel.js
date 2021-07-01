import consumer from "./consumer"

consumer.subscriptions.create("ActivityChannel", {
  connected() {
    console.log(`Connected to the activity channel`)
    // Called when the subscription is ready for use on the server
    this.perform("appear")  
  },
  
  disconnected() {
    // Called when the subscription has been terminated by the server
  },
  
  received(data) {
    console.log(data.message)
    let elements = document.getElementsByClassName(`user-${data.user_id}-status`);
    window.elements = elements
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.add('online')
    }

    // Called when there's incoming data on the websocket for this channel
  }
});
