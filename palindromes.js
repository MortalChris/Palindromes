const palindromes = function (s) {
    s = s.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase().split(" ").join("");; 
    reversedString = s.split("").reverse().join("");
        if(s == reversedString){
            console.log(s + " " + "is true");
            return true;
        }else {
            console.log(s + " " + "is false");
            return false;
            };
};
palindromes("racecar");
palindromes("racecar!");
palindromes("Racecar!");
palindromes("A car, a man, a maraca.");
palindromes("Animal loots foliated detail of stool lamina.");
palindromes("ZZZ car, a man, a maracaz.");
// Do not edit below this line
module.exports = palindromes;
