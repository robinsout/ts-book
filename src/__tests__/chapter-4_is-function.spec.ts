import is from '../chapter-4_is-function';

describe('is-function', () => {
    it.each([
        ['string', 'otherstring', false],
        [true, false, false],
        [42, 42, true],
        [10, 'foo', false],
    ])('%s === %s: %s', (first, second, expected) => {
        expect(is(first, second)).toEqual(expected);
    });
    it('unlimited count of arguments', () => {

    })
});