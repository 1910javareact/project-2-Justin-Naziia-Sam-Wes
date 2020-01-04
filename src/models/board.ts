export class Board {
    boardId: number;
    boardName: String;
    primaryInfo: String;
    created: Date;
    topicId: number;
    constructor(boardId: number, boardName: String, primaryInfo: String, created: Date, topicId: number){
        this.boardId = boardId;
        this.boardName = boardName;
        this.primaryInfo = primaryInfo;
        this.created = created;
        this.topicId = topicId;
    }
}