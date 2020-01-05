export class Board {
    boardId: number;
    boardName: string;
    primaryInfo: string;
    created: Date;
    topicId: number;
    constructor(boardId: number, boardName: string, primaryInfo: string, created: Date, topicId: number){
        this.boardId = boardId;
        this.boardName = boardName;
        this.primaryInfo = primaryInfo;
        this.created = created;
        this.topicId = topicId;
    }
}