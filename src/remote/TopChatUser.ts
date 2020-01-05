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
                body: 'Something went wrong'
            }
        }
    } catch (e) {
        console.log(e);
        throw new Error('Something went wrong')
    }
}

export async function submitRegisterUser(userId: number, username: string, firstName: string, lastName: string, email: string, created: Date, password: string) {
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
                body: 'Something went wrong'
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
                status: response.status,
                body: 'Something went wrong'
            }
        }
    } catch (e) {
        console.log(e);
        throw new Error('Something went wrong')
    }
}
