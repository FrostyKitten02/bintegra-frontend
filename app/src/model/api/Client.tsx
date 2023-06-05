import {UserController} from "./controllers/UserController";
import {OffersController} from "./controllers/OffersController";

export class Client {
    private readonly authKey?: string;

    public readonly offersApi: OffersController;
    public readonly UserApi: UserController;

    constructor(authKey?: string) {
        this.authKey = authKey;
        this.offersApi = new OffersController();
        this.UserApi = new UserController(authKey);
    }


}