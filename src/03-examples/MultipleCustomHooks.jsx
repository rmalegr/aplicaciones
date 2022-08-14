import { useCounter, useFetch } from '../hooks';
import { LoadingQuote, Quotes } from '../03-examples';

export const MultipleCustomHooks = () => {
  //destructurar hooks de useCounter  y useFetch
  const { counter, increment } = useCounter(0);
  const { data, isLoading } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/ ${counter}`
  );
  //destructurar data  de useFetch (hooks)
  const { author, quote } = !!data && data[0]; // si !!data es true devuelve el arreglo
  console.log({ data });

  //np pongan hooks abajo
  return (
    //Breaking Bad FetchApi
    <>
      <h1>Breaking Bad Quotes </h1>
      <hr />

      {/*isLoading ? (
        <div className="alert alert-info text-center">Loading..</div>
      ) : (
        <blockquote className="blockquote text-end">
          {/* <h3>{data[counter].series}</h3> }
          <p className="mb-1">{quote}</p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      )*/}

      {isLoading ? <LoadingQuote /> : <Quotes author={author} quote={quote} />}

      <button onClick={() => increment(1)} className="btn btn-primary">
        Next quote
      </button>
    </>
  );
};
