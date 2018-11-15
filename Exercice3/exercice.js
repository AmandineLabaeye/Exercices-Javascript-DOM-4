/**
 * Created by sstienface on 16/10/2018.
 */



var libButton = document.getElementById('lib-button');
var libIt = function() {

    var noun = document.getElementById('noun').value;

    var adjective = document.getElementById('adjective').value;

    var person = document.getElementById('person').value;

    var storyDiv = document.getElementById("story");

    storyDiv.innerHTML = noun + " " + adjective + " " + person;

};
libButton.addEventListener('click', libIt);






