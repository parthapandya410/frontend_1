// var,let,const

let name='parth';
let age;
age = 25
/*const age = 30;
age = 25
console.log(age);*/

console.log(age);
console.log('my name is '+ name + ' and i am ' + age);
console.log(`my name is ${name} and i am ${age}`);

const s = 'hello world'
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.substring(1,5));
console.log(s.split(''));

const tags = 'technology, it, computer, AI, ML'
console.log(tags.split(', '));

//ARRAYS

const numbers = new Array(1,2,5);
console.log(numbers);

const fruites = ['apples', 'oranges' , '50', 'chickoo', 'mango']
console.log(fruites[1]);
fruites.push('coconut');
fruites.unshift('strewbary');
console.log(fruites);

const full_name = {
    firstname : 'Parth',
    lastname : 'Pandya',
    Familyname : 'Brahmin',
    age : 22,
    interest : ['Philosophy', 'Astrology', 'History'],
    add : {
        street : 'B',
        home : 81,
        landmark : 'Gajera circle'
    }
}
full_name.email = 'parthpandya410@gmail.com'
console.log(full_name);
console.log(full_name.add.landmark);

const Todos = [
    {
        id : 1,
        text : 'Do datascience',
        iscomplete : true
    },
    {
        id : 2,
        text : 'Do Nodejs',
        iscomplete : false
    },
    {
        id : 3,
        text : 'Do GATE',
        iscomplete : false
    }
]

for(let todo of Todos){
    console.log(todo.text)
}

Todos.forEach(function(todo){
    console.log(todo.id)
})

const todo_map = Todos.map(function(todo){
        return todo.text[3];
})

console.log(todo_map);

const todo_filter = Todos.filter(function(todo){
    return todo.iscomplete === false;
}).map(function(todo){
    return todo.text;
})

console.log(todo_filter);

const x= '10'

if(x == 10){
    console.log('x is 10')
}

if(x === 10){
    console.log('x is 10 with dt')
}
else{
    console.log('x is not 10 with dt')
}

function addnums(num1,num2){
    console.log(num1 + num2)
}

addnums(5,6);

//Arrow Function

const addno = (num1,num2) => num1 + num2;

console.log(addno(5,5));

Todos.forEach((todo) => console.log(todo.id)) 

//Object oriented programming

//constructor function

function Person(firstname,lastname,Dob){
    this.firstname = firstname
    this.lastname = lastname
    this.Dob = Dob
}
//instantiate object

const person1 = new Person('Parth','Pandya','24-05-1999')

console.log(person1.firstname)


