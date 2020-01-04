

export class Topic {
    topicId: number
    topicName: String
    created: String
    topicBoards: []
    constructor(topicId: number, topicName: String, created: String, topicBoards: []){
        this.topicId = topicId
        this.topicName = topicName
        this.created = created
        this.topicBoards = topicBoards
    }
    
}