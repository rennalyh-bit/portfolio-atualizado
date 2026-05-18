import styled from "styled-components";
const Nav = styled.nav`
 width:100%;
 position:fixed;
 top:0;
 z-index:1000;
 backdrop-filter:blur(12px);
 background:rgba(2,6,23,0.8);
 border-bottom:1px solid rgba(34,211,238,0.15);
`;
const Container = styled.div`
 max-width:1200px;
 margin:auto;
 padding:20px;
 display:flex;
2
 justify-content:space-between;
 align-items:center;
 h1{
 color:#22d3ee;
 font-size:1.7rem;
 letter-spacing:2px;
 }
 ul{
 display:flex;
 gap:30px;
 list-style:none;
 }
 li{
 color:#cbd5e1;
 transition:.3s;
 position:relative;
 }
 li::after{
 content:'';
 position:absolute;
 width:0;
 height:2px;
 background:#22d3ee;
 left:0;
 bottom:-5px;
 transition:.3s;
 }
 li:hover{
 color:#22d3ee;
 }
 li:hover::after{
 width:100%;
 }
 @media(max-width:768px){
 flex-direction:column;
 gap:20px;
 ul{
 flex-wrap:wrap;
 justify-content:center;
 }
 }
`;
function Header(){
return(
<Nav>
<Container>
<h1>Rennaly</h1>
<ul>
<li><a href="#about">Sobre</a></li>
<li><a href="#projects">Projetos</a></li>
<li><a href="#skills">Skills</a></li>
<li><a href="#contact">Contato</a></li>
</ul>
</Container>
</Nav>
)
}
export default Header;