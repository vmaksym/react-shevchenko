import React, { Fragment } from 'react';
import { inAblative, inAccusative, inDative, inGenitive, inLocative, inNominative, inVocative } from 'shevchenko';

var inflect = function inflect(fn, _ref) {
  var gender = _ref.gender,
      children = _ref.children;

  var _children$split = children.split(' '),
      lastName = _children$split[0],
      firstName = _children$split[1],
      middleName = _children$split[2];

  var anthroponym = fn({
    gender: gender,
    firstName: firstName,
    middleName: middleName,
    lastName: lastName
  });
  return [anthroponym.lastName, anthroponym.firstName, anthroponym.middleName].join(' ');
};

var Ablative = function Ablative(props) {
  return React.createElement(Fragment, null, inflect(inAblative, props));
};

var Accusative = function Accusative(props) {
  return React.createElement(Fragment, null, inflect(inAccusative, props));
};

var Dative = function Dative(props) {
  return React.createElement(Fragment, null, inflect(inDative, props));
};

var Genitive = function Genitive(props) {
  return React.createElement(Fragment, null, inflect(inGenitive, props));
};

var Locative = function Locative(props) {
  return React.createElement(Fragment, null, inflect(inLocative, props));
};

var Nominative = function Nominative(props) {
  return React.createElement(Fragment, null, inflect(inNominative, props));
};

var Vocative = function Vocative(props) {
  return React.createElement(Fragment, null, inflect(inVocative, props));
};

export { Ablative, Accusative, Dative, Genitive, Locative, Nominative, Vocative };
//# sourceMappingURL=index.modern.js.map
