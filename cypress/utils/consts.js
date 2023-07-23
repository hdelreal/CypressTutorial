import CryptoJS from "crypto-js"

export const logger = {
    username: 'Tavares_Barrows',
    password: 'U2FsdGVkX1+S8+U0/TaHiVRbY7WZ6W3Ygz2hA8uRzaU=',
    message: 'CypressTutorial'
}

export const decryptPassword = (pass) => {
    const descripted = CryptoJS.AES.decrypt(pass, logger.message);
    return descripted.toString(CryptoJS.enc.Utf8);
}