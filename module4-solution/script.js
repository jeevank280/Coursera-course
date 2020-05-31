/*
Solution of assignment 4:
Expected output:
Goodbye Jeevan
Goodbye John
Hello Yogesh
Goodbye Jason
Hello Tony
Hello Frank
Hello Larry
Hello Paula
Hello Kevin
Goodbye Jim
*/

(function() {
    var names = ["Jeevan", "John", "Yogesh", "Jason", "Tony", "Frank", "Larry", "Paula", "Kevin", "Jim"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();