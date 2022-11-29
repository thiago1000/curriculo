import "../styles/components/experiencecontainer.scss";

const infoExeperience = [
  { id: "1",  name: "Programador Front-end",company: "Telefônica Educação Digital", year: "2019 - 2022", text: "Desenvolvimento e manutenção de E-learnings, revistas digitais, games, onepages, fechamento de pacote SCORM." },
  { id: "2", name: "Programador", company: "Webnauta", year: "2018 - 2019", text: "Desenvolvimento e manutenção de sites usando diversas tecnologias como html5, css3 e javascript, desenvolvimento também de back-end com php, além de manutenção de sites com os cms Wordpress e OJS." },
  { id: "4", name: "Estagiário Front-end", company: "UNIVESP", year: "2014 - 2015", text: "Suporte na atualização e melhorias no site, criação do site da revist pré-vestibular, usando as melhores práticas de desenvolvimento, atuando conforme prazos determinados." },
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