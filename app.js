const calculator = document.querySelector('.container')
const keys = calculator.querySelector('.buttons')
const display = document.querySelector('#display')
const display2 = document.querySelector('#display2')

const calculate = (n1, operator, n2) => {
    let result = ''
    if (operator === '+') {
        result = parseFloat(n1) + parseFloat(n2)
    } else if (operator === '-') {
        result = parseFloat(n1) - parseFloat(n2)
    } else if (operator === '×') {
        result = parseFloat(n1) * parseFloat(n2)
    } else if (operator === '÷') {
        result = parseFloat(n1) / parseFloat(n2)
    } else if (operator === '%') {
        result = parseFloat(n1) % parseFloat(n2)
    } else if (operator === '√') {
        result = Math.sqrt(parseFloat(n1)) 
    } else if(operator === '²'){
        result = Math.pow(parseFloat(n1), 2);
    } else if(operator === '1/x'){
        result = 1 / parseFloat(n1)
    }
    return result
}

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target
        const action = key.dataset.action
        const keyContent = key.textContent
        const displayedNum = display.textContent
        const previousKeyType = calculator.dataset.previousKeyType
        if (!action) {
            if (displayedNum === '0') {
                display.textContent = keyContent
          } else {
                display.textContent = displayedNum + keyContent
          }
            if(previousKeyType === 'operator' && previousKeyType !== '√' && previousKeyType !== '²' && previousKeyType !== '1/x'){
                calculator.dataset.previousKeyType = ''
                display2.textContent = calculator.dataset.firstValue + calculator.dataset.operator
                display.textContent = keyContent
            }
        }
         
        if (action === '+' || action === '-' || action === '×' || action === '÷' || action === '%' || action === '√' || action === '²' || action === '1/x') {
            calculator.dataset.previousKeyType = 'operator'
            calculator.dataset.firstValue = displayedNum
            calculator.dataset.operator = action
        }

        if (action === 'decimal') {
            if (!displayedNum.includes('.')) {
                display.textContent = displayedNum + '.'
              } else if (previousKeyType === 'operator') {
                display.textContent = '0.'
              }
        }

        if(action === '1/x'){
            display.textContent = calculate(displayedNum, calculator.dataset.operator, '')
        }
        if (action === '√'){
            display.textContent = calculate(displayedNum, calculator.dataset.operator, '')
        }

        if(action === '²'){
            display.textContent = calculate(displayedNum, calculator.dataset.operator, '')
        }

        if (action === 'clear'){
            display.textContent = '0'
            display2.textContent = ' '
        }

        if (action === 'calculate') {
            const firstValue = calculator.dataset.firstValue
            const operator = calculator.dataset.operator
            const secondValue = displayedNum
            display2.textContent =' '
            display.textContent = calculate(firstValue, operator, secondValue)
        }
    }
})

