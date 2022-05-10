// 1 

/* let obj = {
    name: "Danik",
    age: 21,
    from: "Mogilev",
}
*/


// 2 
/* 
let obj = {
    name: "Danik",
    age: 21,
    from: "Mogilev",
}
obj.isMarried = false;
obj.height = 187;

console.log(obj); */


// 3 
/* let a = 5;
let b = 10;

let obj = {
    name: "Danik",
    age: 21,
    from: "Mogilev",
}
obj.isMarried = false;
obj.height = 187;

obj.sayHi = function () { 
    return `Hello ${this.name}`;
};

obj.sum = () => a + b;
console.log(obj.sayHi());
console.log(obj.sum()); */

// 4 

/* let a = 5;
let b = 10;

let obj = {
    name: "Danik",
    age: 21,
    from: "Mogilev",
    outputObj: function () {
        for (let item in obj) {
            console.log(item + ": " + obj[item]);
        }
    }
}
obj.isMarried = false;
obj.height = 187;

obj.sayHi = function () { 
    return `Hello ${this.name}`;
};

obj.sum = () => a+b;

obj.outputObj();
 */


// 5 

/* function searchObj (object) {
    let result;
    for (let item in object) {
        if (typeof object[item] !== 'object') {
            result = false
        } else {
            result = true 
        }
    }
    return result
}

let obj = {
    name: "Danik",
    age: 21,
    from: "Mogilev",
    obj2: {
        
    }
}

console.log(searchObj(obj)); */