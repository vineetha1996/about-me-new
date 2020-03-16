function mult(i, j){
  if (i > 0 && j > 0){
    return i*j;
  } else {
    return null;
    ans = "Please enter valid length and breath dimensions";
  }
  
}

function updateWithMult(){
  document.querySelector('#result').innerHTML = ''
  let ans = '', result = '';
  const i = parseInt(document.querySelector('#firstInput').value)
  const j = parseInt(document.querySelector('#secondInput').value)
  
  ans = mult(i, j);
  if( ans > 0) {
    result = "Total space required is " + ans;
  } else {
    result = "Please enter valid length and breath dimensions";
  }
  
  document.querySelector('#result').innerHTML = result;
} 

  document.addEventListener('click', event => {
    if (event.target && event.target.id === 'addButton') { 
      updateWithMult(event) 
    }
  })
