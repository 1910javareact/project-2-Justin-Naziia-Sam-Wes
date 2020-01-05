

export class Topic {
    topicId: number
    topicName: string
    created: Date
    topicBoards: []
    constructor(topicId: number, topicName: string, created: Date, topicBoards: []){
        this.topicId = topicId
        this.topicName = topicName
        this.created = created
        this.topicBoards = topicBoards
    }
    
}