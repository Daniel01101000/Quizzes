import { useSelector } from "react-redux";
import CardFlashcard from "../Pages/Flashcards/CardFlashcard.jsx"; 
import '../../styles/Cards/CardFlashcards.css';

const FlashcardsListWithoutCreate = () => {
  const flashcards = useSelector((state) => state.cardsFlashcards.cards) || [];

  return (
    <>
      {flashcards.length === 0 ? (
        <p>No hay flashcards disponibles para este quiz</p>
      ) : (
        <div style={{ display: "grid", gap: "1rem" }}>
          {flashcards.map((flashcard) => (
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
    </>
  );
};

export default FlashcardsListWithoutCreate;