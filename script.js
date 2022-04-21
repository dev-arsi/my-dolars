
function converter() {
    var vReais = document.getElementById('input-real')
    var vDolar = document.getElementById('input-dolar')
    var vr = Number(vReais.value)
    var vd = Number(vDolar.value)
    var result = vr / vd
    var x = !Number

    if (vr == x && vd == x) {
        alert('Você não digitou nada.')
    } else if (vr == x && vd != x) {
        alert('Digite o valor em reais!')
    } else if (vr != x && vd == x) {
        alert('Digite o valor do dólar!')
    } else {
        p1.innerHTML = `${vr.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} = <strong>${result.toLocaleString('pt-BR', { style: 'currency', currency: 'USD' })}</strong>`
    }

}
