
import './App.css';
import React, { useState } from "react";


function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: "",
    feedback: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.rating) {
      newErrors.rating = "Please select a rating";
    }

    if (!formData.feedback.trim()) {
      newErrors.feedback = "Feedback is required";
    } else if (formData.feedback.trim().length < 10) {
      newErrors.feedback = "Feedback must be at least 10 characters";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });

    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log("Feedback submitted:", formData);

    setSubmitted(true);
    setErrors({});

    setFormData({
      name: "",
      email: "",
      rating: "",
      feedback: "",
    });
  };

  return (
    <>
      <div className="page">
        <div className="card">
          <h1>Feedback Form</h1>

          <p className="subtitle">
            We would love to hear what you think!
          </p>

          {submitted && (
            <div className="success">
              Thank you! Your feedback has been submitted successfully.
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            {/* Name */}
            <div className="form-group">
              <label htmlFor="name">
                Name <span className="required">*</span>
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? "input-error" : ""}
              />

              {errors.name && (
                <small className="error">{errors.name}</small>
              )}
            </div>

            {/* Email */}
            <div className="form-group">
              <label htmlFor="email">
                Email <span className="required">*</span>
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? "input-error" : ""}
              />

              {errors.email && (
                <small className="error">{errors.email}</small>
              )}
            </div>

            {/* Rating */}
            <div className="form-group">
              <label>
                How would you rate your experience?{" "}
                <span className="required">*</span>
              </label>

              <div className="rating-group">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <label className="rating-option" key={rating}>
                    <input
                      type="radio"
                      name="rating"
                      value={rating}
                      checked={
                        formData.rating === String(rating)
                      }
                      onChange={handleChange}
                    />
                    <span>{rating}</span>
                  </label>
                ))}
              </div>

              <div className="rating-labels">
                <span>Very Poor</span>
                <span>Excellent</span>
              </div>

              {errors.rating && (
                <small className="error">{errors.rating}</small>
              )}
            </div>

            {/* Feedback */}
            <div className="form-group">
              <label htmlFor="feedback">
                Your Feedback <span className="required">*</span>
              </label>

              <textarea
                id="feedback"
                name="feedback"
                rows="5"
                maxLength="500"
                placeholder="Tell us about your experience..."
                value={formData.feedback}
                onChange={handleChange}
                className={errors.feedback ? "input-error" : ""}
              />

              <div className="character-count">
                {formData.feedback.length}/500
              </div>

              {errors.feedback && (
                <small className="error">{errors.feedback}</small>
              )}
            </div>

            <button type="submit">
              Submit Feedback
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
