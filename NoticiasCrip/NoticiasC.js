window.onload=function(){
    var myInf = document.getElementById('inf');

    myInf.onclick = function(){
        var section = document.getElementsByClassName('inf');
        for (i=0;i<section.length;i++){
            if (section[i].style.display =='block'){
                section[i].style.display = 'none';
                document.getElementById("inf").innerHTML="Leer Mas"
            }
            else{
                section[i].style.display = 'none';
            }
        }
    }
}

