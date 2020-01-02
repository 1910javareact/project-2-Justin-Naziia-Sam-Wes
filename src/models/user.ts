export class User {
    userId: number;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    created: Date;
    password: string;
    constructor(userId: number, username: string, firstName: string, lastName: string, email: string, created: Date, password: string) {
        this.userId = userId;
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.created = created;
        this.password = password;
    }
}