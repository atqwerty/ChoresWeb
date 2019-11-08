import { User } from '../user/user'

export class Board {
    private title: string
    private description: string
    private user: User

    constructor(title: string, user: User, descriprion?: string) {
        this.title = title;
        this.user = user;
        this.description = descriprion;
    }

    public getTitle = () => {
        return this.title
    }

    public getUser = () => {
        return this.title
    }

    public getDescription = () => {
        return this.title
    }
}
