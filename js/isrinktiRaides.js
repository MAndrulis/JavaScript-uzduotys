console.clear ();

/*Funkcija pavadinimu “isrinktiRaides”:
priima du kintamuosius:
pirmasis nurodo tekstą, su kuriuo reikės atlikti užduotį
antrasis nurodo kas kelintą raidę išrinkti
patikrinti, ar pirmasis kintamasis yra teksto tipo:
jei ne, išvedame pranešimą “Pirmasis kintamasis yra netinkamo tipo.”
priešingu atveju tęsiame darbą
patikrinti, ar pirmasis kintamasis yra ne tuščias tekstas ir ne didesnis nei 100 simbolių:
jei ne, išvedame pranešimą “Pirmojo kintamojo reikšmė yra netinkamo dydžio.”
priešingu atveju tęsiame darbą
patikrinti, ar antrasis kintamasis yra skaičiaus tipo:
jei ne, išvedame pranešimą “Antrasis kintamasis yra netinkamo tipo.”
priešingu atveju tęsiame darbą
patikriname, ar antrojo kintamojo vertė yra didesnė už nulį:
jei ne, išvedame pranešimą “Antrasis kintamasis turi būti didesnis už nulį.”
priešingu atveju tęsiame darbą
patikriname, ar antrojo kintamojo vertė yra ne didesnė už pirmojo kintamojo ilgį:
jei ne, išvedame pranešimą “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.”
priešingu atveju tęsiame darbą
išrenkame iš nurodyto teksto kas kelintą raidę (pagal antrojo kintamojo žingsnį)
išrinktas raides sudėti į atskirą kintamąjį, kuris yra teksto tipo
gražina rezultatą
TESTAI:
console.log( isrinktiRaides( “abcdefg”, 2 ) );
rezultatas: “bdf”
console.log( isrinktiRaides( “abcdefghijkl”, 3 ) );
rezultatas: “cfil”
console.log( isrinktiRaides( “abc”, 0 ) );
rezultatas: “Antrasis kintamasis turi būti didesnis už nulį.”
console.log( isrinktiRaides( “abc”, 4 ) );
rezultatas: “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.”
console.log( isrinktiRaides( 1561, 2 ) );
rezultatas: “Pirmasis kintamasis yra netinkamo tipo.”
*/

function isrinktiRaides(a, b) {
    if (typeof a !== 'string') {
        return `Pirmasis kintamasis yra netinkamo tipo.`
    } 
    if (a.length === 0 || a.length >= 100) {
        return `Pirmojo kintamojo reikšmė yra netinkamo dydžio.`
    }
    if (typeof b !== 'number' || !isFinite(b)) {
        return `Antrasis kintomasis yra netinkamo tipo.`
    }
    if (b <= 0) {
        return `Antrasis kintamasis turi būti didesnis už nulį.`
    }
    if (b > a.length) {
        return `Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.`
    }
    const bAsString = '' + b;
    if (b.toFixed(0) !== bAsString) {
        return `Antrasis kintamasis turi būti sveikas skaicius.`
    }
    let naujasString = '';
    for (let i = 0; i < a.length; i += b) {
        naujasString += a[i];
        }
        return naujasString;

}


console.log( isrinktiRaides( 'abcdefg', 2 ) );
console.log( isrinktiRaides( 'abcdefghijkl', 3 ) );
console.log( isrinktiRaides( 'abc', 0 ) );
console.log( isrinktiRaides( 'abc', 4 ) );
console.log( isrinktiRaides( 1561, 2 ) );
console.log(isrinktiRaides(-3, Infinity));
console.log(isrinktiRaides(-Infinity, 3));
console.log(isrinktiRaides(true, 60));
console.log(isrinktiRaides(true, {}));
console.log(isrinktiRaides(true, []));
console.log(isrinktiRaides([], true ));
console.log(isrinktiRaides('kazkas', true ));
console.log(isrinktiRaides(false, 'KJGDSA'));
console.log(isrinktiRaides(isrinktiRaides, false));
console.log( isrinktiRaides( 'abc', NaN) );
console.log( isrinktiRaides( null, 4 ) );
