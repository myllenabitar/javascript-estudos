
/*document.body.innerText='Hello World!';


//nulish coalescing operator

const idade = 0;


document.body.innerText = 'sua idade é: ' + (idade || 'Idade não informada');  // Idade não informada {0, false, null, undefined, NaN, '' são considerados falsy}
document.body.innerText = 'sua idade é: ' + (idade ?? 'Idade não informada');  // Idade: 0 {numll, undefined são considerados falsy}


//Objetos

const userInfo = {
  name:'Gustavo',
  age:'27',
  address: {
    street: 'Rua 1',
    number:'123', 
  }

}

document.body.innerText = ('name' in userInfo); //true  // verifica se a propriedade existe no objeto
document.body.innerText = Object.keys(userInfo); // ['name', 'idade', 'address'] // retorna um array com as propriedades do objeto
document.body.innerText = Object.values(userInfo); // ['Gustavo', '27', {street: 'Rua 1', number:'123'}] // retorna um array com os valores das propriedades do objeto
document.body.innerText = Object.entries(userInfo); // [['name', 'Gustavo'], ['idade', '27'], ['address', {street: 'Rua 1', number:'123'}]] // retorna um array com as propriedades e valores do objeto
document.body.iinnerText = JSON.stringify(Object.values(userInfo)); // '{"name":"Gustavo","idade":"27","address":{"street":"Rua 1","number":"123"}}' // converte o objeto em uma string JSON
document.body.iinnerText = JSON.stringify(Object.entries(userInfo)); // '[["name","Gustavo"],["idade","27"],["address",{"street":"Rua 1","number":"123"}]]' // converte o objeto em uma string JSON

// Desestruturação

const address = userInfo.address


document.body.innerText = JSON.stringify(address); // '{"street":"Rua 1","number":"123"}'

const {name, idade: age, address: {street, number}} = userInfo;

document.body.innerText = JSON.stringify({name, age, street, number}); // '{"name":"Gustavo","idade":"27","street":"Rua 1","number":"123"}' // idade: age, renomeia a propriedade idade para age

function mostraIdade({idade}) {//pode-se passar o objeto inteiro ou desestruturar o objeto {idade} ou user ou nada
  return idade;

}

document.body.innerText = mostraIdade(userInfo); // 27


// Rest Operator

const {name: userFullName, ...restProps} = userInfo;
''
document.body.innerText = JSON.stringify(restProps); // '{"idade":"27","address":{"street":"Rua 1","number":"123"}}' // retorna um objeto com as propriedades restantes

// Rest Operator em Arrays

const numbersArray = [1,2,3,4,5,6,7,8,9,10];	

const [first, second, ...restArray] = array;

documentbody.innerText = JSON.stringify({restArray}); // '{"restArray":[3,4,5,6,7,8,9,10]}' // retorna um array com os valores restantes

const [firstElement, , third, ...restArray2] = array;

document.body.innerText = JSON.stringify({restArray: restArray2}); // '{"restArray":[3,4,5,6,7,8,9,10]}' // retorna um array com os valores restantes

//Short Syntax
 const userAge='27';

 const newUser = {
   userName: 'Gustavo',
   age: userAge
 }

 //Optional Chaining

 const user = {
  name:'Gustavo',
  age:'27',
  address: {
    street: 'Rua 1',
    number:'123', 
  }
}

//document.body.innerText = user.address && user.address.street; // Rua 1 // verifica se a propriedade existe no objeto
//document.body.innerText = user.address?.street; // Rua 1 // verifica se a propriedade existe no objeto

//Metodos de array

const anotherArray = [1,2,3,4,5,6,7,8,9,10];

for(const i of array) {
  documentbody.body.innerText += i;
}

array.array.forEach(item => {
  document.body.innerText += item;
});

array.map(item => { //transformar a array original em outra array
  return item * 2;
}
)

array.filter(item => { //retorna um array com os valores que passarem no teste
  return item % 2 === 0;
}
)
array.reduce((accumulator, item) => { //retorna um valor único

  return accumulator + item;

}, 0)  
const todossaonumeros = array.every(item => { //retorna true se todos os elementos passarem no teste, retorna true ou false
  typeof item === 'number';
})
const pelomenosumitem = array.some( item => typeof item != 'number'); // retorna se tiver ao menos um numero

const par = array.find(item => item % 2 === 0);

const soma = array.reduce((accumulator, item) => accumulator + item, 0); 


//template literals 

const userName = 'Gustavo';
const message = `Hello ${userName}!`;	'Hello Gustavo!'

document.body.innerText = message;

// promisses

const somaDoisNumeros = (a, b) => {
  return new Promise((_resolve, reject) => {
    setTimeout(() => {
      reject(a + b);
    }, 2000);
  });
}

somaDoisNumeros(2, 2)
  .then(result => {
    document.body.innerText = result;
  })
  .catch(error => {
    document.body,innerText = error;
  }); 

// async await

const somaDoisNumeros = (a, b) => {
  return new Promise((_resolve, reject) => {
    setTimeout(() => {
      reject(a + b);
    }, 2000);
  });
}

const main = async () => {
  try {
    const result = await somaDoisNumeros(2, 2);
    document.body.innerText = result;
  } catch (error) {
    document.body.innerText
  }
}

main();

// fetch

const url = 'https://jsonplaceholder.typicode.com/posts';

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });

// fetch com async await

const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

const fetchData1 = async () => {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

fetchData1();

// fetch com async await e post

const apiPostUrl = 'https://jsonplaceholder.typicode.com/posts';

const postData = async () => {
  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1
      })
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

postData();

// fetch com async await e put

const apiPutUrl = 'https://jsonplaceholder.typicode.com/posts/1';

const putData = async () => {
  try {
    const response = await fetch(apiUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: 1,
        title: 'foo',
        body: 'bar',
        userId: 1
      })
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

putData();

// fetch com async await e delete

const apiDeleteUrl = 'https://jsonplaceholder.typicode.com/posts/1';

const deleteData = async () => {
  try {
    const response = await fetch(apiUrl, {
      method: 'DELETE'
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

deleteData();

// fetch com async await e headers  

const apiHeadersUrl = 'https://jsonplaceholder.typicode.com/posts';

const headersData = async () => {
  try {
    const response = await fetch(apiUrl, {
      headers: {
        'Content-Type': 'application.JSON',
      }
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

headersData();

// fetch com async await e headers e get

const apiHeadersGetUrl = 'https://jsonplaceholder.typicode.com/posts';

const headersGetData = async () => {
  try {
    const response = await fetch(apiUrl, {
      headers: {
        'Content-Type': 'application.JSON',
      }
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

headersGetData();

// fetch com async await e headers e post

const apiHeadersPostUrl = 'https://jsonplaceholder.typicode.com/posts';

const headersPostData = async () => {
  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1
      })
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

headersPostData();

// fetch com async await e headers e put

const apiHeadersPutUrl = 'https://jsonplaceholder.typicode.com/posts/1';

const headersPutData = async () => {
  try {
    const response = await fetch(apiUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: 1,
        title: 'foo',
        body: 'bar',
        userId: 1
      })
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

headersPutData();

// fetch com async await e headers e delete

const apiHeadersDeleteUrl = 'https://jsonplaceholder.typicode.com/posts/1';

const headersDeleteData = async () => {
  try {
    const response = await fetch(apiUrl, {
      method: 'DELETE'
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

headersDeleteData();


function buscaLinear(lista, item) {
  for (let i = 0; i < lista.length; i++) {
      if (lista[i] === item) {
          return i; // Retorna o índice onde o item foi encontrado
      }
  }
  return null; // Retorna null se o item não for encontrado
}

// Exemplo de uso
const lista = [10, 20, 30, 40, 50];
const item = 30;

const resultado = buscaLinear(lista, item);
if (resultado !== null) {
  console.log(`Item encontrado no índice: ${resultado}`);
} else {
  console.log("Item não encontrado.");
}


function bubbleSort(lista) {
  const n = lista.length;

  for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - i - 1; j++) {
          if (lista[j] > lista[j + 1]) {
              // Troca os elementos de lugar
              let temp = lista[j];
              lista[j] = lista[j + 1];
              lista[j + 1] = temp;
          }
      }
  }
  return lista;
}

// Exemplo de uso
const listaNumeros = [64, 34, 25, 12, 22, 11, 90];
const listaOrdenada = bubbleSort(listaNumeros);

console.log("Lista ordenada:", listaOrdenada);



const numero = parseInt(prompt("Digite um número:"));

if (numero > 0) {
    console.log("O número é positivo.");
} else if (numero < 0) {
    console.log("O número é negativo.");
} else {
    console.log("O número é zero.");
}


const numeroPar = parseInt(prompt("Digite um Número:"));

if (numeroPar % 2 === 0 ) {
  document.body.innerText = `O número ${numeroPar} é um número par`;
} else if (numeroPar % 2 !== 0) {
  document.body.innerText = `O número ${numeroPar} é um número ímpar`;
}


const numeroEntre = parseInt(prompt("Digite um numero:"));
for (let i = 1; i <= 5; i++) {
  for(let j = 1; j <= 5; j++){
    if (j <= 5 && j >= 1 ) {
      document.body.innerText = `O número ${numeroEntre} está entre 1 e 5`;
    } else (j >= 5 ); {
      document.body.innerText = `O número ${numeroEntre} não está entre 1 e 5, ele é maior ou igual a 5`;
    }
  }
  const elemento = document.createElement("p");
  elemento.textContent = i;
  
}

let i = 1;
 const numeroAbaixo = parseInt(prompt("Digite um número:"));
while (i <= 5) {
    document.body.innerText = `O número ${numeroAbaixo} é menor que 5`;
    i += 1;
} 

*/

const frutas = ["maçã", "banana", "cereja"];
const frutaPreferida = frutas.filter(fruta => fruta === "banana");

for (const fruta of frutas) {
    if (fruta === "banana") {
        console.log(`A fruta preferida é: ${frutaPreferida}`);
    }
}

