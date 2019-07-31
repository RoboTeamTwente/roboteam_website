// This helper returns true if the number given is even. 
// This can be used for example using an index to alternate between two layouts

import Helper from '@ember/component/helper';

export function isEvenHelper(params) {
  return params[0] % 2 === 0;
}

export default Helper.helper(isEvenHelper);


