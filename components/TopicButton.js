// create a custom LitElement called TopicButton
// it has to render a button with the topic name and attach a click handler
class TopicButton extends LitElement {
  render() {
    return html`
      <button @click=${this.filterByTopic(this.topic)}>${this.topic}</button>
    `
  }

  static properties = {
    topic: { type: String }
  }

  filterByTopic(topic) {
    return () => {