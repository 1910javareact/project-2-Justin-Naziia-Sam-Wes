export class Board {
    boardId: number;
    primaryInfo: String;
    created: Date;
    topicId: number;
    constructor(boardId: number, primaryInfo: String, created: Date, topicId: number){
        this.boardId = boardId;
        this.primaryInfo = primaryInfo;
        this.created = created;
        this.topicId = topicId;
    }
}