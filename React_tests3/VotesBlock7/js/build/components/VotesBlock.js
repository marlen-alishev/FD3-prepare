"use strict";

var _VoteAnswer = require('./VoteAnswer');

var _VoteAnswer2 = _interopRequireDefault(_VoteAnswer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var React = require('react');


var VotesBlock = React.createClass({
  displayName: 'VotesBlock',


  getInitialState: function getInitialState() {
    return {
      info: this.props.info, // массив вариантов ответа - код, текст, счётчик, признак свободного ввода
      showMode: this.props.showMode, // режим отображения - 1=результаты 2=голосование
      selectedAnswer: 2 // код ответа, который сейчас выбран
    };
  },

  answerChanged: function answerChanged(answerCode) {
    this.setState({ selectedAnswer: answerCode });
  },

  componentDidMount: function componentDidMount() {
    //voteEvents.addListener('AnswerChanged',this.answerChanged);
  },

  componentWillUnmount: function componentWillUnmount() {
    //voteEvents.removeListener('AnswerChanged',this.answerChanged);
  },

  registerVote: function registerVote() {
    var _this = this;

    this.state.info.answers.forEach(function (v) {
      if (v.code == _this.state.selectedAnswer) v.count++;
    });
    this.setState({ showMode: 1 });
  },

  render: function render() {
    var _this2 = this;

    var answersCode = this.state.info.answers.map(function (v) {
      return React.createElement(_VoteAnswer2.default, { key: v.code,
        code: v.code, text: v.text, freeinput: v.freeinput, count: v.count,
        selected: v.code == _this2.state.selectedAnswer,
        showMode: _this2.state.showMode });
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

});

module.exports = VotesBlock;