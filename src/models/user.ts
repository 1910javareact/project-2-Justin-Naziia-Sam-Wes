export class User {
    user_id: number;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    created: Date;
    password: string;
    constructor(user_id: number, username: string, first_name: string, last_name: string, email: string, created: Date, password: string) {
        this.user_id = user_id;
        this.username = username;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.created = created;
        this.password = password;
    }
}