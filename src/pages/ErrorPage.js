import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

function ErrorPage() {
  return (
    <>
      <Header />
      <div className="error">
        <h1 className="error__title">404</h1>
        <p className="error__txt">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <Link to="/" className="error__link">
          Retourner sur la page d'accueil
        </Link>
      </div>
      <Footer />
    </>
  );
}

export default ErrorPage;
