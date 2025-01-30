export interface Product {
    description: string;
    price: number;
}

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}


const phone: Product = {
    description: 'Nokia A1',
    price: 150.0
}

const tablet: Product = {
    description: 'Ipad Air',
    price: 250.0
}


// function taxCalculation( options: TaxCalculationOptions ): [number, number] {
// function taxCalculation( { tax, products }: TaxCalculationOptions ): [number, number] {
export function taxCalculation( options: TaxCalculationOptions ): [number, number] {

    const { tax, products } = options;

    let total = 0;
    
    products.forEach( ({ price }) => {
        // const { price } = product;
        total += price;
    });
    
    return [total, total * tax];
}


const shoppingCart = [phone, tablet];
export const tax = 0.15;

const options = {tax: tax, products: shoppingCart};

const results = taxCalculation(options);
const [total, totalTax] = results;

console.log('Total value ', total);
console.log('Total tax ', totalTax);


export {};
