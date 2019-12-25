const chai = require('chai')
const chaihttp = require('chai-http')
const should = chai.should()

chai.use(chaihttp)

describe('tests', () => {

    describe('/GET max', () => {
        it('get the maximum value from the database', (done) => {
            chai.request(`http://${process.env.SERVER}:${process.env.PORT}`).get('/api/max')
            done()
        })
    })

    describe('/PUT item', () => {
        it('creating an item in the database', (done) => {
            chai.request(`http://${process.env.SERVER}:${process.env.PORT}`).put('/api/add/test-title/100')
            done()
        })
    })

    describe('/DELETE item', () => {
        it('delete item from database', (done) => {
            chai.request(`http://${process.env.SERVER}:${process.env.PORT}`).delete('/api/del/100')
            done()
        })
    })

})