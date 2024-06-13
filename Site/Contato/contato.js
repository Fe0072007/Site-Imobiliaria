termos = document.getElementById('terms')
function msgContato(){
    if(!termos.checked){

        document.getElementById('erroterms').innerHTML='Você deve concordar com os termos'
        document.getElementById('erroterms').style.color='red'
        return false

    }else{

        document.getElementById('erroterms').innerHTML=''
        return true

    }
}
function checar(){

    if(termos.checked){

        document.getElementById('erroterms').innerHTML=''

    }

}
