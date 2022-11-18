import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootState } from '../redux/types';
import { formatDate, slugify } from '../utils';

export default function Article() {
  const navigate = useNavigate();
  const params = useParams();
  const currentArticleName = params.article;

  const articles = useSelector((state: RootState) => state.articles.articles);
  const [currentArticle] = articles.filter(
    (article) => slugify(article?.headline.main) === currentArticleName
  );

  function handleBack() {
    navigate(-1);
  }

  return (
    <div>
      <button onClick={handleBack}>Go Back to results</button>
      <h1>{currentArticle?.headline.main}</h1>
      <span>{formatDate(currentArticle?.pub_date)}</span>
      <p>{currentArticle?.abstract}</p>

      <a
        href={currentArticle?.web_url}
        target="_blank"
        rel="noopener noreferrer"
      >
        See full article
      </a>
    </div>
  );
}
