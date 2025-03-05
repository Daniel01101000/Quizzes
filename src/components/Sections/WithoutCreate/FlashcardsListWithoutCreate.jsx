import { useSelector } from "react-redux";
import CardFlashcard from "components/Pages/Flashcards/Cards/CardFlashcard.jsx"; 
import 'styles/Cards/CardFlashcards.css';
import Emojis from "components/Emojis/Emojis.jsx";

const FlashcardsListWithoutCreate = () => {
  const flashcards = useSelector((state) => state.cardsFlashcards.cards) || [];

  return (
    <>
      {flashcards.length === 0 ? (
        <>  
        <p className="Problem">There are no flashcards available for this quiz</p>
        <Emojis />
        </>
      ) : (
        <div className="grid-contenedor">
          {flashcards.map((flashcard) => (
             <CardFlashcard 
             key={flashcard.id} 
             id={flashcard.id}  // ✅ PASAR EL ID AQUÍ
             name={flashcard.name} 
             questionA={flashcard.questionA} 
             questionB={flashcard.questionB} 
             questionC={flashcard.questionC} 
             correctAnswer={flashcard.correctAnswer} // Pasando correctAnswer aquí
             type="flashcard"
           />
          ))}
        </div>
      )}
    </>
  );
};

export default FlashcardsListWithoutCreate;