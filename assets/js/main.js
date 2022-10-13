
// creo array

const toBuy = [
    'spaghetti',
    'guanciale',
    'uova',
    'pecorino',
    'pepe'
]

// ciclo l'array così da stamparlo a dentro la UL

let i = 0;
while (i < toBuy.length){
    let list = toBuy[i];
    console.log(list);

    const ulElement = document.getElementById('ul-list');
    ulElement.innerHTML += `<li>${list}</li>`;

    i++;
}