const findTheOldest = function(people) {
    const currentYear = 2022;
    let oldest = people.sort(function(one, two) {
        if(!("yearOfDeath" in one)){
            one.yearOfDeath = currentYear;
        }

        if(!("yearOfDeath" in two)){
            two.yearOfDeath = currentYear;
        }
        const first = one.yearOfDeath - one.yearOfBirth;
        const second = two.yearOfDeath - two.yearOfBirth;
        return first > second ? -1 : 1;
    });
    console.log(oldest);
    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
