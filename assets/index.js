$(document).ready(function(){
  
    var $randomnbr = $('.nbr');
    var $timer= 10;
    var $it;
    var $data = 0;
    var index;
    var change;
    var letters = ["S", "O", "R", "T", "E", "IO", "D", "E", " ", "N","O","MES",];
    
    $randomnbr.each(function(){
        
      change = Math.round(Math.random()*100);
      $(this).attr('data-change', change);
      
    });
    
    function random(){
      return Math.round(Math.random()*9);
    };
    
    function select(){
      return Math.round(Math.random()*$randomnbr.length+1);
    };
    
    function value(){
      $('.nbr:nth-child('+select()+')').html(''+random()+'');
      $('.nbr:nth-child('+select()+')').attr('data-number', $data);
      $data++;
      
      $randomnbr.each(function(){
          if(parseInt($(this).attr('data-number')) > parseInt($(this).attr('data-change'))){
            index = $('.ltr').index(this);
            $(this).html(letters[index]);
            $(this).removeClass('nbr');
          }
      });
      
    };
    
    $it = setInterval(value, $timer);
      
  });

const btnSort = document.querySelector(".bottonSort")
const textarea = document.querySelector("textarea")
const tagResult = document.querySelector(".result p")
const pupUpResult = document.querySelector(".result")
const btnClose = document.querySelector(".close")

function getDateForm(){
    const valorCamp = textarea.value
    const listNames = valorCamp.split(",")
    const sizeArray = listNames.length
    const positionName = generateRandomNumber(sizeArray)
    const name = listNames[positionName]
    showResult(name)

    textarea.value = ""
}

btnSort.addEventListener("click", getDateForm)


function generateRandomNumber(sizeArray){
    return Math.floor(Math.random() * (sizeArray - 0) +0)
}

function showResult(name){
    tagResult.innerText = `Resultado: ${name}`
    pupUpResult.classList.add("showResult")
}

function closePopUp(){
    pupUpResult.classList.remove("showResult")
}

btnClose.addEventListener("click", closePopUp)

