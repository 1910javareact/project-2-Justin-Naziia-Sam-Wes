

export class Topic {
    topicId: number
    topicName: String
    created: String
    boards: [] 
    constructor(topicId: number, topicName: String, created: String, boards: []){
        this.topicId = topicId
        this.topicName = topicName
        this.created = created
        this.boards = boards
    }
    
}