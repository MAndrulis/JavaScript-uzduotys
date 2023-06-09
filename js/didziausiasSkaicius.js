console.clear();
/*Funkcija pavadinimu “didziausiasSkaiciusSarase”:
priima vieną kintamąjį
jei perduotas kintamasis nėra sąrašo tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
jei sąrašas yra tuščias, tai išveda pranešimą “Pateiktas sąrašas negali būti tuščias.”
priešingu atveju, funkcija tęsia darbą
pereina per visą pateiktą sąrašą ir į atskirą kintamąjį įsimena skaičių, kuris tuo metu yra didžiausias
gražina didžiausią surastą skaičių
TESTAI:
console.log( didziausiasSkaiciusSarase( [ 1 ] ) );
rezultatas: 1
console.log( didziausiasSkaiciusSarase( [ 1, 2, 3 ] ) );
rezultatas: 3
console.log( didziausiasSkaiciusSarase( [ -5, 78, 14, 0, 18 ] ) );
rezultatas: 78
console.log( didziausiasSkaiciusSarase( [ 69, 69, 69, 69, 66 ] ) );
rezultatas: 69
console.log( didziausiasSkaiciusSarase( [ -1, -2, -3, -4, -5, -6, -7, -8 ] ) );
rezultatas: -1
console.log( didziausiasSkaiciusSarase( “pomidoras” ) );
rezultatas: “Pateikta netinkamo tipo reikšmė.”
console.log( didziausiasSkaiciusSarase( [] ) );
rezultatas: “Pateiktas sąrašas negali būti tuščias.”*/

function didziausiasSkaiciusSarase(list) {
    if (!Array.isArray(list)) {
      return 'Pateikta netinkamo tipo reikšmė.';
    }
    if (list.length === 0) {
        return 'Pateiktas sąrašas negali būti tuščias'
    }
  
  let max = -Infinity;

    for (let i = 0; i < list.length; i++) {
        const item = list[i];
         if (typeof item !== 'number' || !isFinite(item)) {
         continue;
        }

         if (item > max) {
         max = item;
        }
    }
    return max;
}

  
console.log( didziausiasSkaiciusSarase( [ 1 ] ) , '->', 1 );
console.log( didziausiasSkaiciusSarase( [ 1, 2, 3 ] ), '->', 3 );
console.log( didziausiasSkaiciusSarase( [ -5, 78, 14, 0, 18 ] ), '->', 78 );
console.log( didziausiasSkaiciusSarase( [ 69, 69, 69, 69, 66 ] ), '->', 69 );
console.log( didziausiasSkaiciusSarase( [ -1, -2, -3, -4, -5, -6, -7, -8 ] ), '->', -1 );
console.log( didziausiasSkaiciusSarase( "pomidoras"), '->', 'Pateikta netinkamo tipo reikšmė.' );
console.log( didziausiasSkaiciusSarase( [] ), '->', 'Pateiktas sąrašas negali būti tuščias.'  );
