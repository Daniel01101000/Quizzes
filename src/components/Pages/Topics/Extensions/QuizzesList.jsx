import { useParams } from "react-router-dom"; 
import { useSelector } from "react-redux";
import 'styles/Lists/QuizzesList.css';
import { Link } from "react-router-dom";
import CreateQuiz from "components/Pages/Quizzes/CreateQuiz/CreateQuiz.jsx";
import { useDispatch } from "react-redux";
import X from "components/X/X-button.jsx";
import { removeCard as removeQuiz } from "store/CardsSlices/Quiz/cardsSliceQuizzes.js"; // Importa la acción
import Emojis from "components/Emojis/Emojis.jsx";

const QuizzesList = () => {
  const { topicId } = useParams();
  const dispatch = useDispatch();

  // Obtener los temas desde Redux
  const topics = useSelector((state) => state.topics.topics); 
  const quizzes = useSelector((state) => state.quizzes.quizzes);
  const cards = useSelector((state) => state.cardsQuizzes.cards); 

  // Buscar el tema actual en Redux
  const topic = topics[topicId]; 

  // Filtrar quizzes que pertenecen a este topicId
  const topicQuizzes = Object.values(quizzes).filter((quiz) => quiz.topicId === topicId);

  return (
    <>
      {/* Mostramos el nombre del tema o un mensaje si no se encuentra */}
      <h1 className="Tema">Quizzes for the topic {topic?.name || "Desconocido"}</h1>  

      <div className="grid-contenedor">
        {topicQuizzes.length > 0 ? (
          topicQuizzes.map((quiz) => (
            <div key={quiz.id} className="quiz-container">
              {/* Aquí ponemos el botón de eliminación fuera del Link */}
              <div className="card-quizzes">
                <X onClick={() => dispatch(removeQuiz(quiz.id))} type="quiz" id={quiz.id} />
                <Link 
                  to={`/topics/${topicId}/quizzes/${quiz.id}/flashcards`} 
                  style={{ textDecoration: "none" }}
                >
                  <h3 className="card-title">{quiz.title}</h3>
                </Link>
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
          ))
        ) : (
          <>
            <div>
            <p className="Problem">There are no quizzes for this topic</p>
            <Emojis />
            </div>
          </>
        )}
      </div>

      <div className="create-quiz-container">
        <CreateQuiz />
      </div>
    </>
  );
};

export default QuizzesList;
