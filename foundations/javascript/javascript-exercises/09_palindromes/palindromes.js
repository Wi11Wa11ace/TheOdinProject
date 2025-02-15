const palindromes = function (word) {
    const lowerCaseWord = word.toLowerCase();
    const wordWithoutPunctuation = lowerCaseWord.replace(/[^a-z0-9]/g, "");

    const wordBackwards = wordWithoutPunctuation.split("").reverse().join("");

    return wordBackwards == wordWithoutPunctuation;
};

// Do not edit below this line
module.exports = palindromes;
