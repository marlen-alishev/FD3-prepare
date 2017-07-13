"use strict";

var React = require('react');

var VoteAnswer = React.createClass({
  displayName: "VoteAnswer",


  getInitialState: function getInitialState() {
    return {
      code: this.props.code,
      count: this.props.count,
      text: this.props.text,
      showMode: this.props.showMode,
      freeinput: this.props.freeinput,
      selected: this.props.selected
    };
  },

  componentWillReceiveProps: function componentWillReceiveProps(newProps) {
    this.setState({
      count: newProps.count,
      showMode: newProps.showMode,
      selected: newProps.selected
    });
  },

  changed: function changed(EO) {
    //voteEvents.emit('AnswerChanged',EO.target.value);
  },

  render: function render() {
    return this.state.showMode == 1 ? React.createElement(
      "div",
      { className: "Answer" },
      React.createElement(
        "div",
        { className: "Count" },
        this.state.count
      ),
      React.createElement(
        "div",
        { className: "Text" },
        this.state.text
      )
    ) : React.createElement(
      "div",
      null,
      React.createElement(
        "label",
        { className: "Answer" },
        React.createElement("input", { type: "radio", value: this.state.code, name: "voteanswer", defaultChecked: this.state.selected, onClick: this.changed }),
        React.createElement(
          "span",
          null,
          this.state.text
        )
      ),
      this.state.freeinput ? React.createElement("input", { type: "text", name: "votefreeinput", className: "FreeInput", disabled: !this.state.selected }) : null
    );
  }

});

module.exports = VoteAnswer;