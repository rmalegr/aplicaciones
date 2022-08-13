import { useFetch } from '../hooks/useFetch';
export const MultipleCustomHooks = () => {
  const { data, isLoading, hasError } = useFetch(
    'https://www.breakingbadapi.com/api/quotes/1'
  );
  console.log({ data });

  //np pongan hooks abajo
  return (
    //Breaking Bad FetchApi
    <>
      <h1>Breaking Bad Quotes </h1>
      <hr />

      {isLoading ? (
        <div className="alert alert-info text-center">Loading..</div>
      ) : (
        <blockquote className="blockquote text-end">
          <h3>{data[0].series}</h3>
          <p className="mb-1">{data[0].quote}</p>
          <footer className="blockquote-footer">{data[0].author}</footer>
        </blockquote>
      )}
    </>
  );
};
