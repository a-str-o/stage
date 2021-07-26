
const { db, admin } = require('../util/admin');
const config = require('../util/config')

exports.agences = (request,response) => {
    let ids =[]
    admin.firestore().collection('agences').get().then((docs) => {
        docs.forEach(doc => {
            console.log(doc)
        ids.push(doc.id)
        })
        response.status(200).json(ids)
    })
    .catch(err => {
        console.log(err)
    })
}


