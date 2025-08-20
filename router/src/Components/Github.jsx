import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/PRNC01')
    //     .then(respone => respone.json())
    //     .then(data => {setData(data)
    //          console.log(data);
    //     })
    // }, [])

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
        Github ID: {data.login}
        <br />
        Github Followers: {data.followers}
        <img src={data.avatar_url} alt="Git Img" />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const responce = await fetch('https://api.github.com/users/PRNC01')
    return responce.json()
}