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

function principal(){
    let material = 'cobre'  //aluminio e cobre

    let resistencia = 0.0

    let comprimento = 1000
    let area = 6.0

    let resposta = ''

    let mat = verTipoMaterial(material)
    console.log(mat)

    resistencia =calcularResistencia(comprimento, area, mat)
    console.log(`A resistência do condutor é ${resistencia.toFixed(3)}  Ω`)


}

principal()