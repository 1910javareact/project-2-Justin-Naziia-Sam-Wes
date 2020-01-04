import { client } from './TopChatClient'

export async function apiGetTopicBoards() {
    const response = await client.get('/topic/home')
   try { if (response.status === 200) {
        return {
            status: response.status,
            body: response.data
        }
    } else {
        return {
            status: response.status,
            body: 'No topics 4 u'
        }
    } }
    catch(e) {
        return {
            status: response.status,
            body: 'No topics 4 u'
        }
    }
}