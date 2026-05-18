import styled from "styled-components";
import perfil from "../perfil.jpeg";

const Wrapper = styled.section`
  background: #020617;
`;

const Content = styled.div`
  max-width: 950px;
  margin: auto;
  text-align: center;

  img {
    width: 220px;
    height: 220px;
    border-radius: 50%;
    object-fit: cover;
    margin: 35px 0;

    border: 4px solid #22d3ee;

    box-shadow:
      0 0 25px rgba(34, 211, 238, 0.5),
      0 0 60px rgba(34, 211, 238, 0.3);

    transition: 0.4s;
  }

  img:hover {
    transform: scale(1.05);
  }

  h2 {
    margin-bottom: 10px;
  }

  h3 {
    color: #22d3ee;
    margin-bottom: 25px;
    font-size: 1.4rem;
  }

  p {
    color: #cbd5e1;
    font-size: 1.15rem;
    line-height: 1.9;
  }

  .card {
    background: rgba(15, 23, 42, 0.7);
    border: 1px solid rgba(34, 211, 238, 0.15);

    padding: 40px;
    border-radius: 24px;

    backdrop-filter: blur(12px);
  }

  @media (max-width: 768px) {
    .card {
      padding: 25px;
    }

    img {
      width: 180px;
      height: 180px;
    }
  }
`;

function About() {
  return (
    <Wrapper id="about">
      <Content>

        <div className="card">

          <h2>Sobre Mim</h2>

          <h3>Front-End Developer</h3>

          <img
            src={perfil}
            alt="Francisca Rennaly"
          />

          <p>
            Sou desenvolvedora Front-End apaixonada por tecnologia,
            interfaces modernas e experiências digitais impactantes.
            Durante minha jornada no curso desenvolvi aplicações com
            React, Next.js, Micro Frontends, PWA, CI/CD e técnicas
            avançadas de performance web.
          </p>

        </div>

      </Content>
    </Wrapper>
  );
}

export default About;