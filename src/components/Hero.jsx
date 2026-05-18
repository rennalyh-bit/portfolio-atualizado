import styled from "styled-components";
const Section = styled.section`
 min-height:100vh;
 display:flex;
 align-items:center;
 justify-content:center;
 text-align:center;
`;
const Content = styled.div`
 max-width:950px;
 h1{
 font-size:5rem;
 line-height:1.1;
 margin-bottom:25px;
 }
 span{
 color:#22d3ee;
 text-shadow:0 0 25px rgba(34,211,238,0.6);
 }
 p{
 color:#cbd5e1;
 font-size:1.3rem;
4
 line-height:1.8;
 max-width:800px;
 margin:auto;
 }
 .buttons{
 margin-top:40px;
 display:flex;
 justify-content:center;
 gap:20px;
 flex-wrap:wrap;
 }
 a{
 padding:16px 35px;
 border-radius:12px;
 font-weight:bold;
 transition:.3s;
 }
 .primary{
 background:#06b6d4;
 color:#020617;
 box-shadow:0 0 25px rgba(34,211,238,0.5);
 }
 .primary:hover{
 transform:translateY(-5px);
 }
 .secondary{
 border:1px solid #22d3ee;
 color:#22d3ee;
 }
 .secondary:hover{
 background:#22d3ee;
 color:#020617;
 }
 @media(max-width:768px){
 h1{
 font-size:3rem;
 }
 p{
 font-size:1.1rem;
 }
 }
`;

function Hero(){
return(
<Section>
<Content>
<h1>
Desenvolvedora
<br />
<span>Front-End</span>
<br />
Moderno
</h1>
<p>
Especializada em React, Next.js e aplicações modernas
focadas em performance, experiência do usuário e interfaces
profissionais que chamam atenção.
</p>
<div className="buttons">
<a href="#projects" className="primary">
Ver Projetos
</a>
<a href="#contact" className="secondary">
Entrar em Contato
</a>
</div>
</Content>
</Section>
)
}
export default Hero;