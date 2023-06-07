import {SubscriptionDto} from "../model/interfaces";

export default class SubscriptionUtil {

    private static setCurrentPrice(discountDuration?: number | undefined, startTime?: number): boolean {
        startTime = startTime??0;
        discountDuration = discountDuration??0;
        const between: Date = new Date(Date.now() - startTime);
        const months: number = ((between.getFullYear() - 1970) * 12 - between.getMonth());
        if(months <= discountDuration){
            return true;
        }
        return false;
    }
    public static getSubscriptionCurrentPrice(subscription: SubscriptionDto){
        return this.setCurrentPrice(subscription.offer?.discountDurationMonths, subscription.startDate) ? subscription.offer?.discountPrice : subscription.offer?.basePrice
    }

    public static getSubscriptionContractType(subscription: SubscriptionDto){
        return subscription.subscriptionContract ? "vezava" : "naročnina";
    }
}