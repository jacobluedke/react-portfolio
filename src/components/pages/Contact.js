import React from 'react';

export default function Contact() {
  return (
    <div>
      <h1>Contact Me</h1>
      <div className="formcontainer">
        <form
          className="contactForm"
          target="_blank"
          action="https://formsubmit.co/ianmordaunt@gmail.com, "
          method="POST"
        >
          <div className="form-group">
            <div className="form-row">
              <div className="col">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Full Name"
                  required
                />
              </div>
              <div className="col">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email Address"
                  required
                />
              </div>
            </div>
            <div className="form-group">
            <textarea
              placeholder="Your Message"
              className="form-control"
              name="message"
              rows="10"
              required
            ></textarea>
          </div>
          </div>
          
          <div className="btnOrion">
            <button
              className="contactBtn"
              type="submit"
              
            >
              Submit Form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
