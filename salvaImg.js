const inputImagem = document.getElementById('file_input')
        const salvaImg = document.getElementById('profile_image')

        inputImagem.addEventListener('change' , function(){
            const file = inputImagem.files[0];
            const reader = new FileReader();
        
            reader.onload = function(e) {
                const imgBase = e.target.result;
                localStorage.setItem('imagem', imgBase);
                salvaImg.src = imgBase
            }

            reader.readAsDataURL(file);
        })

        window.addEventListener('load', function(){
            const imgSalva = localStorage.getItem('imagem');
            if (imgSalva) {
                salvaImg.src = imgSalva;
            }
        })