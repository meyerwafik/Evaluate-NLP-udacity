
import{checkURL} from "../js/checkURL";
describe('Test check url functionality', () => {
    test('Testing the checkUrl function defined or not', () => {
        expect(checkURL).toBeDefined()
    
    })

    test('Testing the checkUrl function return false for invalid url', () => {
        expect(checkURL("https://www.facebook.com/")).toBeTruthy()
      
    })

    test('Testing the checkUrl function return true for valid url', () => {
        expect(checkURL("Hello,Meyer")).toBeFalsy()
      
    })
})
