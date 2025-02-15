// "use client";

// import { useFormState, useFormStatus } from "react-dom";
// import { useState } from "react";
// import { z } from "zod";
// import { Card, CardBody, CardHeader } from "@nextui-org/react";
// import { Input } from "@nextui-org/input";
// import { toast } from "react-toastify";

// // ✅ Define schema for validation
// const schema = z.object({
//   email: z.string().email("Invalid email address"),
//   amount: z
//     .string()
//     .regex(/^\d+$/, "Amount must be a number")
//     .refine((val) => Number(val) >= 5000, {
//       message: "Minimum amount is 5000 NGN",
//     })
//     .refine((val) => Number(val) <= 100000000, {
//       message: "Maximum amount is 100,000,000 NGN",
//     }),
// });

// // ✅ Define TypeScript types
// type FormState = {
//   email?: { _errors?: string[] };
//   amount?: { _errors?: string[] };
// };

// // ✅ Payment Processing Function
// async function processPayment(prevState: FormState, formData: FormData): Promise<FormState> {
//   const rawEmail = formData.get("email");
//   const rawAmount = formData.get("amount");

//   if (typeof rawEmail !== "string" || typeof rawAmount !== "string") {
//     return { email: { _errors: ["Invalid input"] } };
//   }

//   const parsed = schema.safeParse({ email: rawEmail, amount: rawAmount });

//   if (!parsed.success) {
//     return {
//       email: { _errors: parsed.error.format().email?._errors || [] },
//       amount: { _errors: parsed.error.format().amount?._errors || [] },
//     };
//   }

//   const { email, amount } = parsed.data;
//   const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || "";

//   if (!publicKey) {
//     toast.error("Your Paystack public key is not set");
//     return { email: { _errors: ["Configuration error"] } };
//   }

//   try {
//     const response = await fetch("https://api.paystack.co/transaction/initialize", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${publicKey}`,
//       },
//       body: JSON.stringify({
//         email,
//         amount: Number(amount) * 100,
//         currency: "NGN",
//       }),
//     });

//     const data = await response.json();

//     if (data.status && data.data.authorization_url) {
//       toast.success("Redirecting to Paystack...");
//       window.location.href = data.data.authorization_url;
//       return {}; // ✅ Return empty state if successful
//     } else {
//       toast.error("Payment initialization failed");
//       return { email: { _errors: ["Payment failed"] } };
//     }
//   } catch (error) {
//     console.error("Payment Error:", error);
//     toast.error("An error occurred. Please try again.");
//     return { email: { _errors: ["Network error. Try again later."] } };
//   }
// }

// export default function PayStack() {
//   // ✅ Controlled Input State to Fix Placeholder Issue
//   const [email, setEmail] = useState("");
//   const [amount, setAmount] = useState("");
//   const [state, formAction] = useFormState(processPayment, {} as FormState);
//   const { pending } = useFormStatus();

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <Card className="w-full max-w-md shadow-xl bg-white p-6">
//         <CardHeader className="text-center py-6">
//           <h2 className="text-2xl font-bold text-gray-800">PayStack</h2>
//         </CardHeader>
//         <CardBody>
//           <form action={formAction} className="flex flex-col space-y-4 text-gray-600">
//             {/* Email Input */}
//             <Input
//               name="email"
//               label="Email Address"
//               type="email"
//               variant="faded"
//               size="lg"
//               isRequired
//               value={email} // ✅ Controlled Input
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             {state.email?._errors?.length ? (
//               <p className="text-sm text-red-500">{state.email._errors.join(", ")}</p>
//             ) : null}

//             {/* Amount Input */}
//             <Input
//               name="amount"
//               label="Amount (NGN)"
//               type="text"
//               variant="faded"
//               size="lg"
//               isRequired
//               value={amount} // ✅ Controlled Input
//               onChange={(e) => setAmount(e.target.value)}
//             />
//             {state.amount?._errors?.length ? (
//               <p className="text-sm text-red-500">{state.amount._errors.join(", ")}</p>
//             ) : null}

//             {/* Submit Button */}
//             <button
//               type="submit"
//               disabled={pending}
//               className={`py-2 px-4 rounded-lg transition-colors duration-200 ${
//                 pending ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 text-white hover:bg-green-600"
//               }`}
//             >
//               {pending ? "Processing..." : "Pay Now"}
//             </button>
//           </form>
//         </CardBody>
//       </Card>
//     </div>
//   );
// }
