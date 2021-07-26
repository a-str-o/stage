
const { db, admin } = require('../util/admin');
const config = require('../util/config')

exports.search = (request,response) => {
    let ids =[]
    admin.firestore()
    .collection('agents')
    .get()
    .filter(agent => {
        return agent.nameEntreprise.toLowerCase().includes(this.state.filteredSearch.toLowerCase())
    })
}
