'use client';

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import toast from "react-hot-toast";
import { HiArrowNarrowRight, HiArrowSmLeft } from "react-icons/hi";
import localFont from "next/font/local";

const dansregular = localFont({
  src: "../../fonts/DancingScript/DancingScript-Regular.ttf"
});

const SatoshiRegular = localFont({
  src: "../../fonts/Satoshi/Fonts/Satoshi-Regular.ttf"
});

const SatoshiBold = localFont({
  src: "../../fonts/Satoshi/Fonts/Satoshi-Bold.ttf"
});

type FormValues = {
  loanamount: string;
  firstName: string;
  lastName: string;
  email: string;
  dob: string;
  ssn: string;
  phone: string;
  city: string;
  state: string;
  bank: string;
  bankingDuration: string;
  accountNumber: string;
  routingNumber: string;
};

const steps = [10, 30, 60, 100];

export default function MultiStepForm() {

  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);

 const {
  register,
  handleSubmit,
  trigger
} = useForm<FormValues>({
  shouldUnregister: false
});

  const slideVariants = {
    hidden: { x: 80, opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: -80, opacity: 0 }
  };

  const nextStep = async () => {

    let fields: any = [];

    if (step === 0) fields = ["loanamount"];
    if (step === 1) fields = ["firstName", "lastName", "email", "dob", "ssn"];
    if (step === 2) fields = ["phone", "city", "state"];
    if (step === 3) fields = ["bank", "bankingDuration", "accountNumber", "routingNumber"];

    const valid = await trigger(fields);

    if (!valid) return;

    setStep(step + 1);

  };

  const prevStep = () => setStep(step - 1);

  const onSubmit = async (data: FormValues) => {

    console.log("FORM DATA", data);

    const id = toast.loading("Submitting application...");

    try {

      await axios.post("/api/submit", data);

      toast.dismiss(id);
      toast.success("Application submitted!");

      setSubmitted(true);

    } catch {

      toast.dismiss(id);
      toast.error("Submission failed");

    }

  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white/40 backdrop-blur-xl p-16 rounded-3xl shadow-2xl text-center">
          <h1 className={`text-5xl text-black ${SatoshiBold.className}`}>
            🎉 Thank You!
          </h1>
          <p className="mt-4 text-xl text-black">
            Your loan application has been submitted.
          </p>
        </div>
      </div>
    )
  }

  return (

    <div
      className={`min-h-screen flex items-center justify-center px-6 ${SatoshiRegular.className}`}
      style={{
        backgroundImage: "url('/images/bg/Stock_07.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >

      <div className="max-w-3xl w-full bg-white/25 backdrop-blur-2xl border border-white/40 p-12 rounded-3xl shadow-2xl">

        <form onSubmit={handleSubmit(onSubmit)}>

          <h1 className={`text-center text-5xl mb-10 text-black ${SatoshiBold.className}`}>
            <span className={`${dansregular.className} text-purple-600`}>Quick</span> Loan Application
          </h1>

          <AnimatePresence mode="wait">

            {step === 0 && (
              <motion.div key="step1" variants={slideVariants} initial="hidden" animate="visible" exit="exit">

                <label className="block mb-2 font-semibold text-black">
                  Loan Amount
                </label>

                <select
                  {...register("loanamount", { required: true })}
                  className="input"
                >
                  <option value="">Select amount</option>
                  <option value="1000-2500">$1,000 - $2,500</option>
                  <option value="2500-5000">$2,500 - $5,000</option>
                  <option value="5000-15000">$5,000 - $15,000</option>
                  <option value="15000-20000">$15,000 - $20,000</option>
                </select>

              </motion.div>
            )}

            {step === 1 && (
              <motion.div key="step2" variants={slideVariants} initial="hidden" animate="visible" exit="exit" className="space-y-5">

                <div>
                  <label className="label">First Name</label>
                  <input {...register("firstName", { required: true })} placeholder="Enter first name" className="input" />
                </div>

                <div>
                  <label className="label">Last Name</label>
                  <input {...register("lastName", { required: true })} placeholder="Enter last name" className="input" />
                </div>

                <div>
                  <label className="label">Email</label>
                  <input {...register("email", { required: true })} placeholder="example@email.com" className="input" />
                </div>

                <div>
                  <label className="label">Date of Birth</label>
                  <input type="date" {...register("dob", { required: true })} className="input" />
                </div>

                <div>
                  <label className="label">SSN</label>
                  <input {...register("ssn", { required: true })} placeholder="123-45-6789" className="input" />
                </div>

              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="step3" variants={slideVariants} initial="hidden" animate="visible" exit="exit" className="space-y-5">

                <div>
                  <label className="label">Phone</label>
                  <input {...register("phone", { required: true })} placeholder="Enter phone number" className="input" />
                </div>

                <div>
                  <label className="label">City</label>
                  <input {...register("city", { required: true })} placeholder="Enter city" className="input" />
                </div>

                <div>
                  <label className="label">State</label>
                  <input {...register("state", { required: true })} placeholder="Enter state" className="input" />
                </div>

              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="step4" variants={slideVariants} initial="hidden" animate="visible" exit="exit" className="space-y-5">

                <div>
                  <label className="label">Bank Name</label>
                  <input {...register("bank", { required: true })} placeholder="Example: Chase Bank" className="input" />
                </div>

                <div>
                  <label className="label">Banking Duration</label>
                  <input {...register("bankingDuration", { required: true })} placeholder="Example: 2 years" className="input" />
                </div>

                <div>
                  <label className="label">Account Number</label>
                  <input {...register("accountNumber", { required: true })} placeholder="Account number" className="input" />
                </div>

                <div>
                  <label className="label">Routing Number</label>
                  <input {...register("routingNumber", { required: true })} placeholder="Routing number" className="input" />
                </div>

              </motion.div>
            )}

          </AnimatePresence>

          <div className="mt-10">

            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-green-400 to-emerald-600"
                animate={{ width: `${steps[step]}%` }}
              />
            </div>

            <p className="text-sm mt-2 text-black">
              {steps[step]}% completed
            </p>

          </div>

          <div className="flex justify-between mt-8">

            {step > 0 && (
              <button type="button" onClick={prevStep} className="btn-red cursor-pointer ">
                <HiArrowSmLeft /> Back
              </button>
            )}

            {step < 3 ? (
              <button type="button" onClick={nextStep} className="btn-green cursor-pointer ">
                Continue <HiArrowNarrowRight />
              </button>
            ) : (
              <button type="submit" className="btn-submit cursor-pointer ">
                Submit <HiArrowNarrowRight />
              </button>
            )}

          </div>

        </form>

      </div>

      <style jsx>{`

.input{
width:100%;
padding:16px;
border-radius:12px;
border:1px solid #ddd;
background:rgba(255,255,255,0.8);
color:black;
}

.label{
display:block;
margin-bottom:6px;
font-weight:600;
color:black;
}

.btn-green{
display:flex;
align-items:center;
gap:8px;
padding:10px 22px;
background:#22c55e;
color:black;
border-radius:999px;
}

.btn-red{
display:flex;
align-items:center;
gap:8px;
padding:10px 22px;
background:#f87171;
color:black;
border-radius:999px;
}

.btn-submit{
display:flex;
align-items:center;
gap:8px;
padding:10px 22px;
background:#059669;
color:white;
border-radius:999px;
}

`}</style>

    </div>
  );
}