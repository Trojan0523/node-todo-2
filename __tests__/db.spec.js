const db = require('../db.js');
const fs = require('fs');
jest.mock('fs');


describe('db', () => {
    afterEach(() => {
        fs.clearMocks();
    })
    it('can read', async () => {
        const data = [{title: 'hi', done: true}]
        fs.setReadMock('/xxx', null, JSON.stringify(data))
        const list = await db.read('/xxx')
        expect(list).toStrictEqual(data)
    })
    it('can write', async () => {
        let fakeFile
        fs.setWriteFileMock('/yyy', (path, data, callback) => {
            fakeFile = data
            callback(null)
        })
        const list = [{title: '见人', done: true}, {title: '见朋友', done: true}]
        await db.write(list, '/yyy')
        expect(fakeFile).toBe(JSON.stringify(list) + '\n')

    })
})