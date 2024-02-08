function password(object) {
    const objectKeys = Object.keys(object);

    let birthYear1 = (object.birthYear);
    let strBirthYear = birthYear1.toString();

    if (objectKeys.length !== 3 || strBirthYear.length !== 4) {
        return "invalid";
    }
    else {
        const password = object.siteName + "#" + object.name + "@" + object.birthYear;
        return password;
    }
}

const res = password({ name: "maisha", siteName: "Linkedin", birthYear: 2002 });

console.log(res);