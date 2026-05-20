import styled from "styled-components";
import { useState } from "react";

const Wrapper = styled.section`
  text-align: center;

  form {
    max-width: 700px;
    margin: auto;

    display: flex;
    flex-direction: column;

    gap: 20px;
  }

  input,
  textarea {
    padding: 16px;

    border: none;

    border-radius: 10px;

    background: #111827;

    color: white;
  }

  button {
    padding: 16px;

    background: #22d3ee;

    border: none;

    border-radius: 10px;

    cursor: pointer;

    font-weight: bold;
  }

  .success {
    margin-top: 20px;

    color: #22d3ee;

    font-weight: bold;
  }
`;

function Contact() {

  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    setMessage(
      "Mensagem enviada com sucesso! Obrigado pelo contato."
    );
  }

  return (
    <Wrapper id="contact">

      <h2>Contato</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Seu nome"
          required
        />

        <input
          type="email"
          placeholder="Seu email"
          required
        />

        <textarea
          rows="7"
          required
          placeholder="Sua mensagem"
        />

        <button type="submit">
          Enviar
        </button>

      </form>

      {message && (
        <p className="success">
          {message}
        </p>
      )}

    </Wrapper>
  );
}

export default Contact;