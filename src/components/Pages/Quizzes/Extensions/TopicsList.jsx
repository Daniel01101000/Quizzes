import { useSelector, useDispatch } from "react-redux";
import { removeTopic } from "../../../../store/topicsSlice"; // Asegúrate de importar esto
import { Link } from "react-router-dom";
import "../../../../styles/Cards/CardTopic.css";
import X from "../../../X/X-button.jsx";

const TopicsList = () => {
  const topics = useSelector((state) => state.topics.topics) || {};
  const dispatch = useDispatch();

  return (
    <div className="grid-container-container">
      <div className="grid-container">
        {Object.values(topics).map((topic) => (
          <div key={topic.id} className="cardTopic">
            <X id={topic.id} type="topic" />
            <Link 
              to={`/topics/${topic.id}/quizzes`} 
              style={{ textDecoration: "none" }}
            >
              <h3 className="card-title">{topic.name}</h3>
              <p className="card-description-topic">{topic.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopicsList;
