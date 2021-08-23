function iniciaModal(modalID) {
        const modal = document.getElementById(modalID);
        if(modal) {
            modal.classList.add('mostrar');
            modal.addEventListener('click', (e) => {
                if(e.target.id == modalID || e.target.className == 'fechar') {
                    modal.classList.remove('mostrar');
                    localStorage.fechaModal = modalID;
                }
            });
        }
}

const logo = document.querySelector('.botao');
logo.addEventListener('click', () => iniciaModal('modal-video'));


function leiaMais(){
    var pontos = document.getElementById("pontos");
    var maisTexto = document.getElementById("mais");
    var botao = document.getElementById("bot");

    if(pontos.style.display === "none"){
        pontos.style.display="inline";
        maisTexto.style.display="none";
    }
    else{
        pontos.style.display="none";
        maisTexto.style.display="inline";
    }
}
