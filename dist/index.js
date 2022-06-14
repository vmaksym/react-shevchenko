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

var Ablative = function Ablative(props) {
  return React__default.createElement(React.Fragment, null, inflect(shevchenko.inAblative, props));
};

var Accusative = function Accusative(props) {
  return React__default.createElement(React.Fragment, null, inflect(shevchenko.inAccusative, props));
};

var Dative = function Dative(props) {
  return React__default.createElement(React.Fragment, null, inflect(shevchenko.inDative, props));
};

var Genitive = function Genitive(props) {
  return React__default.createElement(React.Fragment, null, inflect(shevchenko.inGenitive, props));
};

var Locative = function Locative(props) {
  return React__default.createElement(React.Fragment, null, inflect(shevchenko.inLocative, props));
};

var Nominative = function Nominative(props) {
  return React__default.createElement(React.Fragment, null, inflect(shevchenko.inNominative, props));
};

var Vocative = function Vocative(props) {
  return React__default.createElement(React.Fragment, null, inflect(shevchenko.inVocative, props));
};

exports.Ablative = Ablative;
exports.Accusative = Accusative;
exports.Dative = Dative;
exports.Genitive = Genitive;
exports.Locative = Locative;
exports.Nominative = Nominative;
exports.Vocative = Vocative;
//# sourceMappingURL=index.js.map
