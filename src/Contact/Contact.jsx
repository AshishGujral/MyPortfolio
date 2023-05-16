import { React, useState } from "react";
import { motion } from "framer-motion";
import "./Contact.css";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const tickVariants = {
    hidden: { pathLength: 0 },
    visible: { pathLength: 1 },
  };
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Create a FormData object and populate it with form data
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    setIsSubmitting(true);

    fetch("https://getform.io/f/7a153959-8598-46e7-b923-ae48e68829f1", {
      method: "POST",
      body: formData,
      
    })
      .then((response) => {
        if (response.ok) {
          setSubmissionSuccess(true);
          setName("");
          setEmail("");
          setMessage("");
          // Perform any additional actions you need
        } else {
          console.error("Error submitting the form");
          // Handle the error as needed
        }
      })
      .catch((error) => {
        console.error("Error submitting the form", error);
        // Handle the error as needed
      })
      .finally(() => {
        setIsSubmitting(false);
        setTimeout(() => {
          setSubmissionSuccess(false);
        }, 2000); // Display success message for 2 seconds
      });
  };
  return (
    <div className="contact-row" id="contact">
      <div className="col-lg-5 col-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2614.9073665042565!2d-122.33195898425355!3d49.050384879306755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5484354fa16167c5%3A0x39a746578d75a275!2s2649%20James%20St%2C%20Abbotsford%2C%20BC%20V2T%203L6!5e0!3m2!1sen!2sca!4v1663703288642!5m2!1sen!2sca"
          width="100%"
          height="400"
          loading="lazy"
          className="frame"
        ></iframe>
      </div>
      <div className="s">
        <h2 className="mb-4">Interested to work together? Let's talk</h2>

        <form onSubmit={handleSubmit}>
          <div className="r">
            <div className="col-lg-6">
              <input
                type="text"
                className="form-control"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                id="name"
                required
              />
            </div>

            <div className="col-lg-6">
              <input
                type="email"
                pattern="[^ @]*@[^ @]*"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="form-control"
                name="email"
                placeholder="Email"
                id="email"
              />
            </div>

            <div className="col-12">
              <textarea
                name="message"
                rows="6"
                className="form-control"
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message"
                required
              ></textarea>
            </div>

            <div className="ml-lg-auto">
              <motion.button
                type="submit"
                className="form-control submit-btn"
                disabled={isSubmitting}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                {isSubmitting ? (
                  <motion.span
                    className="loading-animation"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    Loading...
                  </motion.span>
                ) : submissionSuccess ? (
                  <motion.svg
                    className="tick-mark"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      width: "1em",
                      height: "1em",
                      display: "inline-block",
                      verticalAlign: "middle",
                    }}
                  >
                    <motion.path
                      d="M14.1 27.2l7.1 7.2 16.7-16.8"
                      variants={tickVariants}
                      initial="hidden"
                      animate="visible"
                      stroke="#000000" // Change the stroke color to a darker color, e.g., black (#000000)
                      strokeWidth="4" // Increase the stroke width to make it thicker
                      strokeLinecap="round"
                      fill="none"
                      style={{ vectorEffect: "non-scaling-stroke" }} // To prevent the stroke width from scaling with the SVG
                    />
                  </motion.svg>
                ) : (
                  "Submit"
                )}
              </motion.button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Contact;
