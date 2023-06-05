import {UserController} from "./controllers/UserController";
import {OffersController} from "./controllers/OffersController";
import {SubscriptionController} from "./controllers/SubscriptionController";

export class Client {
    private readonly authKey?: string;

    public readonly offersApi: OffersController;
    public readonly subscriptionApi: SubscriptionController;
    public readonly UserApi: UserController;

    constructor(authKey?: string) {
        this.authKey = authKey;
        this.subscriptionApi = new SubscriptionController(authKey);
        this.offersApi = new OffersController(authKey);
        this.UserApi = new UserController(authKey);
    }


}