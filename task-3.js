function deleteInvalids(array) {
    let newArray = [];
    if (Array.isArray(array) === true) {
        for (const arr of array) {
            if (typeof arr === 'number' && !isNaN(arr)) {
                newArray.push(arr);
            }
        }
        return newArray;
    }
    else {
        return "Please provide an array";

    }
}

const arr = [NaN, 1, 12, 0, -1, undefined, 'Faiza', 44];
const arr2 = [1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }];

const arr3 = [1, 2, -3];
const arr4 = { num: [1, 2, 3] };
const arr5 = 'Abrar';
const res = deleteInvalids(arr5);
console.log(res)