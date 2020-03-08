
const mult = (i, j) => { return i*j }

const updateWithAdd = async (event) => {
  document.querySelector('#result').innerHTML = ''
  
    const i = parseInt(document.querySelector('#firstInput').value)
    const j = parseInt(document.querySelector('#secondInput').value)
    const ans = `Total space required is ${mul(i, j)}.`
    document.querySelector('#result').innerHTML = ans
  }

  document.addEventListener('click', event => {
  if (event.target && event.target.id === 'addButton') { updateWithAdd(event) }
})
