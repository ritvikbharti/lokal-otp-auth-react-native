# lokal-otp-auth-react-native
Passwordless login

OTP Authentication – Documentation
1. OTP Logic and Expiry Handling

        A 6-digit numeric OTP is generated locally using a random number formula to ensure fixed length and no leading zeros.

        Each OTP is stored per email, not globally.

        OTP validity is limited to 60 seconds, calculated using a timestamp (Date.now() + 60 * 1000).

        During validation:

        If the current time exceeds the expiry timestamp → OTP is marked as expired.

        Maximum 3 attempts are allowed.

        Each incorrect attempt increments an attempt counter.

        After 3 failed attempts, validation is blocked.

        Generating a new OTP:

        Overwrites the previous OTP.

        Resets the attempt count.

        Automatically invalidates the old OTP.

        This approach ensures controlled validation, expiry enforcement, and brute-force prevention.

2. Data Structures Used and Why
        OTP Storage Structure
        type OTPData = {
        otp: string;
        expiresAt: number;
        attempts: number;
        };

        Reason:

        otp stores the generated code.

        expiresAt enables time-based validation without background timers.

        attempts enforces retry limits.

        Storage Mechanism

        AsyncStorage is used as a key-value persistence layer.

        Key format: otp_<email>

        Data is serialized using JSON.stringify() and parsed using JSON.parse().

        Why this design:

        O(1) lookup per email.

        Persistent across app reloads.

        Simple and scalable structure.

        Time Complexity: O(1) for generation and validation.
        Space Complexity: O(1) per email.

3. External SDK Chosen and Why

        SDK Used: @react-native-async-storage/async-storage

        Reason for choosing it:

        Meets the external SDK integration requirement.

        Provides lightweight persistent storage.

        Suitable for storing OTP data and logging events.

        Does not require backend setup.

        Logged events:

        OTP_GENERATED

        OTP_VALIDATION_SUCCESS

        OTP_VALIDATION_FAILED

        LOGOUT

Each log entry includes event name, email, and timestamp for traceability.

4. What GPT Helped With vs What I Understood and Implemented
        Independently Implemented

        OTP generation logic

        Expiry handling using timestamps

        Maximum attempt enforcement

        Per-email OTP storage design

        OTP invalidation logic

        Navigation flow (Login → OTP → Session)

        Session timer implementation and cleanup

        AsyncStorage integration

        Event logging structure

        Overall project architecture

        GPT Assistance

        Structuring and refining documentation

        Improving clarity of explanations

        Minor formatting and presentation suggestions

        All authentication logic, validation flow, and architectural decisions were implemented based on my own understanding. GPT was used as a documentation and structuring assistant.



## Application Screenshots

### Login Screen
![Login Screen](screenshots/LogInScreen.jpeg)

### OTP Screen
![OTP Screen](screenshots/OtpScreen.jpeg)

### Session Screen
![Session Screen](screenshots/SessionScreen.jpeg)