let Left = document.getElementById ('Left')
let Right = document.getElementById ('Right')

window.addEventListener ('scroll', () =>{
    let value =window.scrollY;
    console.log(value)


    Left.style.top =value *2.5 +'px'
    Right.style.top= value *2.5 +'px'
    
})
