

// Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis
// Po kiekvieno jų inicijavimo, išvesti į console
// Sukurti 3 kintamuosius su teksto tipo reikšmėmis
// Po kiekvieno jų inicijavimo, išvesti į console
// Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis
// Po kiekvieno jų inicijavimo, išvesti į console
// Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis
// Po kiekvieno jų inicijavimo, išvesti į console

// 1
const a = 6;
const b = 7;
const c = 8;
console.log(a, b, c);

// 2

const zodis1 = 'Audi';
const zodis2 = 'Juoda';
const zodis3 = 'Kava';
console.log(zodis1);
console.log(zodis2);
console.log(zodis3);

// 3

const skaiciai = [1, 2, 3, 4, 5];
const skaiciai1= [10, 11, 12, 13, 14];
const skaiciai2 = [21, 22, 23, 24, 25];

console.log(skaiciai,skaiciai1, skaiciai2,);

// 4

const zodziai1 = ['Jonas', 'Antanas', 'Ona', 'Maryte', 'Algis'];
const zodziai2 = ['Spurga', 'Duona', 'Batonas', 'Bandelė', 'Kibinas'];
const zodziai3 = ['Agrastas', 'Braskes', 'Serbentai', 'Melynes', 'Avietes'];

console.log(zodziai1);
console.log(zodziai2);
console.log(zodziai3);

console.clear();

// Susumuoti visus skaičiaus tipo kintamuosius
// Rezultatą išvesti į console
// Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas
// Rezultatą išvesti į console
// Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką
// 1-2+3-4+5
// Rezultatą išvesti į console
// Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios 
// taip, jog tarp jų būtų kablelis ir tarpas

// 5

const s = a + b + c;

console.log(s);

// 6 

const sujungti = `${zodis1} ${zodis2} ${zodis3}`;

console.log(sujungti);

//7

const skaiciai11 = [1, 2, 3, 4, 5];
const skaiciai22 = [10, 11, 12, 13, 14];
const skaiciai33 = [21, 22, 23, 24, 25];

const apskaiciuoti = skaiciai11[0] - skaiciai11[1] + skaiciai11[2] - skaiciai11[3] + skaiciai11[4];
const apskaiciuoti1 = skaiciai22[0] - skaiciai22[1] + skaiciai22[2] - skaiciai22[3] + skaiciai22[4];
const apskaiciuoti2 = skaiciai33[0] - skaiciai33[1] + skaiciai33[2] - skaiciai33[3] + skaiciai33[4];

console.log(apskaiciuoti);
console.log(apskaiciuoti1);
console.log(apskaiciuoti2);

//8

const zodziai11 = ['Jonas', 'Antanas', 'Ona', 'Maryte', 'Algis'];
const zodziai22 = ['Spurga', 'Duona', 'Batonas', 'Bandelė', 'Kibinas'];
const zodziai33 = ['Agrastas', 'Braskes', 'Serbentai', 'Melynes', 'Avietes'];

const jungtis = `${zodziai11[4]}, ${zodziai11[3]}, ${zodziai11[2]}, ${zodziai11[1]}, ${zodziai11[0]}.`;

console.log(jungtis);



// Funkcija pavadinimu “tusciaFunkcija”:
// nepriima jokių kintamųjų
// neatlieka jokios vidinės logikos
// gražina boolean tipo reikšmę “false”
// TESTAS:
// console.log( tusciaFunkcija() );
// rezultatas: false
// 9

console.clear();

function empty(){
    return ;
}

console.log(empty());

function empty1(){
    return false;
}

console.log(empty1());

// Funkcija pavadinimu “daugyba”:
// priima du skaičiaus tipo kintamuosius
// atskirame kintamajame įsimena sandaugos reikšmę
// gražina sandaugos rezultatą
// TESTAI:
// console.log( daugyba( skaicius1, skaicius2 ) );
// console.log( daugyba( skaicius3, skaicius2 ) );
// console.log( daugyba( skaicius1, skaicius3 ) );
// rezultatas: teisingos reikšmės;

// 10

console.clear();

function daugyba(skaicius1, skaicius2, ) {
    return  skaicius1 * skaicius2 ;
}

const skaicius1 = 5;
const skaicius2 = 7;
const skaicius3 = 9;

console.log( daugyba( skaicius1, skaicius2 ) );
console.log( daugyba( skaicius3, skaicius2 ) );
console.log( daugyba( skaicius1, skaicius3 ) );



