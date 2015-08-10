'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrapLibThumbnail = require('react-bootstrap/lib/Thumbnail');

var _reactBootstrapLibThumbnail2 = _interopRequireDefault(_reactBootstrapLibThumbnail);

var _LinkMixin = require('./LinkMixin');

var _LinkMixin2 = _interopRequireDefault(_LinkMixin);

var ThumbnailLink = _react2['default'].createClass({
  displayName: 'ThumbnailLink',

  mixins: [_LinkMixin2['default']],

  render: function render() {
    return _react2['default'].createElement(
      _reactBootstrapLibThumbnail2['default'],
      _extends({}, this.getLinkProps(), { ref: 'thumbnail' }),
      this.props.children
    );
  }
});

exports['default'] = ThumbnailLink;
module.exports = exports['default'];