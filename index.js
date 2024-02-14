//N1
let array = [5, 25, 89, 120, 3];

array.push('javascript', 'pyton');

array.unshift('html', 'css');

array.shift();

array.pop()

console.log(array);

console.log(array.length);

console.log('');


//N2
let xili = ['ფორთოხალი', 'ბანანი', 'მსხალი'];

console.log(xili.length);

xili.push('ვაშლი', 'ანანასი');

xili.unshift('საზამთრო');

console.log(xili.length);

xili.splice(2, 0, 'მანგო');

xili.shift()

xili.pop();

console.log(xili);

console.log(xili.length);

console.log('');


//N3
let arr2 = [1, 2, 3, 4, 5];

let splice = ['a', 'b', 'c'];

arr2.splice(3, 0, 'a', 'b', 'c');

console.log(arr2);

console.log('');


//N4
let array4 = [1, 2, 3, 4, 5];

let sum = 0;

array4.forEach((element) => {
    sum += element
});

console.log(sum);

console.log('');


//N5
let arr5 = [2, 15, 10, 24];

let remove = arr5.length / 2;

arr5.splice(remove, 1)

console.log(arr5);

console.log('');


//N6
let arr6 = [12, 25, 3, 6, 8, 14, 7, 23];

let err = arr6.map((number) => {
    return number / 3;
});

console.log(err);

console.log('');


//N7
let languages = ['html', 'css', 'javascript', 'python', 'php'];

let language = languages.filter((Symbol) => {
    return Symbol.length > 3;
});

console.log(language);

console.log('');


//N8
let mrmb = ['madrid', 'rome', 'milan', 'berlin'];

let mrmbs = mrmb.filter((element) => {
    return element.includes('n' && 'm');
});

console.log(mrmbs);

console.log('');


//N9
let array1 = [1, 2];
let array2 = [3, 4];
let array3 = [5, 6];

let concat = array1.concat(array2, array3);

console.log(concat);

console.log('');


//N10
let array10 = [-1, -2, -3, 4];

let positive = array10.some((nUm) => {
    return sum > 0;
});

console.log(positive);

console.log('');


//N11
let array11 = [23, 45, 32, 5, 87, 7, 3, 98];

let sort = array11.sort((a, b) => {
    return b - a
})

console.log(sort);


