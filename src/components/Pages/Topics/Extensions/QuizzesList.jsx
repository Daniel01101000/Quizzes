import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const QuizzesList = () => {
  const { topicId } = useParams();
  const quizzes = useSelector((state) => state.quizzes); // Suponiendo que Redux almacena los quizzes

  // Filtrar quizzes por el topicId
  const topicQuizzes = quizzes.filter((quiz) => quiz.topicId === topicId);

  return (
    <div>
      <h1>Quizzes para el tema {topicId}</h1>
      {topicQuizzes.length > 0 ? (
        topicQuizzes.map((quiz) => <div key={quiz.id}>{quiz.title}</div>)
      ) : (
        <p>No hay quizzes para este tema</p>
      )}
    </div>
  );
};

export default QuizzesList;
