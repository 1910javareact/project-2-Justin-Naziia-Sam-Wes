import { client } from "./TopChatClient"

export async function submitBoard(boardId: number, boardName: string, primaryInfo: string, created: Date, topic: number) {
    const submit = {
        boardId,
        boardName,
        primaryInfo, 
        created,
        topic
    }
    try {
        const response = await client.post(`/board/create`, submit)
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

export async function getBoard(boardId: number) {
    try {
        const response = await client.get(`/board/view-board?input=${boardId}`)
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
        throw new Error('Something went wrong')
    }
}

export async function getAllThoughtAPI(boardId: number) {
    try {
        const response = await client.get(`/thought/view_thoughts?input=${boardId}`)
        if(response.status === 200) {
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
        throw new Error('Something went wrong')
    }
}

export async function apiPostThought(thoughtId: number, thought: string, created: Date, boardId: number) {
    let newThought = {
        thoughtId,
        thought,
        created,
        boardId
    }
    try {
        const response = await client.post(`/thought/`, newThought)
        if (response.status === 200){
            return {
                status: response.status,
                body: response.data
            }
        } else {
            return {
                status: response.status,
                body: 'Probably added an extra s somewhere'
            }
        } 
    } catch(e) {
      throw new Error('Dont look in eclipse')      
    }
}