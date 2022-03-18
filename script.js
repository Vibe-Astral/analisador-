let num = document.getElementById("fnum")
let lista = document.getElementById("flista")
let res = document.getElementById("res")
let valores = []

function isnumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }

}
function inlista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }

}
function adicionar() {
    if (isnumero(num.value) && !inlista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement("option")
        item.text=`valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML=''
    } else {
        alert("valor invalido ou já encontrado na lista ")
    }
    num.value = ""
    num.focus()
}
function finalizar(){
    if(valores.length==0){
        alert("adicione valores para finalizar")
    }else{
        let tot = valores.length
        let maior = valores[0]
        let menor= valores [0]
        let soma = 0
        let media = 0

        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos]> maior)
            maior=valores[pos]
            if(valores[pos]< menor)
            menor=valores[pos]
        }
        media= soma / tot
        res.innerHTML=""
        res.innerHTML +=`<p> Ao todo, temos ${tot} numeros cadastrados </p>`
        res.innerHTML +=`<p> O maior valor informado foi ${maior} </p>`
        res.innerHTML +=`<p> O menor valor informado foi ${menor} </p>`
        res.innerHTML +=`<p> Somando todos os valores temos  ${soma} </p>`
        res.innerHTML +=`<p> A média todos os valores é ${media} </p>`
    }
}