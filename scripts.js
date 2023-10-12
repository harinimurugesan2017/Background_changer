        let wrap=document.getElementById("wrap")
        let colortext=document.getElementById("h1_hexa")
        let letter_color=document.getElementById("btns")
        
         let arr=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
      function change_color(){ 
        let str='#'
        for(let i=1;i<=6;i++){
             str=str+MakeHexa_val()
       }
        wrap.style.background=str
        colortext.innerHTML=str
        letter_color.style.color=str
    }
      

       function MakeHexa_val(){
        let index=Math.floor(Math.random()*16)
        return arr[index]

        }