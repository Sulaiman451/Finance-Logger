const me = {
    name: 'Shaun',
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spent', amount);
        return amount;
    }
};
console.log(me);
const greetPerson = (person) => {
    console.log('Hello', person.name);
};
greetPerson(me);
import { Invoice } from './classes/invoice.js';
const invOne = new Invoice('Mario', 'Work on the Mario website', 250);
const invTwo = new Invoice('Luigi', 'Work on the Luigi website', 300);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    console.log(inv.client, /*inv.details,*/ inv.amount, inv.format());
});
const form = document.querySelector('.new-item-form');
// console.log(form.children);
// inputs
const type = document.querySelector('#type');
const toform = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toform.value, details.value, amount.valueAsNumber);
});
