'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrapLibPageItem = require('react-bootstrap/lib/PageItem');

var _reactBootstrapLibPageItem2 = _interopRequireDefault(_reactBootstrapLibPageItem);

var _LinkMixin = require('./LinkMixin');

var _LinkMixin2 = _interopRequireDefault(_LinkMixin);

var PageItemLink = _react2['default'].createClass({
  displayName: 'PageItemLink',

  mixins: [_LinkMixin2['default']],

  render: function render() {
    return _react2['default'].createElement(
      _reactBootstrapLibPageItem2['default'],
      _extends({}, this.getLinkProps(), { ref: 'pageItem' }),
      this.props.children
    );
  }
});

exports['default'] = PageItemLink;
module.exports = exports['default'];