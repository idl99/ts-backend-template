import hello from '../src'

describe('Hello world', () => {
    it('should return welcome message', () => {
        const welcomeMessage = hello()
        expect(welcomeMessage).toBe('Hello from Typescript')
    })
})
