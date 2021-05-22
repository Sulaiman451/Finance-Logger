// classes
class Invoice {
  // client: string;
  // details: string;
  // amount: number;

  constructor(
    readonly client: string,
    private details: string,
    public amount: number,
  ){}

  format() {
    return `${this.client} owes £${this.amount} for ${this.details}`
  }
}

const invOne = new Invoice('Mario', 'Work on the Mario website', 250);
const invTwo = new Invoice('Luigi', 'Work on the Luigi website', 300);

let invoices: Invoice[] = [];
invoices.push(invOne)
invoices.push(invTwo);

invoices.forEach(inv => {
  console.log(inv.client, /*inv.details,*/ inv.amount, inv.format());
})

const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toform = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  console.log(
    type.value,
    toform.value,
    details.value,
    amount.valueAsNumber
  );
});