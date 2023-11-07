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
