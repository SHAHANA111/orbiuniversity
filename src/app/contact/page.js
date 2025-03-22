"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer1 from "@/components/Footer1";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="py-20 bg-white">
          <div className=" px-4 mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="font-display text-4xl md:text-5xl font-bold text-[#043455] mb-6">
                Contact Us
              </h1>
              <p className="text-lg text-[#043455]/80">
                Have questions about our courses or need help? Reach out to our
                team and we&apos;ll get back to you as soon as possible.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="flex flex-col items-center p-8 rounded-xl border border-[#1f2a3a]/20 bg-background text-center">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#043455]/10 mb-4 text-[#043455]">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-[#043455] mb-2">
                  Email Us
                </h3>
                <p className="text-[#043455]/70 mb-4">
                  For general inquiries and support
                </p>
                <a
                  href="mailto:orbiuniversity@gmail.com"
                  className="text-[#BD8939] hover:underline"
                  target="_blank" 
                >
                  orbiuniversity@gmail.com
                </a>
              </div>

              <div className="flex flex-col items-center p-8 rounded-xl border border-[#1f2a3a]/20 bg-background text-center">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#043455]/10 mb-4 text-[#043455]">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-[#043455] mb-2">
                  Call Us
                </h3>
                <p className="text-[#043455]/70 mb-4">
                  Mon-Fri from 9am to 5pm
                </p>
                <p
                  // href="111-116-724"
                  className="text-[#BD8939] " 
                >
                  (UAN) 111-116-724
                </p>
              </div>

              <div className="flex flex-col items-center p-8 rounded-xl border border-[#1f2a3a]/20 bg-background text-center">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#043455]/10 mb-4 text-[#043455]">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-[#043455] mb-2">
                  Visit Us
                </h3>
                <p className="text-[#043455]/70 mb-4">Our headquarters</p>
                <address className="not-italic text-[#BD8939]">
                3rd Floor, GCU Road, Nishat One IT Tower Faisalabad
                </address>
              </div>
            </div>

            <div className="max-w-2xl mx-auto">
              <form
                onSubmit={handleSubmit}
                className="space-y-6 p-8 rounded-xl border border-[#1f2a3a]/20 bg-background"
              >
                <h2 className="text-2xl font-semibold text-[#043455] mb-6">
                  Send Us a Message
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-[#043455] mb-1"
                    >
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-[#1f2a3a]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#BD8939]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-[#043455] mb-1"
                    >
                      Your Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-[#1f2a3a]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#BD8939]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-[#043455] mb-1"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-[#1f2a3a]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#BD8939]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[#043455] mb-1"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-[#1f2a3a]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#BD8939]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-[#043455] text-white font-medium rounded-lg hover:bg-[#043455]/90 transition-colors flex items-center justify-center disabled:opacity-70"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="ml-2 h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer1 />
    </div>
  );
};

export default Contact;
