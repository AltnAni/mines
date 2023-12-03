
    let starter = false  // xaxi kargavichaki indikator

    let hashiv = 0
    const lis =  document.querySelectorAll('li')
    
function startGame(){
      
    st.style.background = 'black'
    if(starter === false ){
       
    starter === false ? 
      starter = true :
      starter = false

    hashiv = 0

    if(+stavka.value >= 100 && +userhashiv.value > +stavka.value){
        userhashiv.value = userhashiv.value  -  stavka.value
        }

        lis.forEach(e=>{
            e.innerHTML = ''
            e.style.background = "white"
        })
    }

}

 let num1 = Math.floor(Math.random()*24) 
 let num2 = Math.floor(Math.random()*24) 
 let num3 = Math.floor(Math.random()*24) 

 let shahuyt = 0

function colors(e){
   if (e.style.background!=="green"){
    hashiv += +stavka.value * 0.06 
    console.log(hashiv);
    shahuyt = hashiv + +stavka.value

   }


    if(starter === true ){
    num1 === num2 ||num1 === num3||num2 === num3?colors(e):
        lis[num1].innerHTML = `<img id="nkar" width="100%" src="https://www.pngmart.com/files/7/Bomb-Transparent-PNG.png">`
        lis[num2].innerHTML = `<img id="nkar" width="100%" src="https://www.pngmart.com/files/7/Bomb-Transparent-PNG.png" alt="55">`
        lis[num3].innerHTML = `<img id="nkar" width="100%" src="https://www.pngmart.com/files/7/Bomb-Transparent-PNG.png" alt="55">`
    
    e.innerHTML === '<img id="nkar" width="100%" src="https://www.pngmart.com/files/7/Bomb-Transparent-PNG.png" alt="55">'
        ? document.querySelectorAll('img').forEach(e=>{
        e.style.display = "block"
        hashiv = 0
        shahuyt = 0
        stopGame()
        new Audio('./mp3/mixkit-trailer-screaming-people-annihilation-351.wav').play()
   
        }) 
        +
         lis.forEach(e=>{
            e.style.background = "white"
            num1 = Math.floor(Math.random()*24) 
            num2 = Math.floor(Math.random()*24) 
            num3 = Math.floor(Math.random()*24)
            hashiv = 0
            starter = false
        })  
    :   new Audio('./mp3/D2HAXJZ-new-message-cling.mp3').play()

    vayvay.value = shahuyt
    e.style.background = 'green' }   
}

function stopGame(){
    st.style.background = ' rgb(83, 11, 107)'
    userhashiv.value = +shahuyt + +userhashiv.value
    starter = false
}







