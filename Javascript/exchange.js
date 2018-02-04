 window.onload=function(){
    var myCoinbase = document.getElementById('coinbase');
    var myBinance = document.getElementById('binance');
    var myKucoin = document.getElementById('kucoin');
    var myKraken = document.getElementById('kraken');


    myCoinbase.onclick = function(){
        var section = document.getElementsByClassName('coinbase');

        for (i=0;i<section.length;i++){
            if (section[i].style.display =='none'){
                section[i].style.display = 'block';
            }
            else{
                section[i].style.display = 'none';
            }
        }
    }

    myBinance.onclick = function(){
        var section = document.getElementsByClassName('binance');
        for (i=0;i<section.length;i++){
            if (section[i].style.display =='none'){
                section[i].style.display = 'block';
            }
            else{
                section[i].style.display = 'none';
            }
        }
    }
	
	    myKucoin.onclick = function(){
        var section = document.getElementsByClassName('kucoin');

        for (i=0;i<section.length;i++){
            if (section[i].style.display =='none'){
                section[i].style.display = 'block';
            }
            else{
                section[i].style.display = 'none';
            }
        }
    }
	
	    myKraken.onclick = function(){
        var section = document.getElementsByClassName('kraken');

        for (i=0;i<section.length;i++){
            if (section[i].style.display =='none'){
                section[i].style.display = 'block';
            }
            else{
                section[i].style.display = 'none';
            }
        }
    }
 }

