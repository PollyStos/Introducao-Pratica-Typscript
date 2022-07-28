// Como podemos rodar isso em um arquivo .ts sem causar erros? 

// Resposta 1
const employee={
    codigo: 10,
    nome: 'João'
};

// Resposta 2
const employee2: {codigo: number, nome: string} = {
    codigo: 10,
    nome: 'joao'
}

// Respostas 3
interface Employee {  
    codigo: number,
    nome: string
};

const employeeObj: Employee = {
    codigo: 10,
    nome: 'João'
}

const employeeObj2 = {} as Employee;
employeeObj.codigo = 10;
employeeObj.nome = 'João';
