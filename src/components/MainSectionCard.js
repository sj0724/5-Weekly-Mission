function MainSectionCard({ item }) {
  const { title, description } = item;

  return (
    <>
      <section>
        <h2 className="textBox__title">{title}</h2>
        <p className="description">{description}</p>
      </section>
    </>
  );
}

export default MainSectionCard;
