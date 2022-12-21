import React, { useEffect, useState } from 'react'
import userApi from '../../Service/userApi'
import './styles.css'

const ManagerUser = () => {

    const makeRequest = async () => {
        try {
            const data = await userApi.getUser()
            console.log(data);
        } catch (error) {
            throw error;

        }
    }
    makeRequest()

    return (
        <div className='user'>
            <h1>ManagerUser</h1>
        </div>
    )
}

export default ManagerUser