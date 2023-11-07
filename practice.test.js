import {
  capitalize, reverseString, calculator, caesarCipher, analyzeArray,
} from './practice';

test('turns "cat" into "Cat', () => {
  expect(capitalize('cat')).toBe('Cat');
});

test('turns "book" into "Book"', () => {
  expect(capitalize('book')).toBe('Book');
});

test('Reverses buffalo', ()=>{
    expect(reverseString('buffalo')).toBe('olaffub');
})

test('Reverses Longwordsorta', ()=>{
    expect(reverseString('Longwordsorta')).toBe('atrosdrowgnoL');
})

test('Addition', ()=>{
    expect(calculator.add(12,7)).toBe(19)
})

test('Subtraction', ()=>{
    expect(calculator.subtract(1312,34)).toBe(1278)
})

test('Division', ()=>{
    expect(calculator.divide(24,3)).toBe(8)
})

test('Multiplication', ()=>{
    expect(calculator.multiply(21,7)).toBe(147)
})

test('Cipher test', ()=>{
    expect(caesarCipher('This is hard!', 3)).toBe('Wklv lv kdug!')
})

test('Cipher test overflow', ()=>{
    expect(caesarCipher('xyzzyx', 3)).toBe('abccba')
})

test('Analyze array', ()=>{
    expect(analyzeArray([21,755,2112,765,9])).toStrictEqual({average:732.4,min:9,max:2112,length:5})
})