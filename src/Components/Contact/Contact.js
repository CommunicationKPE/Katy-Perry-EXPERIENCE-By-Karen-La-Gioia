import React from "react";
import { init, sendForm } from "@emailjs/browser";
import "./Contact.css";
import { useState, useEffect, useRef, useCallback } from "react";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = ({ serviceEmailJS }) => {
  useEffect(() => {
    init(serviceEmailJS.publicKey);
  }, [serviceEmailJS.publicKey]);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const formRef = useRef();

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const handleBlur = useCallback((e) => {
    const { name, value } = e.target;
    if (!value.trim()) {
      setErrors(prev => ({
        ...prev,
        [name]: `Le champ ${name} est nécessaire`,
      }));
    } else if (name === "email" && !/\S+@\S+\.\S+/.test(value)) {
      setErrors(prev => ({
        ...prev,
        [name]: "L'email n'est pas valide",
      }));
    } else {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  }, []);

  const validateForm = useCallback(() => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "Le prénom est requis";
    if (!formData.lastName.trim()) newErrors.lastName = "Le nom est requis";
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "L'email n'est pas valide";
    }
    if (!formData.message.trim()) newErrors.message = "Le message est requis";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

const sendEmail = useCallback(() => {
  setIsLoading(true);
  sendForm(
    serviceEmailJS.serviceID,
    serviceEmailJS.templateFromAPP,
    formRef.current,
    serviceEmailJS.publicKey
  ).then(
    (response) => {
      console.log("Email envoyé avec succès:", response);
      setIsLoading(false);
      toast.success("Message envoyé!", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Slide,
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
      setShowModal(true);
    },
    (error) => {
      console.error("Erreur lors de l'envoi de l'email:", error);
      setIsLoading(false);
      toast.error(`Une erreur est survenue: ${error.text || "Veuillez réessayer."}`, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Slide,
      });
    }
  );
}, [serviceEmailJS, formRef]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (validateForm()) {
      sendEmail();
    }
  }, [validateForm, sendEmail]);

  return (
    <div id="contact" className="contact">
      <div className="contact-cadre">
        <div className="contact-title">
          <h1>Contactez-nous</h1>
        </div>
        <div className="contact-section">
          <div className="contact-left">
            <div className="contact-details">
              <p>Retrouvez-nous sur les réseaux sociaux.</p>
              <div className="icons-reseaux">
                <div className="contact-detail">
                  <a href="https://youtube.com" aria-label="YouTube">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                  <p>youtube</p>
                </div>
                <div className="contact-detail">
                  <a href="https://facebook.com" aria-label="Facebook">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <p>facebook</p>
                </div>
                <div className="contact-detail">
                  <a href="https://instagram.com" aria-label="Instagram">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <p>Instagram</p>
                </div>
              </div>
            </div>
            <p>
              Vous avez une question, une suggestion? Vous souhaitez réserver le
              spectacle ou simplement échanger? Remplissez le formulaire et
              notre équipe reviendra vers vous dans les plus brefs délais...
            </p>
          </div>
          <form className="contact-right" ref={formRef} onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="firstName">Prénom</label>
              <input
                type="text"
                id="firstName"
                placeholder="Prénom"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.firstName ? "error-input" : ""}
                aria-required="true"
              />
              {errors.firstName && <p className="error">{errors.firstName}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Nom</label>
              <input
                type="text"
                id="lastName"
                placeholder="Nom"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.lastName ? "error-input" : ""}
                aria-required="true"
              />
              {errors.lastName && <p className="error">{errors.lastName}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="adresse@mail.com"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.email ? "error-input" : ""}
                aria-required="true"
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="8"
                placeholder="Votre Message ici"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.message ? "error-input" : ""}
                aria-required="true"
              ></textarea>
              {errors.message && <p className="error">{errors.message}</p>}
            </div>
            <button
              type="submit"
              className="contact-submit"
              disabled={isLoading}
              aria-label="Envoyer le formulaire"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="dark"
        transition={Slide}
      />
      {isLoading && (
        <div className="overlay opacity-75">
          <div className="spinner">
            <div className="bounce1"></div>
            <div className="bounce2"></div>
            <div className="bounce3"></div>
          </div>
        </div>
      )}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Merci pour votre message !</h2>
            <p>Nous vous répondrons dans les plus brefs délais.</p>
            <button onClick={() => setShowModal(false)}>Fermer</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default React.memo(Contact);