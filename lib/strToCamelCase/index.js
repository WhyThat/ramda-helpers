import {
  pipe,
  replace,
  toLower,
  toUpper,
} from 'ramda';

/**
* Returns string in camelCase style
* @name strToCamelCase
* @param {string} str
* @returns {string}
* @example
* strToCamelCase('') //=> ''
* strToCamelCase('camelCaseString')  //=> 'camelCaseString'
* strToCamelCase('StrWithUpper')  //=> 'strWithUpper'
* strToCamelCase('str-with-dashes')  //=> 'strWithDashes'
* strToCamelCase('Iam@-random/string')  //=> 'iamRandomString'
*/
const strToCamelCase = pipe(
  replace(/^[A-Z]{1}/, toLower),
  replace(/\W+(\w{1})/g, (_all, letter) => toUpper(letter)));
export default strToCamelCase;
