/**
 * Created by sstienface on 16/10/2018.
 */


//Votre code ci dessous


var Chat = document.getElementById('cat-pic');

function Retour () {
    document.getElementById('cat-chat').innerHTML = "Miaou";
}

Chat.addEventListener("click", function () {
    Retour ();
});



