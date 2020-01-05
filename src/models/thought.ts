export class Thought {
    thoughtId: number
    thought: String
    created: Date
    boardId: number
    constructor(thoughtId: number, thought: String, created: Date, boardId: number){
        this.thoughtId = thoughtId
        this.thought = thought
        this.created = created
        this.boardId = boardId
    }
}