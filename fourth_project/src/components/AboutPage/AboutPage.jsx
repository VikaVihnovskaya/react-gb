import { Link } from 'react-router-dom';

function AboutPage() {
  return (
      <div className='App'>
        <h1>О наc</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci consequatur
          delectus doloribus esse magnam rem, totam ullam. Animi fuga fugit id illo magnam magni odit quam
          suscipit vero voluptatem?</p>
        <Link to="/">Вернуться на главную страницу</Link>
      </div>
  );
}

export default AboutPage;