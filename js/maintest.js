QUnit.module('MAIN MODULE', {})  // group all these tests together

QUnit.test('TEST add', assert => {
  assert.equal(mult(1, 2), 2, 'Positive integers')
  assert.equal(mult(8,-2), -16, 'Mixed')
  assert.equal(mult(-1, -7), 7, 'Negative integers')
  assert.equal(mult(-1, 10), -10, 'Mixed')
  assert.equal(mult(0,3),0, 'zero')
})

QUnit.config.autostart = false  // sync = false; start after loading html

window.addEventListener('load', () => {
  const appURL = '../index.html'
  const openingTag = '<main class="container mt-5 flex-fill">'
  const closingTag = '</main>'
  fetch(appURL, { method: 'GET' })
    .then(response => {
      return response.text() // returns promise
    })
    .then(txt => {
      const start = txt.indexOf(openingTag)
      const end = txt.indexOf(closingTag) + closingTag.length
      const html = txt.substring(start, end)
      const qunitFixtureBody = document.getElementById('qunit-fixture')
      qunitFixtureBody.innerHTML = html
      console.info(qunitFixtureBody)
      QUnit.start()
    })
    .catch(error => {
      console.error('error:', error);
      QUnit.start()
    })
})
function mult(x,y){
    return x*y
}
QUnit.test("TEST first number validation", assert => {
  const input = document.querySelector('#firstInput')
  const warning = document.querySelector('#firstWarning')
  input.value = "a";
  assert.equal(input.value, "a", "Bad value assigned")
  assert.strictEqual(input.checkValidity(), false, "Correctly fails validation")
  input.focus()
  input.blur()
  assert.strictEqual(warning.innerHTML, 'Invalid input', `Correctly adds warning ${warning}`)
})

