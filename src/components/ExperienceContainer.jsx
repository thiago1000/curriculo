import "../styles/components/experiencecontainer.scss";

const infoExeperience = [
  { id: "1",  name: "Desenvolvedor Front-end",company: "Telefônica Educação Digital", year: "2019 - 2022", text: "Desenvolvi projetos de e-learnings, revistas digitais, games, onepages, landing pages para diversos clientes de segmentos variados que iam destes atacados, companhia aéreas, setor hospitalar, setor de telefonia, usando Javascript e algumas bibliotecas para criar animações, usava o Gulp para automatizar as tarefas além de Photoshop e Illustrator para fazer os recortes nos layouts que eram desenvolvidos pelos designers, e após aprovação do cliente fechava o pacote Scorm para que os projetos desenvolvidos sejam compatíveis com os LMS dos clientes." },

  { id: "2", name: "Desenvolvedor Full-Stack", company: "Agência Webnauta", year: "2018 - 2019", text: "Desenvolvia e fazia a manutenção projetos de sites institucionais, e-learnings, sistemas, como clientes tinhamos deste pessoas fisicas que queriam ter um site, pequenos negócios que queriam um ecommerce até a manutenção e desenvolvimento de projetos e relatórios para a ABED(Associação Brasileira de Educação a Distância) usando como principais tecnologias HTML, CSS, Javascript, no backend trabalhava com PHP, e como CMS usava o Wordpress e OJS(Open Journal System)." },

  { id: "4", name: "Estagiário Front-end", company: "UNIVESP", year: "2014 - 2015", text: "Prestava suporte na manutenção e melhorias do site da instituição,desenvolvi junto com o designer o site da revista Univesp, além de auxiliar na criação ou manutenção de funcionalidades dos cursos que a instituição possuia, como tecnologias utilizava HTML, CSS, Javascript, Jquery e o CMS Locomotive." },

  { id: "5", name: "Auxiliar de Distribuição", company: "Covidien", year: "2012 - 2013", text: "Separação, conferência, recebimento e inventário de produtos." },
  { id: "6", name: "Conferente", company: "Playarte Pictures", year: "2008 - 2011", text: "Separação, conferência, recebimento e inventário de produtos." },
];

const FormationContainer = () => {
  return (
    <section id="experience-container">
      <h2>Experiência</h2>
      {infoExeperience.map((info) => (
          <div className="experiences" key={info.id}>
            <div>
              <span className="point"></span>
              <span className={"line line"+info.id}></span>
            </div>
            <div>
              <h3>{info.name}</h3>
              <h4>{info.company}</h4>
              <h4>{info.year}</h4>
              <p><b>Atividades:</b> {info.text}</p>
            </div> 
          </div>
      ))}
    </section>
  )
}

export default FormationContainer;