let section_radius = document.querySelectorAll('.section_radius')

section_radius.forEach(section_header => {
    
        section_header.addEventListener('mousemove', rotate)
        section_header.addEventListener('mouseout', rotateNone)
        
});

 function rotate(e) {
    
     const radius = this;/* .querySelector('.section_radius') */
     const halfHeight = radius.offsetHeight / 2

 radius.style.transform = `rotateX(${-(e.offsetY - halfHeight) / 5}deg) rotateY(${(e.offsetX - halfHeight) / 5}deg)`
}
 
function rotateNone(e) {
    
 const radius = this;/* querySelector('.section_radius') */
 radius.style.transform = 'rotate(0)'
 
}

let views = document.querySelector('.view')

    let cardBlock = document.querySelectorAll('.foother_title'),
    
        imgCard = views.querySelector('img');
       
        for (let i = 0; i < cardBlock.length; i++) {
            cardBlock[i].addEventListener('click', ()=>{
             
                views.classList.add('active')
                
                let imgd = cardBlock[i].querySelector('img').getAttribute('src');
                imgCard.setAttribute('src', imgd)
    
            })
        
        }
        let view__close = document.querySelector('.view__close')
        
        view__close.addEventListener('click', () => {
              
            views.classList.remove('active')
       
        })