function addNumbers(a: number, b: number): number {
    return a+b;
}

const addNumbersArrow = (a: number, b: number): string => (`${a+b}`);

function multiply(firstNumber: number, secondNumber?: number, base: number = 2) {
    return firstNumber * base;
}

// const result: number = addNumbers(1, 2);
// const resultArrowFunction: string = addNumbersArrow(2, 3);
// const multiplyResult = multiply(3);

// console.log({ result, resultArrowFunction, multiplyResult });

interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

const healCharacter = ( character: Character, amount: number) => {
    if (character.hp >= 100) {
        console.log('El personaje esta curado');
        return;
    }
    character.hp += amount;
};

const Strider: Character = {
    name: 'Strider',
    hp: 150,
    showHp() {
        console.log(`Puntos de vida ${this.hp}`);
    }
};

healCharacter(Strider, 15);
healCharacter(Strider, 55);
Strider.showHp();


export {};