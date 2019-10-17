const logic = require('./index');

describe('logic', ()=>{

    describe('Retrieve User', ()=>{
        const username = 'escoly'

        it('should succeed on retrieving user info on existing username', async ()=>{
            const userInfo = await logic.RetrieveUser(username)
            expect(userInfo).toBeDefined
        })
    })

})

