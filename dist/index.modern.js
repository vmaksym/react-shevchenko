import React, { Fragment } from 'react';
import { inNominative } from 'shevchenko';

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

var Nominative = function Nominative(props) {
  return React.createElement(Fragment, null, inflect(inNominative, props));
};

export { Nominative };
//# sourceMappingURL=index.modern.js.map
