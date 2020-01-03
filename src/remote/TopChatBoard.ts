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
                body: response.data
            }
        }
    } catch (e) {
        console.log(e);
        throw new Error('Something went wrong')
    }
}