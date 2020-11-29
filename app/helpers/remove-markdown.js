import Helper from '@ember/component/helper';
import removeMd from 'remove-markdown';

export function removeMarkdown([text]) {
  return removeMd(text);
}

export default Helper.helper(removeMarkdown);
