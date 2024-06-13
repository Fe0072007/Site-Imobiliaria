imagens = ["casa1.webp", "casa2.jpg"]
bgImg = document.getElementById('casa1')
bgImg.style.backgroundImage = `url(${imagens[0]})`
index_atual = 0
function mudarImgDireita(){
    
    index_atual += 1
    
    if(index_atual > imagens.length - 1){

        index_atual = 0
        bgImg.style.backgroundImage = `url(${imagens[index_atual]})`

    }else{

        bgImg.style.backgroundImage = `url(${imagens[index_atual]})`


    }
    

}
function mudarImgEsquerda(){

    index_atual -= 1
    if(index_atual < 0){

        index_atual = imagens.length - 1
        bgImg.style.backgroundImage = `url(${imagens[index_atual]})`


    }else{

        bgImg.style.backgroundImage = `url(${imagens[index_atual]})`

    }

}