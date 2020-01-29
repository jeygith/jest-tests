const axios = require('axios');
const {Users} = require("../src/users");

jest.mock('axios');

it('should fetch users', () => {
    const users = [{name: 'Jeff'}];
    const resp = {data: users};
    axios.get.mockResolvedValue(resp);

    // axios.get.mockImplementation(() => Promise.resolve(resp))

    return Users.all().then(data => expect(data).toEqual(users));
});

describe('MockFunctions Examples', () => {
    it('should run multiple implementations of the mocked function', () => {
        const myMockFn = jest
            .fn(() => 'default')
            .mockImplementationOnce(() => 'first call')
            .mockImplementationOnce(() => 'second call');

        expect(myMockFn()).toBe('first call');
        expect(myMockFn()).toBe('second call');
        expect(myMockFn()).toBe('default');
        expect(myMockFn()).toBe('default');
    });
});

