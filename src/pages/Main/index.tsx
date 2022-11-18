import { ChangeEvent, useState } from 'react';
import ArticleList from '../../components/ArticlesList';
import Button from '../../components/Button';
import ErrorMessage from '../../components/ErrorMessage';
import SearchBar from '../../components/SearchBar';

import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { handleFetchArticles } from '../../redux/slices/articles';

import { RootState } from '../../redux/types';
import { Wrapper } from './styles';

// TODO: add styling - WIP
// TODO: add unit tests
// TODO: check if all criterias from challenge were tackled

export default function Main() {
  const [searchInput, setSearchInput] = useState('');

  const dispatch = useAppDispatch();
  const { articles, isLoading, page, error } = useAppSelector(
    (state: RootState) => ({
      articles: state.articles.articles,
      isLoading: state.articles.isLoading,
      page: state.articles.currentPage,
      error: state.articles.error,
    })
  );
  const hasArticles = articles.length > 0;

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    setSearchInput(value);
  }

  function handleNextPage() {
    dispatch(handleFetchArticles(page + 1, searchInput));
  }

  function handlePrevPage() {
    if (page >= 0) {
      dispatch(handleFetchArticles(page - 1, searchInput));
    }
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    dispatch(handleFetchArticles(page, searchInput));
  }

  return (
    <Wrapper>
      <h1>Grover NYT Article Search App</h1>
      <form onSubmit={handleSubmit}>
        <SearchBar
          input={searchInput}
          handleChange={handleChange}
          name="article"
          placeholder="Search article..."
        />
        <Button label="Search" type="submit" />
      </form>

      {articles && (
        <>
          <ArticleList />

          <div>
            {page !== 0 && (
              <Button type="button" onClick={handlePrevPage} label="Previous" />
            )}
            {hasArticles && (
              <Button type="button" onClick={handleNextPage} label="Next" />
            )}
          </div>
        </>
      )}
      {isLoading && <h1>Loading...</h1>}
      {error && <ErrorMessage error={error} />}
    </Wrapper>
  );
}
