import styled from "styled-components";
const Wrapper = styled.section`
 background:#020617;
`;
const Grid = styled.div`
 max-width:1100px;
 margin:auto;
 display:grid;
 grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
 gap:25px;
`;

const Card = styled.div`
 padding:35px;
 text-align:center;
 border-radius:18px;
 background:rgba(15,23,42,0.7);
 border:1px solid rgba(34,211,238,0.15);
 color:#22d3ee;
 font-weight:bold;
 font-size:1.1rem;
 transition:.3s;
 &:hover{
 transform:translateY(-8px);
 border-color:#22d3ee;
 box-shadow:0 0 25px rgba(34,211,238,0.15);
 }
`;
function Skills(){
const skills = [
"React",
"Next.js",
"JavaScript",
"HTML5",
"CSS3",
"Styled Components",
"Git & GitHub",
"Responsividade",
"Performance Web",
"CI/CD",
]
return(
<Wrapper id="skills">
<h2>Habilidades</h2>
<p className="subtitle">
Tecnologias e competências desenvolvidas durante o curso.
</p>
<Grid>
{skills.map((skill,index)=>(
<Card key={index}>
{skill}
</Card>
))}
</Grid>
</Wrapper>

)
}
export default Skills;