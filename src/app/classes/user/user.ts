export class User {
    private email: string
    private name: string
    private surname: string
    private token: string

    constructor (email: string, token: string, name?: string, surname?: string) {
        this.email = email;
        this.name = name;
        this.surname = surname;
        this.token = token;
   }

    public getEmail = () => {
        return this.email
    }

    public getName = () => {
        return this.name
    }

    public getSurname = () => {
        return this.surname
    }
}
