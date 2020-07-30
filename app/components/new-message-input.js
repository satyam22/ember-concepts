import Component from "@glimmer/component";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";

class NewMessageComponent extends Component {
  @tracked message;

  @action
  createMessage(event) {
    event.preventDefault();
    if (this.message && this.args.onCreate) {
      this.args.onCreate(this.message);
      this.message = "";
    }
  }
}

export default NewMessageComponent;
