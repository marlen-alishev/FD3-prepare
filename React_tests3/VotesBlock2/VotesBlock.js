"use strict";

var VotesBlock = React.createClass({

  displayName: 'VotesBlock',

  propTypes: {
    info: React.PropTypes.shape({
      question:React.PropTypes.string.isRequired,
      answers:React.PropTypes.arrayOf(
        React.PropTypes.shape({
          code: React.PropTypes.number.isRequired,
          count: React.PropTypes.number.isRequired,
          text: React.PropTypes.string.isRequired,
          freeinput: React.PropTypes.bool
        })
      )
    }),
    showMode:React.PropTypes.number.isRequired
  },

  getInitialState: function() {
    return { 
      info:this.props.info, // массив вариантов ответа - код, текст, счётчик, признак свободного ввода
      showMode:this.props.showMode, // режим отображения - 1=результаты 2=голосование
      selectedAnswer:2, // код ответа, который сейчас выбран
      };
  },

  answerChanged: function(answerCode) {
    this.setState({selectedAnswer:answerCode});
  },

  registerVote: function() {
    this.state.info.answers.forEach(v=>
      { if ( v.code==this.state.selectedAnswer ) v.count++; }
    );
    this.setState({showMode:1});
  },

  render: function(){
    var answersCode=this.state.info.answers.map(v=>
      React.createElement(VoteAnswer,{key:v.code,
        count:v.count,text:v.text,freeinput:v.freeinput,code:v.code,
        selected:(v.code==this.state.selectedAnswer),
        showMode:this.state.showMode,changed:this.answerChanged})
    );
    var buttonCode=(this.state.showMode===2)
      ?React.DOM.input({type:'submit',value:'голосовать!',style:{margin:'2px 0 5px 0'},onClick:this.registerVote})
      :null;
    return React.DOM.div( {className:'VotesBlock'}, 
      React.DOM.div( {className:'Question'}, this.state.info.question ),
      React.DOM.div( {className:'Answers'}, answersCode ),
      buttonCode
    );
  },

});