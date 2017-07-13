"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var EventEmitter = require('events').EventEmitter;

var voteEvents = require('../VoteEvents');

var VoteAnswer = function (_React$Component) {
  _inherits(VoteAnswer, _React$Component);

  function VoteAnswer(props) {
    _classCallCheck(this, VoteAnswer);

    var _this = _possibleConstructorReturn(this, (VoteAnswer.__proto__ || Object.getPrototypeOf(VoteAnswer)).call(this, props));

    _this.state = {
      code: _this.props.code,
      count: _this.props.count,
      text: _this.props.text,
      showMode: _this.props.showMode,
      freeinput: _this.props.freeinput,
      selected: _this.props.selected
    };
    return _this;
  }

  _createClass(VoteAnswer, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      this.setState({
        count: newProps.count,
        showMode: newProps.showMode,
        selected: newProps.selected
      });
    }
  }, {
    key: 'changed',
    value: function changed(EO) {
      voteEvents.emit('AnswerChanged', EO.target.value);
    }
  }, {
    key: 'render',
    value: function render() {
      return this.state.showMode == 1 ? React.createElement(
        'div',
        { className: 'Answer' },
        React.createElement(
          'div',
          { className: 'Count' },
          this.state.count
        ),
        React.createElement(
          'div',
          { className: 'Text' },
          this.state.text
        )
      ) : React.createElement(
        'div',
        null,
        React.createElement(
          'label',
          { className: 'Answer' },
          React.createElement('input', { type: 'radio', value: this.state.code, name: 'voteanswer', defaultChecked: this.state.selected, onClick: this.changed }),
          React.createElement(
            'span',
            null,
            this.state.text
          )
        ),
        this.state.freeinput ? React.createElement('input', { type: 'text', name: 'votefreeinput', className: 'FreeInput', disabled: !this.state.selected }) : null
      );
    }
  }]);

  return VoteAnswer;
}(React.Component);

module.exports = VoteAnswer;