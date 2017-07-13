"use strict";

var VoteAnswer = React.createClass({

  displayName: 'VoteAnswer',

  propTypes: {
    count: React.PropTypes.number.isRequired,
    text: React.PropTypes.string.isRequired,
    showMode: React.PropTypes.number.isRequired,
    changed: React.PropTypes.func,
    selected: React.PropTypes.bool,
  },

  getInitialState: function() {
    return { 
      count:this.props.count,
      text:this.props.text,
      code:this.props.code,
      showMode:this.props.showMode,
      freeinput:this.props.freeinput,
      selected:this.props.selected
      };
  },

  componentWillReceiveProps: function(newProps) { 
    this.setState({ 
      count: newProps.count,
      showMode: newProps.showMode,
      selected: newProps.selected
      }); 
  },

  changed: function(EO) {
    this.props.changed(EO.target.value);
  },  

  render: function(){
    if ( this.state.showMode==1 ) {
      return React.DOM.div({className:'Answer'},
        React.DOM.span({className:'Count'},this.state.count),
        React.DOM.span({className:'Text'},this.state.text),
      );
    }
    else {
      return React.DOM.div(null,
        React.DOM.label({className:'Answer'},
          React.DOM.input({type:'radio',value:this.state.code,name:'voteanswer',defaultChecked:this.state.selected,onClick:this.changed}),
          React.DOM.span(null,this.state.text)
        ),
        this.state.freeinput
          ?React.DOM.input({type:'text',name:'votefreeinput',className:'FreeInput',disabled:!this.state.selected})
          :null
      );
    }
  },

});