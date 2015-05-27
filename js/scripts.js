var vowels = /[aieou]/;

var pigLatin = function(word) {

  var wordArray = word.split("");
  var final = "";
  if (vowels.test(wordArray[0])) {
    wordArray.push("a", "y");
    final = wordArray.join("");
  } else {
    wordArray = word.split("");
    var RegLast = /[aeiou]\D+/;
    var last = RegLast.exec(word)[0];
    var boom = wordArray.reverse().slice(-(wordArray.length - last.length)).reverse().join("");
    final = last + boom + "ay";
  }
  return final;
};
