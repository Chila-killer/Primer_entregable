import "./Card.css"

const Card = ({quote, handleChange}) => {

  return (
    <section className="card">
        <article className="card_container">
            <h1 className="card_title">InfoGalax</h1>
            <p className="card_text">{quote.phrase}</p>
            <button onClick={handleChange} className="card_button"><img src="/boton.png" alt="" /></button>
        </article>

        <footer className="card_footer">Author: {quote.author}</footer>
    </section>
  )
}

export default Card