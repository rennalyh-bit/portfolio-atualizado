import styled from "styled-components";
import { projects } from "../data";
import ProjectCard from "./ProjectCard";
const Wrapper = styled.section`
 background:#020617;
`;

const Grid = styled.div`
 max-width:1200px;
 margin:auto;
 display:grid;
 grid-template-columns:repeat(auto-fit,minmax(320px,1fr));
 gap:35px;
`;
function Projects(){
return(
<Wrapper id="projects">
<h2>Projetos</h2>
<p className="subtitle">
Principais aplicações desenvolvidas durante minha evolução no curso.
</p>
<Grid>
{projects.map((project,index)=>(
<ProjectCard
key={index}
project={project}
/>
))}
</Grid>
</Wrapper>
)
}
export default Projects;