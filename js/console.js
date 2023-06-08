
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


// Ciklo for panaudojimas

/*Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):
0 … 0
0 … 4
0 … 100
574 … 815
-50 … 50
-70 … 30*/

let start = 574;
let end = 815;

let intervale = 0;

for (let i = 0; i <= end; i++) {
    intervale += 1;    
}

console.log(intervale);


/*Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai:
0 - 11
8 - 31
-18 - 18
rezultatą pateikti tokiu formatu:
Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.
Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra 3 vienetai.
Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra 2 vienetai.
*/

let start1 = 0;
let end1 = 11;

let skaicius = 7;
let beLiekanos = 0;

let intervalas = (start1, end, skaicius) => {
     for(let i = start; i <= end; i++){
         if(i % skaicius === 0){
             beLiekanos++;
            }
        } return `Skaičių intervale tarp ${start1} ir ${end1}, besidalijančių be liekanos iš ${skaicius} yra ${beLiekanos} vienetai.`;
    }
 console.log(intervalas(start1, end1, skaicius));


console.clear();

/* panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:
pvz.: “abcdef” -> “fedcba”*/


 let text = 'abcdef';

 let back = (text) => {
  let arejus = text.split('');
 let naujasTekstas = '';

 for (let i = arejus.length - 1; i >= 0; i--){
     naujasTekstas += arejus[i];
    }
     return naujasTekstas;
}

 console.log(back(text));

//priima du skaičiaus tipo kintamuosius
//atskirame kintamajame įsimena sandaugos reikšmę
//gražina saudaugos rezultatą

/*TESTAI:
console.log( daugyba( skaicius1, skaicius2 ) );
console.log( daugyba( skaicius3, skaicius2 ) );
console.log( daugyba( skaicius1, skaicius3 ) );
rezultatas: teisingos reikšmės;*/

function daugyba(skaicius1, skaicius2, ) {
    return  skaicius1 * skaicius2 ;
  }
  
  const skaicius1 = 5;
  const skaicius2 = 7;
  const skaicius3 = 8;
  
  console.log( daugyba( skaicius1, skaicius2 ) );
  console.log( daugyba( skaicius3, skaicius2 ) );
  console.log( daugyba( skaicius1, skaicius3 ) );
  console.log('-----------------------');
  //Funkcija pavadinimu “skaitmenuKiekisSkaiciuje”:
  //priima vieną kintamąjį
  //jei perduotas kintamasis nėra skaičiaus tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
  //priešingu atveju, funkcija tęsia darbą
  //į atskirą kintamąjį įsimena skaičių sudarančių skaitmenų kiekį
  //gražina skaitmenų kiekį
  /*console.log( skaitmenuKiekisSkaiciuje( 5 ) );
  rezultatas: 1
  console.log( skaitmenuKiekisSkaiciuje( 781 ) );
  rezultatas: 3
  console.log( skaitmenuKiekisSkaiciuje( 37060123456 ) );
  rezultatas: 11
  console.log( skaitmenuKiekisSkaiciuje( true ) ); */
  
  
  function skaitmenuKiekisSkaiciuje(a) {
    if (typeof a !== 10) {
      return 'Pateikta netinkamo tipo reikšmė.';
    }
  }
  
  const a = 10;
  
   console.log(skaitmenuKiekisSkaiciuje(5));
   console.log( skaitmenuKiekisSkaiciuje( 781 ) );
   console.log( skaitmenuKiekisSkaiciuje( 37060123456 ) );
   console.log( skaitmenuKiekisSkaiciuje( true ) ); 
  
  
  
   /* 6. Funkcija pavadinimu “dalyba”:
  turi priimti du kintamuosius
  reikia sugalvoti ir įgyvendinti kuo daugiau logiškų patikrinimų, kurie padėtų apsaugoti funkciją nuo neteisingo panaudojimo
  esant blogoms sąlygoms, išvesti atitinkamą pranešimą
  esant geroms - tęsti darbą
  į atskirą kintamąjį išsaugoti apskaičiuotą dviejų skaičių dalybos reikšmę
  daliname pirmąjį skaičių iš antrojo
  grąžinti suskaičiuotą reikšmę
  TESTAI:
  sugalvoti bent 5 testus, kurie bendrai iš esmės patvirtintu gerą funkcijos veikimą*/
  
  function dalyba(a, b) {
    if (typeof a !== 'number' || !isFinite(a)) {
        return 'ERROR: pirmas parametras privalo buti normalus skaicius.';
    }
  
    if (typeof b !== 'number' || !isFinite(b)) {
        return 'ERROR: antras parametras privalo buti normalus skaicius.';
    }
  
    const rez = a / b;
    return rez;
  }
  
  console.log('##################');
  console.log(dalyba(63, 9));
  console.log(dalyba(`labas`, 5));
  console.log(dalyba(true, 11));
  console.log(dalyba(47, NaN));
  console.log(dalyba(-15, true));
  console.log(dalyba(64, 8));


