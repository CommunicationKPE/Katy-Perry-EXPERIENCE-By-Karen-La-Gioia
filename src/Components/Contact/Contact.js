import { init, sendForm } from "@emailjs/browser";
import "./Contact.css";
import { useState, useEffect, useRef } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
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
    sendForm(
      serviceEmailJS.serviceID,
      serviceEmailJS.templateFromAPP,
      formRef.current,
      serviceEmailJS.publicKey
    ).then(
      (result) => {
        console.log(result);

        // Envoyer la réponse automatique
        sendAutoReply();
      },
      (error) => {
        console.log(error);
        toast.error(
          "Oopsy... 😕 Une erreur est survenue lors de l'envoi du message.",
          {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          }
        );
      }
    );
  };

  const sendAutoReply = () => {
    sendForm(
      serviceEmailJS.serviceID,
      serviceEmailJS.templateAutoReply,
      formRef.current,
      serviceEmailJS.publicKey
    ).then(
      (result) => {
        console.log(result);
        toast.success("Yeah!!! 😎 Votre message a été envoyé avec succès!", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });

        // Réinitialiser le formulaire après l'envoi réussi
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });
      },
      (error) => {
        console.log(error);
        toast.error(
          "Oopsy... 😕 Une erreur est survenue lors de l'envoi de la réponse automatique.",
          {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          }
        );
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
            <button type="submit" className="contact-submit">
              Envoyer
            </button>
          </form>
        </div>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </div>
  );
};

export default Contact;
