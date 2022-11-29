import "../styles/components/formationcontainer.scss";

const infoUniversity = [
  { id: "graduacao", name: "Graduação", text: "Sistemas para Internet" },
  { id: "instituicao", name: "Instituição", text: "Centro Universitário SENAC" },
];

const FormationContainer = () => {
  return (
    <section id="formation-container">
      <h2>Formação</h2>
      {infoUniversity.map((info) => (
        <label id={info.id} key={info.id}>
          <span className="info-title">{info.name}: </span>
          <span>{info.text}</span>
        </label>
      ))}
    </section>
  )
}

export default FormationContainer;