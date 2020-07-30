import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import messagesData from "../data/messages";

export default class MessagesComponent extends Component {
  @tracked message = "";
  messages = messagesData;

  @action
  addMessage(messageText) {
    this.messages.pushObject({
      username: "Satyam",
      active: true,
      isCurrentUser: true,
      status: "Typing something",
      content: `<p>${messageText}</p>`,
    });
  }
}
