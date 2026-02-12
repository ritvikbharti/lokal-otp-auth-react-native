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