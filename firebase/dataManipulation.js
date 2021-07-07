const { database } = require('./firebase')

const addDataToDatabase = ({ uid, pid, category, name, date, subCategory, amount }) => {
    database.ref(`/users/${uid}/history/${date}/${pid}`).set({
        productName: name,
        category: category,
        subCategory: subCategory,
        amount
    }).then(() => {
        console.log('Data Saved Successfully.')
    }).catch((error) => {
        console.log(error)
    })
}

const fetchNecessaryData = async (uid) => {
    return new Promise((resolve, reject) => {
        database
            .ref(`/users/${uid}/history`)
            .once('value')
            .then((snapshot) => {
                let data = ''
                snapshot.forEach((date) => {
                    date.forEach((product) => {
                        const { productName, category = '', subCategory = '' } = product.val()

                        data += (`${date.key},${product.key},${productName},${category},${subCategory} \n`)
                    })
                })
                resolve(data)
            })
    })
}

module.exports = {
    addDataToDatabase,
    fetchNecessaryData
}