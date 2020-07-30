import { helper } from "@ember/component/helper";

function substring([string], { start, end }) {
  const result = string.substring(start, end);
  return result;
}

export default helper(substring);
