function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var shevchenko = require('shevchenko');

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
  return React__default.createElement(React.Fragment, null, inflect(shevchenko.inNominative, props));
};

exports.Nominative = Nominative;
//# sourceMappingURL=index.js.map
