import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from './practice'

test('turns "cat" into "Cat', ()=> {
    expect(capitalize('cat')).toBe('Cat')
})