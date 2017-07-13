"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var EventEmitter = require('events').EventEmitter;

var VoteAnswer = require('./VoteAnswer');
var voteEvents = require('../VoteEvents');

var VotesBlock = function (_React$Component) {
  _inherits(VotesBlock, _React$Component);

  function VotesBlock(props) {
    _classCallCheck(this, VotesBlock);

    var _this = _possibleConstructorReturn(this, (VotesBlock.__proto__ || Object.getPrototypeOf(VotesBlock)).call(this, props));

    _this.state = {
      info: _this.props.info, // массив вариантов ответа - код, текст, счётчик, признак свободного ввода
      showMode: _this.props.showMode, // режим отображения - 1=результаты 2=голосование
      selectedAnswer: 2 // код ответа, который сейчас выбран
    };
    return _this;
  }

  _createClass(VotesBlock, [{
    key: 'answerChanged',
    value: function answerChanged(answerCode) {
      this.setState({ selectedAnswer: answerCode });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      voteEvents.addListener('AnswerChanged', this.answerChanged.bind(this));
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      voteEvents.removeListener('AnswerChanged', this.answerChanged.bind(this));
    }
  }, {
    key: 'registerVote',
    value: function registerVote() {
      var _this2 = this;

      this.state.info.answers.forEach(function (v) {
        if (v.code == _this2.state.selectedAnswer) v.count++;
      });
      this.setState({ showMode: 1 });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var answersCode = this.state.info.answers.map(function (v) {
        return React.createElement(VoteAnswer, { key: v.code,
          code: v.code, text: v.text, freeinput: v.freeinput, count: v.count,
          selected: v.code == _this3.state.selectedAnswer,
          showMode: _this3.state.showMode });
      });
      var buttonCode = this.state.showMode == 2 ? React.createElement('input', { type: 'submit', value: '\u0433\u043E\u043B\u043E\u0441\u043E\u0432\u0430\u0442\u044C!', style: { margin: '2px 0 5px 0' }, onClick: this.registerVote }) : null;
      return React.createElement(
        'div',
        { className: 'VotesBlock' },
        React.createElement(
          'div',
          { className: 'Question' },
          this.state.info.question
        ),
        React.createElement(
          'div',
          { className: 'Answers' },
          answersCode
        ),
        buttonCode
      );
    }
  }]);

  return VotesBlock;
}(React.Component);

module.exports = VotesBlock;