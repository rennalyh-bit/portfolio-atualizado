import styled from "styled-components";
const Card = styled.div`
 background:rgba(15,23,42,0.7);
 border:1px solid rgba(34,211,238,0.15);
 border-radius:20px;
 overflow:hidden;
 backdrop-filter:blur(10px);

 transition:.4s;
 &:hover{
 transform:translateY(-12px) scale(1.02);
 border-color:#22d3ee;
 box-shadow:0 0 35px rgba(34,211,238,0.15);
 }
 img{
 width:100%;
 height:230px;
 object-fit:cover;
 }
 .content{
 padding:28px;
 }
 h3{
 color:#22d3ee;
 margin-bottom:15px;
 font-size:1.5rem;
 }
 p{
 color:#cbd5e1;
 margin-bottom:15px;
 }
 .tech{
 color:#94a3b8;
 font-size:.95rem;
 }
 a{
 display:inline-block;
 margin-top:20px;
 padding:12px 22px;
 background:#06b6d4;
 color:#020617;
 border-radius:10px;
 font-weight:bold;
 transition:.3s;
 }
 a:hover{
 transform:scale(1.05);
 }
`;
function ProjectCard({project}){

return(
<Card>
<img src={project.image} alt={project.title} />
<div className="content">
<h3>{project.title}</h3>
<p>{project.description}</p>
<p className="tech">
<strong>Tecnologias:</strong> {project.tech}
</p>
<a
href={project.github}
target="_blank"
rel="noreferrer"
>
Ver Projeto
</a>
</div>
</Card>
)
}
export default ProjectCard;