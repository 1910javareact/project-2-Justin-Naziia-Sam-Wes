

export class Topic {
    topicId: number
    topicName: String
    created: Date
    topicBoards: []
    constructor(topicId: number, topicName: String, created: Date, topicBoards: []){
        this.topicId = topicId
        this.topicName = topicName
        this.created = created
        this.topicBoards = topicBoards
    }
    
}