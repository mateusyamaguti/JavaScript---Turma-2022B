var nota1 = parseInt(prompt('Nota da primeira prova: '))
var nota2 = parseInt(prompt('Nota da segunda prova: '))
var media = (nota1 + nota2) / 2
if(media >= 7){
    alert('Média: '+media+' Aprovado')
}
else{
    alert('Média: '+media+' Reprovado')
}
