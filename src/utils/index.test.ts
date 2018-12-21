import { s } from '.'

const test1 = true && 'style'
const test2 = false && 'nope'
const test3 = 'yep'

it('properly concatenates conditional styles', () => {
    expect(s(test1)).toBe('style')
    expect(s(test1, test2)).toBe('style')
    expect(s(test1, test1)).toBe('style style')
    expect(s(test1, test2, test3)).toBe('style yep')
})
