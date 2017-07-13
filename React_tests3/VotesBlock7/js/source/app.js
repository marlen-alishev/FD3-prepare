"use strict";
import React from 'react';
import ReactDOM from 'react-dom';
import VotesBlock from './components/VotesBlock';

var votesInfo={
    question:'Как вы относитесь к программированию?',
    answers: [ 
    {text:'очень хорошо',code:1,count:222}, 
    {text:'не получается',code:2,count:333}, 
    {text:'избегаю',code:3,count:111},
    {text:'другое',code:4,count:444,freeinput:true},
    ],
};

//var voteEvents=new EventEmitter();

ReactDOM.render(
    <VotesBlock info={votesInfo} showMode="2" />,
    document.getElementById('container2') 
);
