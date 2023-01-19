import { useCounter, useFetch } from "../hooks/index.js";
import { LoadingQoute, Quote } from "./index.js";

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1);

    console.log('counter', counter)

    const { data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);

    const { quote, author } = !!data && data[0];
    console.log(data, isLoading, hasError);
    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr />

            {
                isLoading
                    ? <LoadingQoute />
                    : <Quote quote={quote} author={author} />

            }

            <button 
            className="btn btn-primary"
            disabled={isLoading} 
            onClick={() => increment(counter)}>
                Next quote
            </button>
        </>
    )
}
