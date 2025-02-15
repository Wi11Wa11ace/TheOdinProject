const findTheOldest = function(array) {
    return array.reduce((oldestPerson, currentPerson) => {
        const oldestAge = calcAge(oldestPerson.yearOfBirth, oldestPerson.yearOfDeath);
        const currentAge = calcAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);

        return currentAge > oldestAge ? currentPerson : oldestPerson;
    });
};

function calcAge(birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
};

// Do not edit below this line
module.exports = findTheOldest;
