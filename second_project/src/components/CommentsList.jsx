import {useState} from "react";
import './commentsList.css';
function CommentsList() {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([
    { id: 1, text: "Это первый комментарий" },
    { id: 2, text: "Это второй комментарий" },
    { id: 3, text: "Это третий комментарий" },
  ]);
  const [nextId, setNextId] = useState(4);
  const handleInputChange = (event) => {
    setComment(event.target.value);
  };

  const handleAddCommit = () => {
    if(comment.trim() !== '') {
      setComments([...comments, {
        id: nextId,
        text: comment,
      }
      ]);
      setNextId((id) => nextId + 1)
      setComment('');
    }
  };
  const removeCommit = (id) => {
    setComments(comments => comments.filter((comment) => comment.id !== id));
  };
  return (
      <div className="container">
        <h1 className="title">Список комментариев</h1>
        <input className="block__input"
            type="text"
            value={comment}
            onChange={handleInputChange}
            placeholder="Введите текст"
        />
        <button onClick={handleAddCommit} type='button'>Добавить</button>
        <ul className="block__list">
          {comments.map((item) => (
              <li  className="block__item" key={item.id}><p>
                {item.text}
              </p>
                <button className="btn-remove" onClick={() => removeCommit(item.id)}>Удалить</button>
              </li>
          ))}
        </ul>
      </div>
  );
}
export default CommentsList