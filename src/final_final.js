stack = []
function update_last_value (lastValue = 0) {
  console.log(stack)
  document.getElementById('lastvalue').innerHTML = stack.join('  ')
}
// function to add items and display screen
function display_screen (val) {
  document.getElementById('screen').value += val
}
function equal_to () {
  console.log(stack)
  num = document.getElementById('screen').value
  oper_old = stack.pop()
  num_old = stack.pop()
  // console.log(num, oper_old, num_old)
  res = calci(parseInt(num_old), oper_old, parseInt(num))
  // Updateing last value
  document.getElementById('lastvalue').innerHTML = '0'
  document.getElementById('screen').value = res
}
//  function to calcualte value
function calci (a, oper, b) {
  switch (oper) {
    case '+':
      return a + b
    case '-':
      return a - b
    case '*':
      return a * b
    case '/':
      return a / b
    case '%':
      return a % b
  }
}
// when operator is clicked
function operator_function (operator) {
  // Last value
  // update_last_value(0)
  //value on screen
  num = document.getElementById('screen').value
  document.getElementById('screen').value = ''
  if (num != '') {
    if (stack.length > 1) {
      // updates value
      // get the last value  and operator stored in stack
      //then push the operator recived and caluclated value to the Stack
      oper_old = stack.pop()
      num_old = stack.pop()
      console.log(
        'OPERAND =>> ' + oper_old,
        'NUMBER =>> ' + num_old,
        'CUrrent Number' + num
      )

      res = calci(parseInt(num_old), oper_old, parseInt(num))
      console.log('res =>> ' + res)
      stack.push(res)
      stack.push(operator)
      update_last_value(res)
    } else {
      stack.push(num)
      stack.push(operator)
      update_last_value(num)
      console.log(
        num +
          '  Else ConDiton Pusshed in stack' +
          operator +
          'operator  pussed '
      )
    }
  }
}
