const { describe } = require('node:test')
const {Circle, Triangle, Square} = require('./shapes')

describe('circle', {} => {
    test('renders correctly', () => {
        const shape = new Circle();
        var color =('blue')
        shape.setColor(color);
        expect(shape.render()).toEqual('')
    })
})