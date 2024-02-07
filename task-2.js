function checkName(name) {
    if (typeof name !== 'string') {
        return "Invalid"
    }
    else {
        let newName = [];
        for (const string of name) {
            const lowerString = string.toLowerCase();
            newName.unshift(lowerString);
        }
        if (newName[0] === 'a' || newName[0] === 'e' || newName[0] === 'i' || newName[0] === 'o' || newName[0] === 'u' || newName[0] === 'y' || newName[0] === 'w') {
            return "Good Name";
        }
        else {
            return "Bad Name";
        }
    }
}

const res = checkName(["Rashed"]);

console.log(res)