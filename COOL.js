/*
FILE NAME: COOL.js
WRITTEN BY: ROSANNE  HUHUHUHUHUHU
DATE: today is probably like the may of like 26 fam
PURPOSE: There is no purpose in life
*/

$(document).ready(function(){
    MAkeTHisMofofly();

});

function MOVINGMYLIFEAROUND(){
    var height = $(window).height()-50;
    var width = $(window).width()-50;

    var newheight = Math.floor(Math.random() * height);
    var newwidth = Math.floor(Math.random() * width);

    return [newheight,newwidth];
}

function MAkeTHisMofofly(){
    var NEWYeaR = MOVINGMYLIFEAROUND();
    $('#clickme').animate({ top: NEWYeaR[0], left: NEWYeaR[1] },function(){
      MAkeTHisMofofly();
    });
};
