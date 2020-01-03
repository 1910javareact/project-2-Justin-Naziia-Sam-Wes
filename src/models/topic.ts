
export class Topic {
    topicId: number;
    topicName: string;
    created: Date;
    topicBoards: Topic[];
    constructor(topicId: number, topicName: string, created: Date, topicBoards: Topic[]) {
        this.topicId = topicId;
		this.topicName = topicName;
		this.created = created;
		this.topicBoards = topicBoards;
    }
}
