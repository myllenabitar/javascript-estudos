
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