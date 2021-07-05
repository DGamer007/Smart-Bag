import React, { useState } from 'react'
import moment from 'moment'

const AddData = () => {

    // const [uid, setUID] = useState('')
    // const [pid, setPID] = useState('')
    // const [pName, setPName] = useState('')
    // const [category, setCategory] = useState('')
    // const [subCategory, setSubCategory] = useState('')
    // const [date, setDate] = useState(moment().format("YYYY-MM-DD"))

    return (
        <form action="/add-data" method="POST">
            <input type="text" name="uid" placeholder="User ID" />
            <input type="text" name="pid" placeholder="Product ID" />
            <input type="text" name="name" placeholder="Product Name" />
            <input type="text" name="category" placeholder="Product Category" />
            <input type="text" name="subcategory" placeholder="Product Sub-Category" />
            <input type="date" name="date" />
            <button type="submit">Submit</button>
        </form>
    )
}

export default AddData