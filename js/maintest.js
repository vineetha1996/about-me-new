QUnit.module('MAIN MODULE', {})  // group all these tests together

// QUnit.test('TEST first number validation', assert => {
//     const input = document.querySelector('#firstNumber').value;
//     const warning = document.querySelector('#firstWarning').value;
//     console.log("input :"+input);
//     console.log("warning :"+warning);
// })

QUnit.test('TEST mult', assert => {
    assert.equal(mult(1, 1), 1, 'Positive integers')
    assert.equal(mult(2, -1), null, 'Negative integers')
    assert.equal(mult(0, 10), null, 'Invalid inputs')
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
