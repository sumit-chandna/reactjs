import React, { createContext, useEffect, useState } from 'react'

const GithubContext = createContext()
export const GithubProvider = ({ children }) => {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const fetchUsers = async () => {
        const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`,
            {
                headers: {
                    Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
                }
            }
        )
        const data = await response.json()
        setUsers(data)
        setIsLoading(false)
    }
    useEffect(() => {
        fetchUsers()
    }, [])
    return <GithubContext.Provider value={{
        users,
        isLoading
    }}>
        {children}
    </GithubContext.Provider>
}
export default GithubContext