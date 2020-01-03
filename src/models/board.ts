import { Topic } from "./topic";

export class Board {
    boardId: number;
    primaryInfo: string;
    created: Date;
    topic: Topic;
    boardName: string;
    constructor(boardId: number, primaryInfo: string, created: Date, topic: Topic, boardName: string ) {
        this.boardId = boardId;
		this.primaryInfo = primaryInfo;
        this.created = created;
        this.topic = topic;
        this.boardName = boardName;
    }
}
