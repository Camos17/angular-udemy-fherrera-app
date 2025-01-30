
import { Product, tax, taxCalculation } from './06-function-destructuring';

const shoppingCart: Product[] = [
    {
        description: 'Nokia',
        price: 100
    },
    {
        description: 'iPad',
        price: 150
    }
];

const [total, taxTotal] = taxCalculation({tax: tax, products: shoppingCart});

console.log('Total (export)', total);
console.log('Tax (export)', taxTotal);
