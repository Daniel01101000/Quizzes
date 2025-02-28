import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import '../../../../styles/Cards/CardTopic.css';

const TopicsList = () => {
  const topics = useSelector((state) => state.topics.topics) || {};

  return (
    <>
      <div style={{ display: "grid", gap: "1rem" }} >
        {Object.values(topics).map((topic) => (
          <Link 
            key={topic.id} 
            to={`/topics/${topic.id}/quizzes`} 
            style={{ textDecoration: "none" }}
          >
        <div className="cardTopic">
              <h3 className="card-title">{topic.name}</h3>
              <p className="card-description-topic">{topic.description}</p>
              </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default TopicsList;