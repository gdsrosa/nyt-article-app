import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { RootState } from "../../redux/types";
import { formatDate, slugify } from "../../utils";
import { Main, Wrapper } from "./styles";
import Footer from "../../components/Footer";

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
    <Wrapper>
      <button onClick={handleBack}>Go Back to results</button>

      <Main>
        <h1>{currentArticle?.headline.main}</h1>
        <br />
        <span>
          <strong>Publish: {formatDate(currentArticle?.pub_date)}</strong>
        </span>
        <br />
        <p>{currentArticle?.abstract}</p>
        <br />
        <a
          href={currentArticle?.web_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          See full article
        </a>
      </Main>
      <Footer />
    </Wrapper>
  );
}
