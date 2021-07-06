import React, { useState } from 'react'
import moment from 'moment'
import { addDataToDatabase } from '../../firebase/dataManipulation'

const AddData = () => {

    const [uid, setUID] = useState('')
    const [pid, setPID] = useState('')
    const [pName, setPName] = useState('')
    const [category, setCategory] = useState('')
    const [subCategory, setSubCategory] = useState('')
    const [date, setDate] = useState(moment().format("YYYY-MM-DD"))

    const resetForm = () => {
        setUID('')
        setPID('')
        setPName('')
        setCategory('')
        setSubCategory('')
        setDate(moment().format("YYYY-MM-DD"))
    }

    const submitEventListener = (e) => {
        e.preventDefault()
        addDataToDatabase({
            uid,
            pid,
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
                <input type="text" placeholder="User ID" value={uid} onChange={(e) => setUID(e.target.value)} />
                <input type="text" placeholder="Product ID" value={pid} onChange={(e) => setPID(e.target.value)} />
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