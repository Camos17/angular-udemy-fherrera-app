export class Person {
    // public name: string;
    // public address: string;

    constructor( 
        public name: string, 
        private address: string
    ) { }

}

// export class Hero extends Person {

//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName: string
//     ) {
//         super( realName, 'New York' );
//     }
// }

export class Hero {

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string
    ) {
    }
}

const ironman = new Hero('Ironman', 45, 'Tony');
console.log(ironman);