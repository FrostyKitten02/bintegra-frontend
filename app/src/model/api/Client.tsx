import {UserController} from "./controllers/UserController";

export class Client {
    private readonly authKey?: string;

    // private readonly offersApi: OffersController;
    public readonly UserApi: UserController;

    constructor(authKey?: string) {
        this.authKey = authKey;
        // this.offersApi = new OffersController();
        this.UserApi = new UserController(authKey);
    }


}