import Helper from '@ember/component/helper';

export function isEvenHelper(params) {
  return params[0] % 2 === 0;
}

export default Helper.helper(isEvenHelper);


