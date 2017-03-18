import {
  pipe,
  replace,
  toLower,
  toUpper,
} from 'ramda';

/**
* Returns string in camelCase style
* @name strToCamelCase
* @memberof RamdaHelper#
* @param {string} str
* @returns {string}
* @example
*
* strToCamelCase('') //=> ''
* strToCamelCase('camelCaseString')  //=> 'camelCaseString'
* strToCamelCase('StrWithUpper')  //=> 'strWithUpper'
* strToCamelCase('str-with-dashes')  //=> 'strWithDashes'
* strToCamelCase('Iam@-random/string')  //=> 'iamRandomString'
*/
export default pipe(
  replace(/^[A-Z]{1}/, toLower),
  replace(/\W+(\w{1})/g, (_all, letter) => toUpper(letter)));
