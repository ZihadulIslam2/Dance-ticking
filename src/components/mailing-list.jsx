"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { useState } from "react";

export function MailingList({ dialogClose }) {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    return email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }
    setError("");
    setIsSubmitted(true);

    setTimeout(() => {
      dialogClose();
    }, 3000);
  };

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-pink-500/5 to-transparent" />
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-2xl mx-auto"
        >
          <div className="text-center space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl text-white font-serif"
            >
              Stay Updated
            </motion.h2>
            {!isSubmitted ? (
              <>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-white/60 text-lg max-w-md mx-auto"
                >
                  Join our mailing list to receive updates about new classes,
                  special events, and exclusive offers.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                ></motion.div>
                <AnimatePresence>
                  <motion.form
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-4 overflow-hidden"
                  >
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      className="flex gap-2 max-w-md mx-auto"
                    >
                      <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 bg-white/10 text-white placeholder:text-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-md"
                      />
                      <button
                        type="submit"
                        className="px-4 py-2 bg-blue-400 hover:bg-blue-500 text-white rounded-md"
                      >
                        Join
                      </button>
                    </motion.div>
                    {error && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-red-400 text-sm"
                      >
                        {error}
                      </motion.p>
                    )}
                  </motion.form>
                </AnimatePresence>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-400/10 text-green-400 p-4 rounded-lg flex items-center justify-center gap-2"
              >
                <Check className="w-5 h-5" />
                <span>Thank you for joining our mailing list!</span>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
