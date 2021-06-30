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
    // Called when there's incoming data on the websocket for this channel
  }
});
