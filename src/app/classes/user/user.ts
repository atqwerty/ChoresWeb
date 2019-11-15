export class User {
    private id: string
    private email: string
    private name: string
    private surname: string
    private refreshToken: string
    private token: string

    constructor (id: string, email: string, token: string, refreshToken: string, name?: string, surname?: string) {
        this.id = id;
        this.email = email;
        this.name = name;
        this.surname = surname;
        this.token = token;
        this.refreshToken = refreshToken;
   }

   public getId = () => {
       return this.id
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

    public getToken = () => {
        return this.token
    }

    public ge

    get _token() {
        return this.token
    }
}
