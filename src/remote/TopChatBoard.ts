import { client } from "./TopChatClient"

export async function submitBoard(boardId: number, boardName: string, primaryInfo: string, created: Date, topicId: number) {
    const submit = {
        boardId,
        boardName,
        primaryInfo, 
        created,
        topicId
    }
    try {
        const response = await client.post(`/board/create`, submit)
        if (response.status === 201) {
            return {
                status: response.status,
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