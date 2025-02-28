import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import '../../styles/QuizzesList.css';
import { Link } from "react-router-dom";

const QuizzesList = () => {
  const { topicId } = useParams();
  const quizzes = useSelector((state) => state.quizzes.quizzes);
  console.log("Quizzes en Redux:", quizzes);
  const cards = useSelector((state) => state.cardsQuizzes.cards); // Obtener las tarjetas

  const topicQuizzes = Object.values(quizzes).filter((quiz) => quiz.topicId === topicId);
  console.log(topicId);
  return (
    <div className="contenedor">
      <h1>Quizzes para el tema {topicId}</h1>
      {topicQuizzes.length > 0 ? (
        topicQuizzes.map((quiz) => (
          <Link 
            key={quiz.id} 
            to={`/topics/${topicId}/quizzes/${quiz.id}/flashcards`} 
            style={{ textDecoration: "none" }}
          >
          <div key={quiz.id} className="quiz-container">
            <div className="card">
            <h3 className="card-title">{quiz.title}</h3>
            </div>
            <div className="cards-container">
              {cards
                .filter((card) => card.quizId === quiz.id) // Filtrar tarjetas del quiz actual
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
        <p>No hay quizzes para este tema</p>
      )}
    </div>
  );
};

export default QuizzesList;
