let allImg = document.querySelectorAll('.image')
allImg.forEach(img => {
    img.addEventListener('mouseover', function(event){
        for(let element of allImg){
            if(element != event.target){
                element.classList.add('not_active')
                element.classList.remove('active')
            }
            else{
                element.classList.add('active')
                element.classList.remove('not_active')
            }
        }
    })
    img.addEventListener('mouseleave', function(){
        this.classList.remove('active')
        checkLeave()
    })
})



function checkLeave(){
    allImg.forEach(img =>{
        if(
            img.classList.contains('active') == false
        ){
            img.classList.remove('not_active')
        }
    })
}