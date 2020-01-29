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
