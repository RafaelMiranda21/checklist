// let menu = document.querySelector(".menu");

// let listaitem = document.querySelectorAll(".item");

// window.addEventListener("scroll" , ()=>{
//     let scroll =  window.scrollY;
//     let value = window.innerHeight;
//     console.log(value);
    
//     if(scroll > 0){

//         menu.style.position = "fixed";
//         menu.style.background = "orange";
//         menu.style.transition = "all .5s linear";
//         for(let i = 0; i<listaitem.length;i++)
//         listaitem[i].style.color = "black";
//     }else{
//         menu.style.position = "unset";
//         menu.style.background = "none";
//         for(let i = 0; i<listaitem.length;i++)
//         listaitem[i].style.color = "orange";
//     }
// })


  function form(numero){
    
      let checklistarea = document.getElementsByClassName("area");
      let checklistBx = document.querySelectorAll(".checklistBx");
     let AreaSobre = document.querySelectorAll(".Area-Sobre");
     let Areachecklist = document.querySelectorAll(".Area-checklist");
     let checklist = document.querySelectorAll(".checklist");
     
     let Areainput = document.querySelectorAll(".Area-input");
    
      for(let i = 0; i<checklist.length;i++)
       checklistarea[i].style.display = "none";

    
       checklistarea[numero].style.display = "block";

  for(let i=0; i<checklist.length;i++){
       checklist[i].className = checklist[i].className.replace(" exp", "");
     Areachecklist[i].className =  Areachecklist[i].className.replace(" exp", "");
     AreaSobre[i].className = AreaSobre[i].className.replace(" exp", "");
     checklistBx[i].className = checklistBx[i].className.replace(" exp", "");
     Areainput[i].className = Areainput[i].className.replace(" exp", "");
  }
     
  }





 function Sobre(numero,form){


     let checklistBx = document.querySelectorAll(".checklistBx");
     let AreaSobre = document.querySelectorAll(".Area-Sobre");
     let Areachecklist = document.querySelectorAll(".Area-checklist");
     let checklist = document.querySelectorAll(".checklist");
     let Sobrechecklist = document.getElementsByClassName("Sobre-checklist");
     let Areainput = document.querySelectorAll(".Area-input");
     


    for(let i = 0; i < Sobrechecklist.length; i++){
        Sobrechecklist[i].style.display = "none";
    }



    
    
     checklist[form].className = checklist[form].className.replace(" exp", "");
     Areachecklist[form].className =  Areachecklist[form].className.replace(" exp", "");
     AreaSobre[form].className = AreaSobre[form].className.replace(" exp", "");
     checklistBx[form].className = checklistBx[form].className.replace(" exp", "");
     Areainput[form].className = Areainput[form].className.replace(" exp", "");

    Areainput[form].className += (" exp");
    checklist[form].className += (" exp");
    Areachecklist[form].className += (" exp");
    AreaSobre[form].className += (" exp");
    checklistBx[form].className += (" exp");

    
    Sobrechecklist[numero].style.display = "block";

   


 }

 function fechar(form){
    let checklistBx = document.querySelectorAll(".checklistBx");
    let AreaSobre = document.querySelectorAll(".Area-Sobre");
    let Areachecklist = document.querySelectorAll(".Area-checklist");
    let checklist = document.querySelectorAll(".checklist");
    let Areainput = document.querySelectorAll(".Area-input");


    checklist[form].className = checklist[form].className.replace(" exp", "");
    Areachecklist[form].className =  Areachecklist[form].className.replace(" exp", "");
    AreaSobre[form].className = AreaSobre[form].className.replace(" exp", "");
    checklistBx[form].className = checklistBx[form].className.replace(" exp", "");
    Areainput[form].className = Areainput[form].className.replace(" exp", "");
     

 
 }

 

 window.addEventListener("scroll", ()=>{
        let value = window.scrollY;
        let tamanho = window.innerHeight/2;
        let fechar = document.querySelectorAll(".fechar");

    
    
        if(value > tamanho){
            for(let i = 0; i< fechar.length; i++)
           fechar[i].style.position = "fixed";
        }else{
            for(let i = 0; i< fechar.length; i++)
            fechar[i].style.position = "absolute";
        }
        
    })