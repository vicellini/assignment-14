var forEach = function(arr, func){
   for(var i = 0 ; i < arr.length; i++){
       func(arr[i], i, arr)
   }
}


document.querySelector("#inject-html button").addEventListener('click',function(){
  // TASK #1
  var answerBoxEl = document.querySelector('#inject-html .answer-box')
  answerBoxEl.innerHTML = "<h2>Here is some text for you!!</h2>"
})

document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2
  var answerPTagWithValue = document.querySelector('#compoundInvestment')
  // you do the rest
  var number = parseInt(answerPTagWithValue.textContent);
  var multiplyYo = number * 2;
  answerPTagWithValue.innerHTML = multiplyYo;
})


document.querySelector("#color-circle button").addEventListener('click',function(){
  // TASK #3
  var colorChangeCircleEl = document.querySelector('#circle-bw')
  if(colorChangeCircleEl.style.backgroundColor === "rgb(255, 255, 255)"){
    colorChangeCircleEl.style.backgroundColor = "#000";
  }else{
    colorChangeCircleEl.style.backgroundColor = "rgb(255, 255, 255)";
  }

})

document.querySelector("#blow-up button").addEventListener('click',function(){
  // TASK #4}
  var letsGetSwole = document.querySelector('.circle-red')
  var letsGetSwoleDeets = window.getComputedStyle(letsGetSwole)
  var numericWidth = parseInt(letsGetSwoleDeets.width)
  var numericHeight = parseInt(letsGetSwoleDeets.height)
  // console.log(numericWidth, numericHeight)
  if(numericWidth >= 40 && numericHeight >= 40){
    var swoleWidth = numericWidth * 2;
    var swoleHeight = numericHeight *2;
    letsGetSwole.style.width = swoleWidth + "px";
    letsGetSwole.style.height = swoleHeight + "px";
  }
  if(numericWidth >= 320 && numericHeight >= 320){
    letsGetSwole.style.width = "40px"
    letsGetSwole.style.height = "40px"
  }
})

document.querySelector("#remove button").addEventListener('click',function(){
  // TASK #5
  var wholeListEl = document.querySelector('#user-list');
  var allUsersEl = document.querySelectorAll('.exercise-item li');
  forEach(allUsersEl, function(liEl, i, theArr){
    var userStatus = liEl.className
    if(userStatus === "inactive"){
      wholeListEl.removeChild(liEl)
    }

  })

})


document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #6
  var entireEl = document.querySelector('#reverse-squares .answer-box')
  var squareListEl = document.querySelectorAll('.square')
  entireEl.innerHTML=''
  for(var i = squareListEl.length - 1; i >= 0; i--){
    var reversedSpanTags = squareListEl[i];
    var weirdString = "<span class='" + reversedSpanTags.className + "'>" + reversedSpanTags.textContent + "</span>"
    entireEl.innerHTML += weirdString
    console.log(entireEl)
  }


})


document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #7
  var outerEl = document.querySelector('#tasks')
  var taskListEl = document.querySelectorAll('#tasks li')
  outerEl.innerHTML = ''
  forEach(taskListEl, function(liEl, i, theArr){
    var listStr = liEl;
    var soloStr = listStr.textContent;
    var backwardStr = soloStr.split('').reverse().join('')
    console.log(backwardStr)
    outerEl.innerHTML += '<li>' + backwardStr + '</li>';
  })
})

document.querySelector("#cycle-image button").addEventListener('click',function(){
   //TASK #8
   var imageTestEl = document.querySelector('#city-img.exercise-item')
   var imageNumber = imageTestEl.src.slice(75, 76)
   if(imageNumber%10)
   imageNumber++
   imageTestEl.src = "./images/city-photo-" + imageNumber + ".jpg"
   console.log(imageNumber)


})
