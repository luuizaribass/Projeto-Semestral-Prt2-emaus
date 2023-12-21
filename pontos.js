function aparecer() {
    const pontosFinais = document.querySelector('#pontosFinaiss');
    const pontosConteudo = document.querySelector('.pontos-conteudo');

    // Obtém os pontos já armazenados localmente
    const pontosArmazenados = parseInt(localStorage.getItem('pontosResgatados')) || 0;

    // Atualiza a exibição dos pontos na página
    pontosFinais.innerHTML = pontosArmazenados;

    if (pontosConteudo.style.display === "block") {
        pontosConteudo.style.display = "none";
    } else {
        pontosConteudo.style.display = "block";
    }
}








// function aparecer() {

//     const pontosFinais = document.querySelector('#pontosFinaiss');
//     const pontos = document.querySelector('.pontos');
//     const pontosConteudo = document.querySelector('.pontos-conteudo');
//     const pontosImg = document.querySelector('.pontos-img');

//     const valorRecuperado = localStorage.getItem('pontosResgatados');

//     if(pontosConteudo.style.display==="block"){
//         pontosConteudo.style.display="none";
//     } else{
//         pontosConteudo.style.display = "block"
//         pontosFinais.innerHTML=localStorage.getItem('pontosResgatados');
//     }




//     // let spann = document.createElement("span")

//     // if (pontosConteudo.style.display === "block") {
//     //     pontosConteudo.style.display = "none"
//     //     spann.textContent = localStorage.getItem('pontosResgatados');
//     //     pontosFinais.appendChild(spann)
//     // } else {
//     //     pontosConteudo.style.display = "block" 
//     //     spann.textContent = localStorage.getItem('pontosResgatados');
//     //     pontosFinais.appendChild(spann)
        
//     //     // pontosFinais.innerHTML = localStorage.getItem('pontosResgatados')
//     //     // pontosFinais.textContent = valorRecuperado
//     // }    
//     // pontosFinais = document.write(valorRecuperado);
//     // document.write

   
// }