export type OTPResult = | {success: true} | {success: false; reason: string};


export type OTPData = {
    otp:string;
    expiresAt: number;
    attempts: number;
}