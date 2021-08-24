const moment = require('moment')
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

const fetchNecessaryDataPythonAPI = async (uid) => {
    return new Promise(async (resolve, reject) => {
        const snapshot = await database.ref(`/users/${uid}/history`).once('value')
        const rawData = snapshot.val()

        const sortedObject = Object.keys(rawData)
            .sort((a, b) => {
                if (moment(a).isAfter(b)) return -1
                return 1
            })
            .reduce((obj, key) => {
                obj[key] = rawData[key]
                return obj
            }, {})


        const initDate = Object.keys(sortedObject)[0]

        let data = ''

        for (let date in sortedObject) {
            if ((moment(date, 'YYYY-MM-DD').diff(moment(initDate, 'YYYY-MM-DD'), 'month')) * (-1) > 6) break

            for (let product in sortedObject[date]) {
                const { productName, category = '', subCategory = '', amount = 0 } = sortedObject[date][product]

                data += `"${date}","${product}","${productName}","${amount}","${category}","${subCategory}"\n`
            }
        }

        resolve(data)
    })
}

module.exports = {
    addDataToDatabase,
    fetchNecessaryDataPythonAPI
}