const mockAxios = {
    get: jest.fn(() => Promise.resolve({data: {}}))
}

mockAxios.create = jest.fn(() => mockAxios)

export default mockAxios