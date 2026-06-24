// rzp_test_T1APPSxRtfOQhI;
// FZ0vC9u2mnMZXBA5EjvTegN7;

const loadScript = (src: string) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;

    script.onload = () => {
      resolve(true);
    };

    script.onerror = () => {
      reject(false);
    };
    document.body.appendChild(script);
  });
};

export const handlePayment = async (amount: number) => {
  const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

  if (!res) {
    alert("Failed to load Razorpay");
    return;
  }

  const options = {
    key: "rzp_test_xxxxx",
    amount,
    currency: "INR",
    name: "Krish Store",
    description: "Test Payment",

    handler: function (response: any) {
      console.log(response);
      alert("Payment Successful");
    },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
};
