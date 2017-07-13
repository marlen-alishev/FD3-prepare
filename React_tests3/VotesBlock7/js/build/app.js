"use strict";

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _VotesBlock = require('./components/VotesBlock');

var _VotesBlock2 = _interopRequireDefault(_VotesBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var votesInfo = {
    question: 'Как вы относитесь к программированию?',
    answers: [{ text: 'очень хорошо', code: 1, count: 222 }, { text: 'не получается', code: 2, count: 333 }, { text: 'избегаю', code: 3, count: 111 }, { text: 'другое', code: 4, count: 444, freeinput: true }]
};

//var voteEvents=new EventEmitter();

_reactDom2.default.render(_react2.default.createElement(_VotesBlock2.default, { info: votesInfo, showMode: '2' }), document.getElementById('container2'));