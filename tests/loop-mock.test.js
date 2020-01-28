const {forEach} = require('../src/loop-mock');
describe('#loopMock', () => {
    beforeAll(() => {
        const mockCallback = jest.fn(x => 42 + x);
    });

    it('should call the mocked function twice', () => {

        forEach([0, 1], mockCallback);

        expect(mockCallback.mock.calls.length).toBe(2);
    })
});
