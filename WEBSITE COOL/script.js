const pbut1=document.getElementById("pb1"); 
let flag=false; 
let ps5counter=0;
function celeb(){   
    if (flag!=true){ 
        const img = document.createElement("img"); 
        img.src="celebration.gif"; 
        img.alt="celebration"; 
        img.id="esquerdo"; 
        document.body.appendChild(img);
        const img2 = document.createElement("img"); 
        img2.src="celebration.gif";
        img2.id="direito";
        document.body.appendChild(img2);
        const okbut = document.createElement("button");
        okbut.id="ok";
        okbut.textContent="CLAIM!";
        document.body.appendChild(okbut);
        const rwdtop=document.createElement("img");
        rwdtop.src="ps5.png";
        rwdtop.id="rewards";
        document.body.appendChild(rwdtop);
        okbut.onclick=function (){
            document.getElementById("esquerdo").remove();
            document.getElementById("direito").remove();
            document.getElementById("ok").remove();
            document.getElementById("rewards").remove();
            flag=false;
            seta.style.left="-76px";
            ps5counter++;
            const pontos=document.getElementById("pontos");
            pontos.textContent=ps5counter;
            
        }
    }
}
//add a counter of how many PS5s the user claimed
pbut1.onclick=function(){ 

    const seta=document.getElementById("seta");
    seta.style.left="10000px";
    celeb();
    flag=true;

} 





  



    



