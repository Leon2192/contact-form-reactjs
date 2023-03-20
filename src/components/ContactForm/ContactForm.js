import React from "react";
import { useForm } from "../../Hooks/useForm";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./ContactForm.css";

const initialForm = {
  email: "",
  reEmail: "",
  password: "",
};

const validationsForm = (formulario) => {
  let errors = {};
  let RegexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexPassword = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;

  if (!formulario.email.trim()) {
    errors.email = "El campo Email es requerido";
  } else if (!RegexEmail.test(formulario.email.trim())) {
    errors.email = "El campo email debe tener un formato de correo electronico";
  }
  if (!formulario.reEmail.trim()) {
    errors.reEmail = "El campo reingresar email es requerido";
  } else if (!RegexEmail.test(formulario.reEmail.trim())) {
    errors.reEmail =
      "El campo email debe tener un formato de correo electronico";
  } else if (formulario.email !== formulario.reEmail) {
    errors.reEmail = "El campo email y confirmar email deben ser iguales.";
  }
  if (!formulario.password.trim()) {
    errors.password = "El campo password es requerido";
  }

  return errors;
};

let styles = {
  fontWeight: "bold",
  color: "#dc3545",
};

const ContactForm = () => {
  const {
    formulario,
    errors,
    loading,
    response,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useForm(initialForm, validationsForm);

  return (
    <div className="container">
      <h1>Formulario de contacto</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Correo electronico</Form.Label>
          <Form.Control
            className={errors.email && "formulario_inputs"}
            type="email"
            name="email"
            value={formulario.email}
            placeholder="Ingrese su correo..."
            onBlur={handleBlur}
            onChange={handleChange}
            required
          />
        </Form.Group>
        {errors.email && <p style={styles}>{errors.email}</p>}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Reingrese correo electronico</Form.Label>
          <Form.Control
            className={errors.reEmail && "formulario_inputs"}
            type="email"
            placeholder="Ingrese nuevamente su correo..."
            onChange={handleChange}
            name="reEmail"
            value={formulario.reEmail}
            onBlur={handleBlur}
            required
          />
        </Form.Group>
        {errors.reEmail && <p style={styles}>{errors.reEmail}</p>}
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Ingrese su contraeña..."
            onChange={handleChange}
            name="password"
            value={formulario.password}
            onBlur={handleBlur}
            required
          />
        </Form.Group>
        {errors.password && <p style={styles}>{errors.password}</p>}
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Recordarme" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
