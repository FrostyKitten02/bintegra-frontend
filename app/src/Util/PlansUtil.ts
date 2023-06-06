import {OfferDto} from "../model/ResponseDtos";

export default class PlansUtil {

    public static getOfferMobileData(offer: OfferDto): string[] {
        const features: string[] = [];

        if (offer.mobileData === -1)
            features.push("Neomejeno število prenosa podatkov v Sloveniji.");
        else if (offer.mobileData !== undefined && offer.mobileData !== 0)
            features.push(offer.mobileData.toString() + " GB prenosa podatkov v Sloveniji.");

        if (offer.mobileSms === -1)
            features.push("Neomejeni SMS-i.");
        else if (offer.mobileSms !== undefined && offer.mobileSms !== 0)
            features.push(offer.mobileSms.toString() + " SMS-ov v Sloveniji.");

        if (offer.mobileMinutes === -1)
            features.push("Neomejeni klici v Sloveniji.")
        else if (offer.mobileMinutes !== undefined && offer.mobileMinutes !== 0)
            features.push(offer.mobileMinutes.toString() + " minut v Sloveniji.")

        return features;
    }

    public static getInternetData(offer: OfferDto): string[] {
        const features: string[] = [];

        if (offer.downloadSpeed === -1)
            features.push("Neomejena hitrost do uporabnika - download speed.")
        else if (offer.downloadSpeed !== undefined && offer.downloadSpeed !== 0)
            features.push(offer.downloadSpeed.toString() + "Mbps hitrost do uporabnika - download speed.");

        if (offer.uploadSpeed === -1)
            features.push("Neomejena hitrost od uporabnika - upload speed.")
        else if (offer.uploadSpeed !== undefined && offer.uploadSpeed !== 0)
            features.push(offer.uploadSpeed.toString() + "Mbps hitrost od uporabnika - upload speed.");

        return features;
    }

    public static getTelevisionData(offer: OfferDto): string[] {
        const features: string[] = [];
        if (offer.programsNumber === -1)
            features.push("Neomejeno število programov.")
        else if (offer.programsNumber !== undefined && offer.programsNumber !== 0)
            features.push(offer.programsNumber.toString() + "+ TV programov.");

        return features;
    }

    public static getCategory(category: string | undefined): string {
        switch (category) {
            case "MOBILE":
                return "mobilna telefonija";
            case "INTERNET":
                return "internet";
            case "TELEVSION":
                return "televizija";
        }
        return "";
    }

    public static convertNumberToDate(number: number | undefined): string {
        return new Date(number??0).toLocaleDateString();
    }

    public static getOfferFeatures(offer: OfferDto): string[] {
        const features: string[] = [];
        switch (offer.type) {
            case "MOBILE":
                return this.getOfferMobileData(offer);
            case "INTERNET":
                return this.getInternetData(offer);
            case "TELEVSION":
                return this.getTelevisionData(offer);
        }
        return features;
    }
}
