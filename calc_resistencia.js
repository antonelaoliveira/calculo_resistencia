// L = comprimento do condutor [m]
// A = área de seção transversal [mm²]
// mat =  material => resistividade do material => ro
// se for cobre = 0.017
//se for alumínio = 0.028
function calcularResistencia(L, A, mat){
    return (mat * L) / A  
}
// atribui o valor do material
function verTipoMaterial(mat){
    const cobre = 0.017
    const aluminio = 0.028
    if(mat === 'cobre'){
        return cobre
    }else if(mat === 'aluminio'){
        return aluminio
    }else{
        return 'material inválido'
    }
}

let resposta = document.getElementById('resposta')
let calcular = document.getElementById('calcular')

calcular.addEventListener('click', ()=>{  //função principal
    let material = document.getElementById('material').value

    let resistencia = 0.0

    let comprimento = Number(document.getElementById('comprimento').value)
    let area =  Number(document.getElementById('area').value)

    let mat = verTipoMaterial(material)
    console.log(mat)

    resistencia =calcularResistencia(comprimento, area, mat)
    console.log(`A resistência do condutor é ${resistencia.toFixed(3)}  Ω`)

    resposta.innerHTML = ''
    resposta.innerHTML += `A resistência do condutor é ${resistencia.toFixed(3)}  Ω`
    resposta.style.fontFamily = 'Verdana'
    resposta.style.fontSize = '2rem'
    resposta.style.fontWeight = 'bold'

    resposta.innerHTML += '<hr>'

})

// a função principal foi substituída por uma arrow function () =>
