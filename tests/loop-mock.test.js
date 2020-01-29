const {forEach} = require('../src/loop-mock');
describe('#loopMock', () => {
    const mockCallback = jest.fn(x => 42 + x);

    beforeEach(() => {
    });

    it('should call the mocked function twice', () => {

        forEach([0, 1], mockCallback);

        expect(mockCallback.mock.calls.length).toBe(2);
    });

    it('should return 0 as the first argument of the first call to the mock', () => {

        forEach([0, 1], mockCallback);

        expect(mockCallback.mock.calls[0][0]).toBe(0);
    });

    it('should return 1 as the second argument of the first call to the mock', () => {

        forEach([0, 1], mockCallback);

        expect(mockCallback.mock.calls[1][0]).toBe(1);
    });

    it('should return the return value of the first call to the mock', () => {

        forEach([0, 1], mockCallback);

        expect(mockCallback.mock.results[0].value).toBe(42);
    });


});
