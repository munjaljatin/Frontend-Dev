import "./DogTile.css";

function DogTile(props) {
  const alterText = "Puppy";
  let imgURL =
    "https://images.unsplash.com/photo-1600804340584-c7db2eacf0bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHVwcHl8ZW58MHx8MHx8fDA%3D";

  let imgURL2 =
    "https://images.unsplash.com/photo-1601979031925-424e53b6caaa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHVwcHl8ZW58MHx8MHx8fDA%3D";

  console.log(props);
  return (
    <section className="section">
      <div>
        <img src={imgURL} alt="cute puppy" />
        <p>{alterText}</p>
      </div>
      <div>
        <img src={imgURL2} alt="" />
        <p>{alterText}</p>
      </div>
    </section>
  );
}

export default DogTile;
