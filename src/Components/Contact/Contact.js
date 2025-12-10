import { init, sendForm } from "@emailjs/browser";
import "./Contact.css";
import { useState, useEffect, useRef } from "react";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = ({ serviceEmailJS }) => {
  // Initialiser EmailJS avec la clé publique
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

  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) {
      newErrors.firstName = "Le prénom est requis";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Le nom est requis";
    }
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "L'email n'est pas valide";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Le message est requis";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = () => {
    setIsLoading(true);
    sendForm(
      serviceEmailJS.serviceID,
      serviceEmailJS.templateFromAPP,
      formRef.current,
      serviceEmailJS.publicKey
    ).then(
      () => {
        setIsLoading(false);
        toast.success("message envoyé!", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Slide,
          progressClassName: "toast-progress-success", // Ajoutez cette ligne pour la ProgressBar
          icon: <i className="toast-icon-success fa fa-check-circle" />, // Ajoutez cette ligne pour l'icône
        });
        // Réinitialiser le formulaire après l'envoi réussi
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });
      },
      () => {
        setIsLoading(false);
        toast.error("Une erreur est survenue.", {
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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Soumettre le formulaire
      // console.log("Formulaire soumis", formData);
      sendEmail();
    }
  };

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
                  <i className="fa-brands fa-youtube"></i>
                  <p>youtube</p>
                </div>
                <div className="contact-detail">
                  <i className="fa-brands fa-facebook-f"></i>
                  <p>facebook</p>
                </div>
                <div className="contact-detail">
                  <i className="fa-brands fa-twitter"></i>
                  <p>twitter</p>
                </div>
                <div className="contact-detail">
                  <i className="fa-brands fa-tiktok"></i>
                  <p>tiktok</p>
                </div>
                <div className="contact-detail">
                  <i className="fa-brands fa-instagram"></i>
                  <p>Instagram</p>
                </div>
              </div>
            </div>
            <p>
              Vous avez une question, une suggestion? Vous souhaitez reserver le
              spectacle ou simplement échanger? Remplissez le formulaire et
              notre équipe reviendra vers vous dans les plus brefs délais...
            </p>
          </div>
          <form className="contact-right" ref={formRef} onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Prénom"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && <p className="error">{errors.firstName}</p>}
            <input
              type="text"
              placeholder="Nom"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && <p className="error">{errors.lastName}</p>}
            <input
              type="email"
              placeholder="adresse@mail.com"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
            <textarea
              name="message"
              rows="8"
              placeholder="Votre Message ici"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && <p className="error">{errors.message}</p>}
            <button
              type="submit"
              className="contact-submit"
              disabled={isLoading}
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
          <div className="spinner-border text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
