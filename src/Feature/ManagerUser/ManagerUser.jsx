import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import userApi from '../../Service/userApi'
import useRequest from '../../Slice/useRequest'
import { getUser } from '../../Slice/userSlice'
import './styles.css'

const ManagerUser = () => {
    const dispacth = useDispatch()
    const { data: user } = useRequest(() => userApi.getUser())
    console.log(user);
    useEffect(() => {
        dispacth(getUser)
    }, [])




    // const makeRequest = async () => {
    //     try {
    //         const data = await userApi.getUser()
    //         console.log(data);
    //     } catch (error) {
    //         throw error;

    //     }
    // }
    // makeRequest()

    return (
        <div className='user'>
            <h1>ManagerUser</h1>
        </div>
    )
}

export default ManagerUser