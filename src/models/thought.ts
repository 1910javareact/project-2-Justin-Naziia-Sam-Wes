export class Thought {
    thoughtId: number
    thought: String
    boardId: number
    created: Date
    constructor(thoughtId: number, thought: String, boardId: number, created: Date){
        this.thoughtId = thoughtId
        this.thought = thought
        this.boardId = boardId
        this.created = created  
    }
}