import React, { useContext, useState } from 'react'
import moment from 'moment'
import uuid from 'uuid'
import SmartBagContext from '../context/SmartBagContext'
import { addDataToDatabase } from '../../firebase/dataManipulation'

const AddData = () => {
    const { auth } = useContext(SmartBagContext)
    const [pName, setPName] = useState('')
    const [category, setCategory] = useState('')
    const [subCategory, setSubCategory] = useState('')
    const [date, setDate] = useState(moment().format("YYYY-MM-DD"))

    const resetForm = () => {
        setPName('')
        setCategory('')
        setSubCategory('')
        setDate(moment().format("YYYY-MM-DD"))
    }

    const submitEventListener = (e) => {
        e.preventDefault()
        addDataToDatabase({
            uid: auth.uid,
            pid: uuid(),
            name: pName,
            category,
            subCategory,
            date
        })

        resetForm()
    }

    return (
        <div>
            <h2>Add Data</h2>
            <form onSubmit={submitEventListener}>
                <input type="text" placeholder="Product Name" value={pName} onChange={(e) => setPName(e.target.value)} />
                <input type="text" placeholder="Product Category" value={category} onChange={(e) => setCategory(e.target.value)} />
                <input type="text" placeholder="Product Sub-Category" value={subCategory} onChange={(e) => setSubCategory(e.target.value)} />
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddData