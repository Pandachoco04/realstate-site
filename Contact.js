import React from "react";
import emailjs from "emailjs-com";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "Yservice_403qus2",   // 👈 Replace with your EmailJS service ID
        "template_60ld546",  // 👈 Replace with your EmailJS template ID
        e.target,
        "DLWx12oDioUtoaPOg"    // 👈 Replace with your EmailJS public key
      )
      .then(() => {
        alert("✅ Message sent successfully!");
      })
      .catch(() => {
        alert("❌ Something went wrong. Please try again.");
      });
  };

  return (
    <section
      id="contact"
      className="bg-blue-600 text-white py-20 text-center dark:bg-indigo-900"
      data-aos="fade-up"
    >
      <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
      <p className="mb-6">
        Looking to buy or sell a property? Contact us today!
      </p>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg space-y-4"
      >
        {/* 👇 Input fields must match your EmailJS template variables */}

                <input
                  type="text"
                  name="name" // 👈 EmailJS variable {{name}}
                  placeholder="Your Name"
                  className="w-full p-3 rounded-lg border"
                  required
                />
        
                <input
                  type="email"
                  name="email" // 👈 EmailJS variable {{email}}
                  placeholder="Your Email"
                  className="w-full p-3 rounded-lg border"
                  required
                />
        
                <textarea
                  name="message" // 👈 EmailJS variable {{message}}
                  placeholder="Your Message"
                  className="w-full p-3 rounded-lg border"
                  rows="5"
                  required
                ></textarea>
        
                <button
                  type="submit"
                  className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg transition"
                >
                  Send Message
                </button>
              </form>
            </section>
          );
        }
        
        export default Contact;
