import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"; // 🔥 Obtener quizId desde la URL
import CardFlashcard from "../../Flashcards/Cards/CardFlashcard.jsx"; 
import '../../../../styles/Sections/SectionFlashcardsList.css';
import CreateFlashcard from "../../Flashcards/CreateFlashcard.jsx";
import Emojis from "../../../Emojis/Emojis.jsx";

const FlashcardsList = () => {
  const { quizId } = useParams(); // ✅ Obtener el quizId desde la URL
  const flashcards = useSelector((state) => state.cardsFlashcards.cards) || [];

  // 🔥 Filtrar solo las flashcards del quiz actual
  const filteredFlashcards = flashcards.filter((flashcard) => flashcard.quizId === quizId);

  return (
    
    <> 
    
    {filteredFlashcards.length === 0 ? (
      <> 
    <p className="Problem-falshcards">There are no flashcards available for this quiz</p>
    <Emojis />
    </> 
  ) : (
  <div className="grid-contenedor-falshcardss">
    {filteredFlashcards.map((flashcard) => (
      <CardFlashcard 
      key={flashcard.id} 
      id={flashcard.id} 
      name={flashcard.name} 
      questionA={flashcard.questionA} 
      questionB={flashcard.questionB} 
      questionC={flashcard.questionC} 
      type="flashcard"
      correctAnswer={flashcard.correctAnswer}  // PASANDO CORRECTANSWER A CardFlashcard
    />
    ))}
  </div>
)}
      
      <div className="create-flashcard-container">
        <CreateFlashcard quizId={quizId} />
        </div>
    </>
    

  );
};

export default FlashcardsList;