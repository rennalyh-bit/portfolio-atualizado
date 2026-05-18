import styled from "styled-components";
const Wrapper = styled.section`
 background:#020617;
 text-align:center;
 form{
 max-width:700px;
 margin:auto;
 display:flex;
 flex-direction:column;
 gap:20px;
 }
 input,
 textarea{
 padding:18px;
 border-radius:12px;
 border:1px solid rgba(34,211,238,0.2);
 background:#0f172a;
 color:white;
 outline:none;
 }
 input:focus,
 textarea:focus{
 border-color:#22d3ee;
 }
12
 button{
 padding:18px;
 border:none;
 border-radius:12px;
 background:#06b6d4;
 color:#020617;
 font-weight:bold;
 cursor:pointer;
 transition:.3s;
 font-size:1rem;
 }
 button:hover{
 transform:translateY(-5px);
 box-shadow:0 0 25px rgba(34,211,238,0.4);
 }
`;
function Contact(){
return(
<Wrapper id="contact">
<h2>Contato</h2>
<p className="subtitle">
Vamos conversar sobre projetos e oportunidades.
</p>
<form>
<input type="text" placeholder="Seu nome" />
<input type="email" placeholder="Seu email" />
<textarea
rows="7"
placeholder="Sua mensagem"
></textarea>
<button type="submit">
Enviar Mensagem
</button>
</form>
</Wrapper>
)
}
export default Contact;