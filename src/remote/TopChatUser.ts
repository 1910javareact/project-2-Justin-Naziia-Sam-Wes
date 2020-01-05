import { client } from "./TopChatClient"

export async function userLogin(username: string, password: string) {
    try {
        const response = await client.post(`/user/login?username=${username}&password=${password}`)
        if (response.status === 200) {
            return {
                status: response.status,
                body: response.data
            }
        } else if (response.status === 401) {
            return {
                status: response.status,
                body: 'Invalid credentials'
            }
        } else {
            return {
                status: response.status,
                body: response.data
            }
        }
    } catch (e) {
        console.log(e);
        throw new Error('Something went wrong')
    }
}

export async function submitRegisterUser(userId: number, username: String, firstName: String, lastName: String, email: String, created: Date, password: String) {
    const submit = {
        userId,
        username,
        firstName,
        lastName,
        email,
        created,
        password
    }
    try {
        const response = await client.post(`/user/register`, submit)
        if (response.status === 200) {
            return {
                status: response.status,
                body: response.data
            }
        } else {
            return {
                status: response.status,
                body: response.data
            }
        }
    } catch (e) {
        console.log(e);
        throw new Error('Something went wrong')
    }
}

export const getAllSavedAPI = async (id: number) => {
    try {
        const response = await client.get(`/user/view-saved/${id}`)
        if (response.status === 200) {
            return {
                status: response.status,
                body: response.data
            }
        } else {
            return {
                status: response.status
            }
        }
    } catch (e) {
        console.log(e);
        throw new Error('Something went wrong')
    }
}
