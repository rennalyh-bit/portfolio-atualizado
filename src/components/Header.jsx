import styled from "styled-components";

const Nav = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1000;

  backdrop-filter: blur(12px);
  background: rgba(2, 6, 23, 0.85);

  border-bottom: 1px solid rgba(34, 211, 238, 0.15);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: auto;

  padding: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: #22d3ee;
    font-size: 1.7rem;
  }

  ul {
    display: flex;
    gap: 28px;
    list-style: none;
  }

  li {
    transition: 0.3s;
  }

  li:hover {
    color: #22d3ee;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    ul {
      margin-top: 20px;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
`;

function Header() {
  return (
    <Nav>
      <Container>

        <h1>
          Rennaly
        </h1>

        <ul>
          <li>
            <a href="#about">Sobre</a>
          </li>

          <li>
            <a href="#projects">Projetos</a>
          </li>

          <li>
            <a href="#skills">Habilidades</a>
          </li>

          <li>
            <a href="#contact">Contato</a>
          </li>
        </ul>

      </Container>
    </Nav>
  );
}

export default Header;