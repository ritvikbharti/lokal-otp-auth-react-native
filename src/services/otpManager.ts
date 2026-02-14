import {OTPResult} from "../types/auth";

type OTPData = {
    otp: string;
    expiresAt: number;
    attempts: number;
};

const otpStore = new Map<string,OTPData>();
export function generateOtp(email: string) : string{
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = Date.now() + 60 * 1000;
    otpStore.set(email,{
        otp,
        expiresAt,
        attempts: 0,
    });
    return otp;
}

export function validateOTP(email:string,input:string) : OTPResult{
    const record = otpStore.get(email);
    if(!record){
        return {success: false, reason: "NO_OTP"};
    }
    if(Date.now() > record.expiresAt){
        return {success: false, reason: "OTP_EXPIRED"};
    }
    if(record.attempts>=3){
        return {success: false, reason: "Crossed_Maximum_Attempts"}
    }
    if(record.otp!== input){
        record.attempts++;
        return {success: false, reason: "Wrong_Otp"};

    }

    return {success: true};
}