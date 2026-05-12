document.addEventListener('DOMContentLoaded', () => {
    VanillaTilt.init(document.querySelectorAll('.card-produto'), {
        max: 20, // inclinação máxima
        speed: 400, // velocidade da transição
        glare: true, //efeito de brilho
        "max-glare": 0.3, // intensidade do brilho
        scale: 1.05 // aumenta levemente o card no hover
    })
})