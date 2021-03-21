import {handleSubmit} from "../js/formHandler"
import 'babel-polyfill'

describe('Client Test', () => {
    test('Testing the handleSubmit function defined or not', () => {
    expect(handleSubmit).toBeDefined()
  
}),
test('Should be a function', () => {
    expect(typeof handleSubmit).toBe("function");
})
})
