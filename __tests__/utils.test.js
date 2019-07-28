import { tempConverter } from '../utils'

const tempK = 256

test('Test Temperature converter', () => {
    expect(tempK).toEqual(expect.any(Number))
    expect(tempConverter(tempK)).toBe('256 K')
    expect(tempConverter(tempK, 'C')).toBe('-17 C')
    expect(tempConverter(tempK, 'F')).toBe('1 F')
    expect(tempConverter(tempK, 'K')).toBe('256 K')
})