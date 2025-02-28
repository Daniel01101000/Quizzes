import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"; // 🔥 Obtener quizId desde la URL
import CardFlashcard from "../../Flashcards/CardFlashcard.jsx"; 
import '../../../../styles/Cards/CardFlashcards.css';
import CreateFlashcard from "../../Flashcards/CreateFlashcard.jsx";

const FlashcardsList = () => {
  const { quizId } = useParams(); // ✅ Obtener el quizId desde la URL
  const flashcards = useSelector((state) => state.cardsFlashcards.cards) || [];

  // 🔥 Filtrar solo las flashcards del quiz actual
  const filteredFlashcards = flashcards.filter((flashcard) => flashcard.quizId === quizId);

  return (
    <>
      {filteredFlashcards.length === 0 ? (
        <p>No hay flashcards disponibles para este quiz</p>
      ) : (
        <div style={{ display: "grid", gap: "1rem" }}>
          {filteredFlashcards.map((flashcard) => (
            <CardFlashcard 
              key={flashcard.id} 
              name={flashcard.name} 
              questionA={flashcard.questionA} 
              questionB={flashcard.questionB} 
              questionC={flashcard.questionC} 
            />
          ))}
        </div>
      )}
      <CreateFlashcard quizId={quizId} />
    </>
  );
};

export default FlashcardsList;