"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";

const NewsletterPopup = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onSubmit = async (data: unknown) => {
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setMessage("Success! Check your email for the eBook.");
        reset();
      } else {
        setMessage("Something went wrong. Try again.");
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setMessage("Error sending email. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-xl font-bold text-gray-500 hover:text-gray-800 transition"
          aria-label="Close popup"
        >
          ✖
        </button>

        <h2 className="text-2xl font-bold mb-4">Get your Free eBook & Exclusive Offers!</h2>
        <p className="text-gray-600 mb-4">
          Sign up to receive a complimentary copy of <strong>Cowboy Love & Mystery</strong>.
        </p>

        {message && <p className="text-green-600 font-semibold">{message}</p>}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            {...register("name", { required: true })}
            className="w-full p-3 border rounded"
          />
          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
            className="w-full p-3 border rounded"
          />
          <div className="flex items-center space-x-2">
            <input type="checkbox" required />
            <span className="text-sm">I agree to receive emails from you.</span>
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send my Book"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterPopup;
