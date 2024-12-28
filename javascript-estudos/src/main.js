
document.body.innerText='Hello World!';


//nulish coalescing operator

const idade = 0;


document.body.innerText = 'sua idade é: ' + (idade || 'Idade não informada');  // Idade não informada {0, false, null, undefined, NaN, '' são considerados falsy}
document.body.innerText = 'sua idade é: ' + (idade ?? 'Idade não informada');  // Idade: 0 {numll, undefined são considerados falsy}


//Objetos

const user = {
  name:'Gustavo',
  idade:'27',
  address: {
    street: 'Rua 1',
    number:'123', 
  }

}

document.body.innerText = ('name' in user); //true  // verifica se a propriedade existe no objeto
document.body.innerText = Object.keys(user); // ['name', 'idade', 'address'] // retorna um array com as propriedades do objeto
document.body.innerText = Object.values(user); // ['Gustavo', '27', {street: 'Rua 1', number:'123'}] // retorna um array com os valores das propriedades do objeto
document.body.innerText = Object.entries(user); // [['name', 'Gustavo'], ['idade', '27'], ['address', {street: 'Rua 1', number:'123'}]] // retorna um array com as propriedades e valores do objeto
document.body.iinnerText = JSON.stringify(Object.values(user)); // '{"name":"Gustavo","idade":"27","address":{"street":"Rua 1","number":"123"}}' // converte o objeto em uma string JSON
document.body.iinnerText = JSON.stringify(Object.entries(user)); // '[["name","Gustavo"],["idade","27"],["address",{"street":"Rua 1","number":"123"}]]' // converte o objeto em uma string JSON

// Desestruturação

const address = user.address


document.body.innerText = JSON.stringify(address); // '{"street":"Rua 1","number":"123"}'

const {name, idade: age, address: {street, number}} = user;

document.body.innerText = JSON.stringify({name, age, street, number}); // '{"name":"Gustavo","idade":"27","street":"Rua 1","number":"123"}' // idade: age, renomeia a propriedade idade para age

function mostraIdade({idade}) {//pode-se passar o objeto inteiro ou desestruturar o objeto {idade} ou user ou nada
  return idade;

}

document.body.innerText = mostraIdade(user); // 27


// Rest Operator

const {name: userName, ...restProps} = user;
''
document.body.innerText = JSON.stringify(restProps); // '{"idade":"27","address":{"street":"Rua 1","number":"123"}}' // retorna um objeto com as propriedades restantes

// Rest Operator em Arrays

const array = [1,2,3,4,5, 6, 7, 8, 9, 10];	

const [first, second, ...restArray] = array;

documentbody.innerText = JSON.stringify({restArray}); // '{"restArray":[3,4,5,6,7,8,9,10]}' // retorna um array com os valores restantes

const [firstElement, , third, ...restArray2] = array;

document.body.innerText = JSON.stringify({restArray: restArray2}); // '{"restArray":[3,4,5,6,7,8,9,10]}' // retorna um array com os valores restantes

//Short Syntax



// Spread Operator

