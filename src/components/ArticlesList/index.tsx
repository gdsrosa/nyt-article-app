import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/useAppSelector';
import { RootState } from '../../redux/types';
import { slugify } from '../../utils';

export default function ArticleList() {
  const { articles } = useAppSelector((state: RootState) => state.articles);

  return (
    <ul>
      {articles.map((article: any) => (
        <li key={article._id}>
          <Link to={`/articles/${slugify(article.headline.main)}`}>
            {article.headline.main}
          </Link>
        </li>
      ))}
    </ul>
  );
}
