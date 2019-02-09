import Helper from '@ember/component/helper';
import removeMd from 'npm:remove-markdown';

export function removeMarkdown([text]) {
  return removeMd(text);
}

export default Helper.helper(removeMarkdown);
