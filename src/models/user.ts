export class User {
<<<<<<< HEAD
    user_id: number;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    created: Date;
    password: string;
    constructor(user_id: number, username: string, first_name: string, last_name: string, email: string, created: Date, password: string) {
        this.user_id = user_id,
        this.username = username,
        this.first_name = first_name,
        this.last_name = last_name,
        this.email = email,
        this.created = created,
=======
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
>>>>>>> 3a3fca3390a4145c46aa3a4a316c6f503dbb8ff9
        this.password = password
    }
}