var btn = document.querySelector(".conteudo")   
var btns = document.querySelectorAll(".conteudo")
var imagem = document.querySelector("#imagem")

function Recarregar(){
    window.location.reload(false);
}

function Escolha (valor) {
    switch (valor) {
        case 1:
            btn.style.display = "none";

            var ButtonFechar = document.createElement("button");
            ButtonFechar.setAttribute("id", "BtnImgFechar");
            ButtonFechar.appearance = "none";

            imagem.appendChild(ButtonFechar);

            var BtnImg = document.querySelector("#BtnImgFechar")

            var texto = document.createElement("p");
            texto.textContent = "Por que você fica linda comendo!";
            texto.style.fontSize = "30px";
            imagem.appendChild(texto);

            var imgFechar = document.createElement("img");
            imgFechar.src = "imagens/fechar.png";
            BtnImg.appendChild(imgFechar);
          
            imgFechar.onclick = Recarregar;
            imgFechar.width = "30";
            imgFechar.height = "30";

            var Foto = document.createElement("img");
            Foto.setAttribute("id", "Foto");
            Foto.src = "imagens/thaina1.jpg";
            Foto.width = 600;
            Foto.height = 700;

            imagem.appendChild(Foto);

            break;
        case 2:
            btn.style.display = "none";

            var ButtonFechar = document.createElement("button");
            ButtonFechar.setAttribute("id", "BtnImgFechar");
            ButtonFechar.appearance = "none";

            imagem.appendChild(ButtonFechar);

            var BtnImg = document.querySelector("#BtnImgFechar")

            var texto = document.createElement("p");
            texto.textContent = "Por que você e minha parceira de viagens!";
            texto.style.fontSize = "30px";
            imagem.appendChild(texto);

            var imgFechar = document.createElement("img");
            imgFechar.src = "imagens/fechar.png";
            BtnImg.appendChild(imgFechar);
          
            imgFechar.onclick = Recarregar;
            imgFechar.width = "30";
            imgFechar.height = "30";

            var Foto = document.createElement("img");
            Foto.setAttribute("id", "Foto");
            Foto.src = "imagens/thaina2.jpg";
            Foto.width = 600;
            Foto.height = 700;

            imagem.appendChild(Foto);

            break;
        case 3:
            btn.style.display = "none";

            var ButtonFechar = document.createElement("button");
            ButtonFechar.setAttribute("id", "BtnImgFechar");
            ButtonFechar.appearance = "none";

            imagem.appendChild(ButtonFechar);

            var BtnImg = document.querySelector("#BtnImgFechar")

            var texto = document.createElement("p");
            texto.textContent = "Por que você me deixa mais bonito!";
            texto.style.fontSize = "30px";
            imagem.appendChild(texto);

            var imgFechar = document.createElement("img");
            imgFechar.src = "imagens/fechar.png";
            BtnImg.appendChild(imgFechar);
            
            imgFechar.onclick = Recarregar;
            imgFechar.width = "30";
            imgFechar.height = "30";

            var Foto = document.createElement("img");
            Foto.setAttribute("id", "Foto");
            Foto.src = "imagens/thaina3.jpg";
            Foto.width = 600;
            Foto.height = 700;

            imagem.appendChild(Foto);

            break;
        case 4:
            btn.style.display = "none";

            var ButtonFechar = document.createElement("button");
            ButtonFechar.setAttribute("id", "BtnImgFechar");
            ButtonFechar.appearance = "none";

            imagem.appendChild(ButtonFechar);

            var BtnImg = document.querySelector("#BtnImgFechar")

            var texto = document.createElement("p");
            texto.textContent = "Por que você e uma bebada!!!";
            texto.style.fontSize = "30px";
            imagem.appendChild(texto);

            var imgFechar = document.createElement("img");
            imgFechar.src = "imagens/fechar.png";
            BtnImg.appendChild(imgFechar);
            
            imgFechar.onclick = Recarregar;
            imgFechar.width = "30";
            imgFechar.height = "30";

            var Foto = document.createElement("img");
            Foto.setAttribute("id", "Foto");
            Foto.src = "imagens/thaina4.jpg";
            Foto.width = 600;
            Foto.height = 700;

            imagem.appendChild(Foto);

            break;
        case 5:
            btn.style.display = "none";

            var ButtonFechar = document.createElement("button");
            ButtonFechar.setAttribute("id", "BtnImgFechar");
            ButtonFechar.appearance = "none";

            imagem.appendChild(ButtonFechar);

            var BtnImg = document.querySelector("#BtnImgFechar")

            var texto = document.createElement("p");
            texto.textContent = "Por que você topa qualquer parada!";
            texto.style.fontSize = "30px";
            imagem.appendChild(texto);

            var imgFechar = document.createElement("img");
            imgFechar.src = "imagens/fechar.png";
            BtnImg.appendChild(imgFechar);
            
            imgFechar.onclick = Recarregar;
            imgFechar.width = "30";
            imgFechar.height = "30";

            var Foto = document.createElement("img");
            Foto.setAttribute("id", "Foto");
            Foto.src = "imagens/thaina5.jpg";
            Foto.width = 600;
            Foto.height = 700;

            imagem.appendChild(Foto);

            break;
        case 6:
            btn.style.display = "none";

            var ButtonFechar = document.createElement("button");
            ButtonFechar.setAttribute("id", "BtnImgFechar");
            ButtonFechar.appearance = "none";

            imagem.appendChild(ButtonFechar);

            var BtnImg = document.querySelector("#BtnImgFechar")

            var texto = document.createElement("p");
            texto.textContent = "Por que seu sorriso e lindo!";
            texto.style.fontSize = "30px";
            imagem.appendChild(texto);

            var imgFechar = document.createElement("img");
            imgFechar.src = "imagens/fechar.png";
            BtnImg.appendChild(imgFechar);
            
            imgFechar.onclick = Recarregar;
            imgFechar.width = "30";
            imgFechar.height = "30";

            var Foto = document.createElement("img");
            Foto.setAttribute("id", "Foto");
            Foto.src = "imagens/thaina6.jpg";
            Foto.width = 600;
            Foto.height = 700;

            imagem.appendChild(Foto);

            break;
        case 7:
            btn.style.display = "none";

            var ButtonFechar = document.createElement("button");
            ButtonFechar.setAttribute("id", "BtnImgFechar");
            ButtonFechar.appearance = "none";

            imagem.appendChild(ButtonFechar);

            var BtnImg = document.querySelector("#BtnImgFechar")

            var texto = document.createElement("p");
            texto.textContent = "Por que nossa familia e linda!";
            texto.style.fontSize = "30px";
            imagem.appendChild(texto);

            var imgFechar = document.createElement("img");
            imgFechar.src = "imagens/fechar.png";
            BtnImg.appendChild(imgFechar);
            
            imgFechar.onclick = Recarregar;
            imgFechar.width = "30";
            imgFechar.height = "30";

            var Foto = document.createElement("img");
            Foto.setAttribute("id", "Foto");
            Foto.src = "imagens/thaina7.jpg";
            Foto.width = 600;
            Foto.height = 700;

            imagem.appendChild(Foto);

            break;
        case 8:
            btn.style.display = "none";

            var ButtonFechar = document.createElement("button");
            ButtonFechar.setAttribute("id", "BtnImgFechar");
            ButtonFechar.appearance = "none";

            imagem.appendChild(ButtonFechar);

            var BtnImg = document.querySelector("#BtnImgFechar")

            var texto = document.createElement("p");
            texto.textContent = "Por que você é a melhor companhia do mundo!";
            texto.style.fontSize = "30px";
            imagem.appendChild(texto);

            var imgFechar = document.createElement("img");
            imgFechar.src = "imagens/fechar.png";
            BtnImg.appendChild(imgFechar);
            
            imgFechar.onclick = Recarregar;
            imgFechar.width = "30";
            imgFechar.height = "30";

            var Foto = document.createElement("img");
            Foto.setAttribute("id", "Foto");
            Foto.src = "imagens/thaina8.jpg";
            Foto.width = 600;
            Foto.height = 700;

            imagem.appendChild(Foto);

            break;
        case 9:
            btn.style.display = "none";

            var ButtonFechar = document.createElement("button");
            ButtonFechar.setAttribute("id", "BtnImgFechar");
            ButtonFechar.appearance = "none";

            imagem.appendChild(ButtonFechar);

            var BtnImg = document.querySelector("#BtnImgFechar")

            var texto = document.createElement("p");
            texto.textContent = "Por que você é simplimente linda!";
            texto.style.fontSize = "30px";
            imagem.appendChild(texto);

            var imgFechar = document.createElement("img");
            imgFechar.src = "imagens/fechar.png";
            BtnImg.appendChild(imgFechar);
            
            imgFechar.onclick = Recarregar;
            imgFechar.width = "30";
            imgFechar.height = "30";

            var Foto = document.createElement("img");
            Foto.setAttribute("id", "Foto");
            Foto.src = "imagens/thaina9.jpg";
            Foto.width = 600;
            Foto.height = 700;

            imagem.appendChild(Foto);

            break;
        case 10:
            btn.style.display = "none";

            var ButtonFechar = document.createElement("button");
            ButtonFechar.setAttribute("id", "BtnImgFechar");
            ButtonFechar.appearance = "none";

            imagem.appendChild(ButtonFechar);

            var BtnImg = document.querySelector("#BtnImgFechar")

            var texto = document.createElement("p");
            texto.textContent = "Por que você me da forças!";
            texto.style.fontSize = "30px";
            imagem.appendChild(texto);

            var imgFechar = document.createElement("img");
            imgFechar.src = "imagens/fechar.png";
            BtnImg.appendChild(imgFechar);
            
            imgFechar.onclick = Recarregar;
            imgFechar.width = "30";
            imgFechar.height = "30";

            var Foto = document.createElement("img");
            Foto.setAttribute("id", "Foto");
            Foto.src = "imagens/thaina10.jpg";
            Foto.width = 600;
            Foto.height = 700;

            imagem.appendChild(Foto);

            break;
        case 11:
            btn.style.display = "none";

            var ButtonFechar = document.createElement("button");
            ButtonFechar.setAttribute("id", "BtnImgFechar");
            ButtonFechar.appearance = "none";

            imagem.appendChild(ButtonFechar);

            var BtnImg = document.querySelector("#BtnImgFechar")

            var texto = document.createElement("p");
            texto.textContent = "Por que você dorme como um anjo!";
            texto.style.fontSize = "30px";
            imagem.appendChild(texto);

            var imgFechar = document.createElement("img");
            imgFechar.src = "imagens/fechar.png";
            BtnImg.appendChild(imgFechar);
            
            imgFechar.onclick = Recarregar;
            imgFechar.width = "30";
            imgFechar.height = "30";

            var Foto = document.createElement("img");
            Foto.setAttribute("id", "Foto");
            Foto.src = "imagens/thaina11.jpg";
            Foto.width = 600;
            Foto.height = 700;

            imagem.appendChild(Foto);

            break;
        case 12:
            btn.style.display = "none";

            var ButtonFechar = document.createElement("button");
            ButtonFechar.setAttribute("id", "BtnImgFechar");
            ButtonFechar.appearance = "none";

            imagem.appendChild(ButtonFechar);

            var BtnImg = document.querySelector("#BtnImgFechar")

            var texto = document.createElement("p");
            texto.textContent = "Por que o melhor lugar do mundo é ao seu lado!";
            texto.style.fontSize = "30px";
            imagem.appendChild(texto);

            var imgFechar = document.createElement("img");
            imgFechar.src = "imagens/fechar.png";
            BtnImg.appendChild(imgFechar);
            
            imgFechar.onclick = Recarregar;
            imgFechar.width = "30";
            imgFechar.height = "30";

            var Foto = document.createElement("img");
            Foto.setAttribute("id", "Foto");
            Foto.src = "imagens/thaina12.jpg";
            Foto.width = 600;
            Foto.height = 700;

            imagem.appendChild(Foto);

            break;
        case 13:
            btn.style.display = "none";

            var ButtonFechar = document.createElement("button");
            ButtonFechar.setAttribute("id", "BtnImgFechar");
            ButtonFechar.appearance = "none";

            imagem.appendChild(ButtonFechar);

            var BtnImg = document.querySelector("#BtnImgFechar")

            var texto = document.createElement("p");
            texto.textContent = "Por que é simplesmente loucura não te amar!";
            texto.style.fontSize = "30px";
            imagem.appendChild(texto);

            var imgFechar = document.createElement("img");
            imgFechar.src = "imagens/fechar.png";
            BtnImg.appendChild(imgFechar);
            
            imgFechar.onclick = Recarregar;
            imgFechar.width = "30";
            imgFechar.height = "30";

            var Foto = document.createElement("img");
            Foto.setAttribute("id", "Foto");
            Foto.src = "imagens/thaina13.jpg";
            Foto.width = 600;
            Foto.height = 700;

            imagem.appendChild(Foto);

            break;
        case 14:
            btn.style.display = "none";

            var ButtonFechar = document.createElement("button");
            ButtonFechar.setAttribute("id", "BtnImgFechar");
            ButtonFechar.appearance = "none";

            imagem.appendChild(ButtonFechar);

            var BtnImg = document.querySelector("#BtnImgFechar")

            var texto = document.createElement("p");
            texto.textContent = "Por que você é muito elegante!";
            texto.style.fontSize = "30px";
            imagem.appendChild(texto);

            var imgFechar = document.createElement("img");
            imgFechar.src = "imagens/fechar.png";
            BtnImg.appendChild(imgFechar);
            
            imgFechar.onclick = Recarregar;
            imgFechar.width = "30";
            imgFechar.height = "30";

            var Foto = document.createElement("img");
            Foto.setAttribute("id", "Foto");
            Foto.src = "imagens/thaina14.jpg";
            Foto.width = 600;
            Foto.height = 700;

            imagem.appendChild(Foto);

            break;
        case 15:
            btn.style.display = "none";

            var ButtonFechar = document.createElement("button");
            ButtonFechar.setAttribute("id", "BtnImgFechar");
            ButtonFechar.appearance = "none";

            imagem.appendChild(ButtonFechar);

            var BtnImg = document.querySelector("#BtnImgFechar")

            var texto = document.createElement("p");
            texto.textContent = "Por que se não você me mata!";
            texto.style.fontSize = "30px";
            imagem.appendChild(texto);

            var imgFechar = document.createElement("img");
            imgFechar.src = "imagens/fechar.png";
            BtnImg.appendChild(imgFechar);
            
            imgFechar.onclick = Recarregar;
            imgFechar.width = "30";
            imgFechar.height = "30";

            var Foto = document.createElement("img");
            Foto.setAttribute("id", "Foto");
            Foto.src = "imagens/thaina15.jpg";
            Foto.width = 600;
            Foto.height = 700;

            imagem.appendChild(Foto);

            break;
        case 16:
            btn.style.display = "none";

            var ButtonFechar = document.createElement("button");
            ButtonFechar.setAttribute("id", "BtnImgFechar");
            ButtonFechar.appearance = "none";

            imagem.appendChild(ButtonFechar);

            var BtnImg = document.querySelector("#BtnImgFechar")

            var texto = document.createElement("p");
            texto.textContent = "Por que juntos somos fortes!";
            texto.style.fontSize = "30px";
            imagem.appendChild(texto);

            var imgFechar = document.createElement("img");
            imgFechar.src = "imagens/fechar.png";
            BtnImg.appendChild(imgFechar);
            
            imgFechar.onclick = Recarregar;
            imgFechar.width = "30";
            imgFechar.height = "30";

            var Foto = document.createElement("img");
            Foto.setAttribute("id", "Foto");
            Foto.src = "imagens/thaina16.jpg";
            Foto.width = 600;
            Foto.height = 700;

            imagem.appendChild(Foto);

            break;
        case 17:
            btn.style.display = "none";

            var ButtonFechar = document.createElement("button");
            ButtonFechar.setAttribute("id", "BtnImgFechar");
            ButtonFechar.appearance = "none";

            imagem.appendChild(ButtonFechar);

            var BtnImg = document.querySelector("#BtnImgFechar")

            var texto = document.createElement("p");
            texto.textContent = "Por que você é uma rosa linda mais forte!";
            texto.style.fontSize = "30px";
            imagem.appendChild(texto);

            var imgFechar = document.createElement("img");
            imgFechar.src = "imagens/fechar.png";
            BtnImg.appendChild(imgFechar);
            
            imgFechar.onclick = Recarregar;
            imgFechar.width = "30";
            imgFechar.height = "30";

            var Foto = document.createElement("img");
            Foto.setAttribute("id", "Foto");
            Foto.src = "imagens/thaina17.jpg";
            Foto.width = 600;
            Foto.height = 700;

            imagem.appendChild(Foto);

            break;
        case 18:
            btn.style.display = "none";

            var ButtonFechar = document.createElement("button");
            ButtonFechar.setAttribute("id", "BtnImgFechar");
            ButtonFechar.appearance = "none";

            imagem.appendChild(ButtonFechar);

            var BtnImg = document.querySelector("#BtnImgFechar")

            var texto = document.createElement("p");
            texto.textContent = "Por que você me diverte!";
            texto.style.fontSize = "30px";
            imagem.appendChild(texto);

            var imgFechar = document.createElement("img");
            imgFechar.src = "imagens/fechar.png";
            BtnImg.appendChild(imgFechar);
            
            imgFechar.onclick = Recarregar;
            imgFechar.width = "30";
            imgFechar.height = "30";

            var Foto = document.createElement("img");
            Foto.setAttribute("id", "Foto");
            Foto.src = "imagens/thaina18.jpg";
            Foto.width = 600;
            Foto.height = 700;

            imagem.appendChild(Foto);

            break;
        case 19:
            btn.style.display = "none";

            var ButtonFechar = document.createElement("button");
            ButtonFechar.setAttribute("id", "BtnImgFechar");
            ButtonFechar.appearance = "none";

            imagem.appendChild(ButtonFechar);

            var BtnImg = document.querySelector("#BtnImgFechar")

            var texto = document.createElement("p");
            texto.textContent = "Por que nos calamos os filhas das putas!";
            texto.style.fontSize = "30px";
            imagem.appendChild(texto);

            var imgFechar = document.createElement("img");
            imgFechar.src = "imagens/fechar.png";
            BtnImg.appendChild(imgFechar);
            
            imgFechar.onclick = Recarregar;
            imgFechar.width = "30";
            imgFechar.height = "30";

            var Foto = document.createElement("img");
            Foto.setAttribute("id", "Foto");
            Foto.src = "imagens/thaina19.jpg";
            Foto.width = 600;
            Foto.height = 700;

            imagem.appendChild(Foto);

            break;
        case 20:
            btn.style.display = "none";

            var ButtonFechar = document.createElement("button");
            ButtonFechar.setAttribute("id", "BtnImgFechar");
            ButtonFechar.appearance = "none";

            imagem.appendChild(ButtonFechar);

            var BtnImg = document.querySelector("#BtnImgFechar")

            var texto = document.createElement("p");
            texto.textContent = "Por que você me traz luz!";
            texto.style.fontSize = "30px";
            imagem.appendChild(texto);

            var imgFechar = document.createElement("img");
            imgFechar.src = "imagens/fechar.png";
            BtnImg.appendChild(imgFechar);
            
            imgFechar.onclick = Recarregar;
            imgFechar.width = "30";
            imgFechar.height = "30";

            var Foto = document.createElement("img");
            Foto.setAttribute("id", "Foto");
            Foto.src = "imagens/thaina20.jpg";
            Foto.width = 600;
            Foto.height = 700;

            imagem.appendChild(Foto);

            break;
        case 21:
            btn.style.display = "none";

            var ButtonFechar = document.createElement("button");
            ButtonFechar.setAttribute("id", "BtnImgFechar");
            ButtonFechar.appearance = "none";

            imagem.appendChild(ButtonFechar);

            var BtnImg = document.querySelector("#BtnImgFechar")

            var texto = document.createElement("p");
            texto.textContent = "Por que eu jurei te amar para sempre!";
            texto.style.fontSize = "30px";
            imagem.appendChild(texto);

            var imgFechar = document.createElement("img");
            imgFechar.src = "imagens/fechar.png";
            BtnImg.appendChild(imgFechar);
            
            imgFechar.onclick = Recarregar;
            imgFechar.width = "30";
            imgFechar.height = "30";

            var Foto = document.createElement("img");
            Foto.setAttribute("id", "Foto");
            Foto.src = "imagens/thaina21.jpg";
            Foto.width = 600;
            Foto.height = 700;

            imagem.appendChild(Foto);

            break;
        case 22:
            btn.style.display = "none";

            var ButtonFechar = document.createElement("button");
            ButtonFechar.setAttribute("id", "BtnImgFechar");
            ButtonFechar.appearance = "none";

            imagem.appendChild(ButtonFechar);

            var BtnImg = document.querySelector("#BtnImgFechar")

            var texto = document.createElement("p");
            texto.textContent = "Por que você estava comigo na pior hora!";
            texto.style.fontSize = "30px";
            imagem.appendChild(texto);

            var imgFechar = document.createElement("img");
            imgFechar.src = "imagens/fechar.png";
            BtnImg.appendChild(imgFechar);
            
            imgFechar.onclick = Recarregar;
            imgFechar.width = "30";
            imgFechar.height = "30";

            var Foto = document.createElement("img");
            Foto.setAttribute("id", "Foto");
            Foto.src = "imagens/thaina22.jpg";
            Foto.width = 600;
            Foto.height = 700;

            imagem.appendChild(Foto);

            break;
        case 23:
            btn.style.display = "none";

            var ButtonFechar = document.createElement("button");
            ButtonFechar.setAttribute("id", "BtnImgFechar");
            ButtonFechar.appearance = "none";

            imagem.appendChild(ButtonFechar);

            var BtnImg = document.querySelector("#BtnImgFechar")

            var texto = document.createElement("p");
            texto.textContent = "Por que o que já vivemos daria um livro!";
            texto.style.fontSize = "30px";
            imagem.appendChild(texto);

            var imgFechar = document.createElement("img");
            imgFechar.src = "imagens/fechar.png";
            BtnImg.appendChild(imgFechar);
            
            imgFechar.onclick = Recarregar;
            imgFechar.width = "30";
            imgFechar.height = "30";

            var Foto = document.createElement("img");
            Foto.setAttribute("id", "Foto");
            Foto.src = "imagens/thaina23.jpg";
            Foto.width = 600;
            Foto.height = 700;

            imagem.appendChild(Foto);

            break;
        case 24:
            btn.style.display = "none";

            var ButtonFechar = document.createElement("button");
            ButtonFechar.setAttribute("id", "BtnImgFechar");
            ButtonFechar.appearance = "none";

            imagem.appendChild(ButtonFechar);

            var BtnImg = document.querySelector("#BtnImgFechar")

            var texto = document.createElement("p");
            texto.textContent = "Por que estamos só no começo da nossa vida!";
            texto.style.fontSize = "30px";
            imagem.appendChild(texto);

            var imgFechar = document.createElement("img");
            imgFechar.src = "imagens/fechar.png";
            BtnImg.appendChild(imgFechar);
            
            imgFechar.onclick = Recarregar;
            imgFechar.width = "30";
            imgFechar.height = "30";

            var Foto = document.createElement("img");
            Foto.setAttribute("id", "Foto");
            Foto.src = "imagens/thaina24.jpg";
            Foto.width = 600;
            Foto.height = 700;

            imagem.appendChild(Foto);

            break;
    }
}
