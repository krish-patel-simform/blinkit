export type OtpProps = {
  length?: number;
  onComplete: (pin: string) => void;
};
