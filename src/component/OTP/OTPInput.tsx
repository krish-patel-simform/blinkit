import { useRef, useState } from "react";

import { type OtpProps } from "./otp.type";
import style from "./otpInput.module.css";

export default function OTPInput({ onComplete, length = 4 }: OtpProps) {
  const inputRef = useRef<HTMLInputElement[]>(Array(length).fill(null));

  const [OTP, setOTP] = useState<string[]>(Array(length).fill(""));

  const handleTextChange = (input: string, index: number) => {
    const newPin = [...OTP];
    newPin[index] = input;
    setOTP(newPin);

    // check if the user has entered the first digit, if yes, automatically focus on the next input field and so on

    if (input.length === 1 && index < length - 1) {
      inputRef.current[index + 1]?.focus();
    }

    // if the user removed the digit so pt the focus on previous
    if (input.length === 0 && index > 0) {
      inputRef.current[index - 1]?.focus();
    }

    if (newPin.every((digit) => digit !== "")) {
      onComplete(newPin.join(""));
    }
  };

  return (
    <div className={`${style.otpInputContainer}`}>
      {Array.from({ length }, (_, index) => {
        return (
          <input
            className={`${style.otpInput}`}
            key={index}
            type="number"
            value={OTP[index]}
            maxLength={1}
            onChange={(e) => handleTextChange(e.target.value, index)}
            ref={(ref) => {
              inputRef.current[index] = ref as HTMLInputElement;
            }}
            style={{ marginRight: index === length - 1 ? "0" : "10px" }}
          />
        );
      })}
    </div>
  );
}
