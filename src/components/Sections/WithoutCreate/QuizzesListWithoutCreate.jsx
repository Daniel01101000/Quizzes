import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "styles/Lists/QuizzesList.css";
import { Link } from "react-router-dom";
import Emojis from "components/Emojis/Emojis.jsx";

const QuizzesList = () => {
  const { topicId } = useParams();
  
  // Obtener todos los temas de Redux
  const topics = useSelector((state) => state.topics.topics);
  const quizzes = useSelector((state) => state.quizzes.quizzes);
  const cards = useSelector((state) => state.cardsQuizzes.cards);

  // Buscar el tema actual por su ID
  const topic = topics[topicId]; // Acceder directamente si los temas son un objeto

  // Filtrar quizzes que pertenezcan a este tema
  const topicQuizzes = Object.values(quizzes).filter((quiz) => quiz.topicId === topicId);

  return (
    <div className="grid-contenedor">
      {/* Usamos topic?.name para evitar errores si no existe */}
      <h1>Quizzes para el tema {topic?.name || "Desconocido"}</h1>  

      {topicQuizzes.length > 0 ? (
        topicQuizzes.map((quiz) => (
          <Link 
            key={quiz.id} 
            to={`/topics/${topicId}/quizzes/${quiz.id}/flashcards`} 
            style={{ textDecoration: "none" }}
          >
            <div className="quiz-container">
              <div className="card">
                <h3 className="card-title">{quiz.title}</h3>
              </div>
              <div className="cards-container">
                {cards
                  .filter((card) => card.quizId === quiz.id)
                  .map((card) => (
                    <div key={card.id} className="card">
                      <h3>{card.title}</h3>
                    </div>
                  ))}
              </div>
            </div>
          </Link>
        ))
      ) : (
        <>
        <p>No hay quizzes para este tema</p>
          <Emojis />
        </>
      )}
    </div>
  );
};

export default QuizzesList;