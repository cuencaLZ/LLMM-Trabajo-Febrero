function cambiar_color_over(celda){ 
   celda.style.color="red";
   } 
function cambiar_color_out(celda){ 
   celda.style.color="";
   } 
function Click(celda){
    for (var k = 1; k < 28; k++){
        document.getElementById((k).toString()).style.display = "none";
            }
        document.getElementById(celda.attributes["class"].value).style.display = "block";
        }
var par=false; 
function parpadeo() { 
    col=par ? 'red' : 'black'; 
    document.getElementById('txt').style.color=col; 
    par = !par; 
    setTimeout("parpadeo()",500); //500 = medio segundo 
} 
window.onload=parpadeo; 
