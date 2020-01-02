export class User {
    userId: number;
    username: String;
    firstName: String;
    lastName: String;
    email: String;
    created: Date;
    password: String;
    constructor(userId:number, username: String, firstName: String, lastName: String, email: String, created: Date, password: String){
        this.userId = userId
        this.username = username
        this.firstName = firstName
        this.lastName = lastName
        this.email = email
        this.created = created
        this.password = password
    }
}