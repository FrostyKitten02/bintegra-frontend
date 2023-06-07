import {UserController} from "./controllers/UserController";
import {OffersController} from "./controllers/OffersController";
import {SubscriptionController} from "./controllers/SubscriptionController";
import {ConsultantController} from "./controllers/ConsultantController";

export class Client {
    private readonly authKey?: string;

    public readonly offersApi: OffersController;
    public readonly subscriptionApi: SubscriptionController;
    public readonly UserApi: UserController;
    public readonly consultantApi: ConsultantController;

    constructor(authKey?: string) {
        this.authKey = authKey;
        this.subscriptionApi = new SubscriptionController(authKey);
        this.offersApi = new OffersController(authKey);
        this.UserApi = new UserController(authKey);
        this.consultantApi = new ConsultantController(authKey);
    }


}