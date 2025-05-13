let count1 = 0

function increase() {
  count1++
  document.getElementById('count1').innerHTML = count1
}


function reset() {
  count1 = 0
  document.getElementById('count1').innerHTML = count1
}


function decrease() {
  count1--
  document.getElementById('count1').innerHTML = count1
}


if (count1 == 0) {
    count1.innerHTML = red
}