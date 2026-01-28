import { useRef, useState } from "react";
import "./Contact.css";
import useScrollReveal from "../../hooks/useScrollReveal";

const Contact = () => {
  const { ref, isVisible } = useScrollReveal();
  const formRef = useRef(null);
  const iframeRef = useRef(null);

  const [status, setStatus] = useState("");

  const handleSubmit = () => {
    setStatus("Message sent successfully!");

    // clear inputs
    setTimeout(() => {
      formRef.current.reset();

    }, 500);
    // hide message after 4s
    setTimeout(() => {
      setStatus("");
    }, 4000);
  };

  return (
    <section
      ref={ref}
      id="contact"
      className={`contact reveal ${isVisible ? "active" : ""}`}
    >
      <h2 className="contact-title">Get in Touch</h2>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Let’s Connect</h3>
          <p>
            Feel free to reach out via email or leave a message below.
          </p>

          <p>
            <i className="bx bx-envelope"></i>{" "}
            <a href="mailto:pm5405127@gmail.com" className="contact-link">
              pm5405127@gmail.com
            </a>
          </p>
        </div>

        {/* hidden iframe (no onLoad now) */}
        <iframe
          ref={iframeRef}
          name="hidden_iframe"
          style={{ display: "none" }}
          title="hidden_iframe"
        />

        <form
          ref={formRef}
          className="contact-form"
          action="https://docs.google.com/forms/d/e/1FAIpQLSc5udbXSvr7kifddTNA_SZR9qUxbGvO1kFFxK94le9796llmg/formResponse"
          method="POST"
          target="hidden_iframe"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="entry.1506797304"
            placeholder="Your name"
            required
          />

          <input
            type="email"
            name="entry.1316007214"
            placeholder="Your email"
            required
          />

          <textarea
            name="entry.1735925578"
            placeholder="Your message"
            rows="4"
            required
          />

          <button type="submit" className="btn">
            Send Message
          </button>

          {status && <p className="form-status success">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
