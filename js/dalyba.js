console.clear();

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
        return `Pirmas kintamasis yra netinkamo tipo.`
    }
    if (typeof b !== 'number' || !isFinite(a)) {
        return `Antras kintamasis yra netinkamo tipo.`
    }
    if (a === 0 || b === 0) {
        return `Kintamasis negali buti 0.`
    }
    const rezultatas = a / b;
    return rezultatas;
}


console.log('------------');
console.log(dalyba(8, 2));
console.log(dalyba(10, 10));
console.log(dalyba(25, 5));
console.log(dalyba(1000, 10));
console.log(dalyba(2600,2));
console.log('------------');
console.log(dalyba(21315,'lasa'));
console.log(dalyba(true, 'sdds'));
console.log(dalyba(true, 54));
console.log(dalyba(true, {}));
console.log(dalyba(true, []));
console.log(dalyba([], true ));
console.log(dalyba(564, true ));
console.log(dalyba(false, 'SFKKD'));
console.log(dalyba());
console.log(dalyba(undefined, null));
console.log(dalyba('labas', 0.5));
console.log(dalyba([], 'KKSDAF'));
console.log(dalyba([21, 45425, 23, 123, 2345], 8545));
console.log(dalyba('kebas', [-21, -45425, -23, -123, -2345]));
console.log(dalyba(['labas', 'vakaras', 'Lietuva'], Infinity));
console.log(dalyba(Infinity, 5));
console.log(dalyba(-Infinity, 1));
console.log(dalyba('sfjsldljf', NaN));
console.log(dalyba(null, 5));
console.log(dalyba(0, 'addds'));
console.log(dalyba(-15354, ));
console.log(dalyba({}));
