import { useEffect, useState } from 'react';
import Quotes from './quotes';
import InspirationalQuote from './quote';
import Loading from './loading';

export type Quote = {
  id: number;
  content: string;
  source?: string;
};

export const fetchRandomQuote = async () => {
  const response = await fetch(`/api/quotes/random`);
  return response.json();
};

export const fetchQuotes = async (count: number) => {
  const response = await fetch(`/api/quotes?limit=${count}`);
  return response.json();
};

const Application = () => {
  // const [quote, setQuote] = useState(); // default undefined. One idea would be to start from {content: '', ...}
  // useEffect(() => {
  //   fetchRandomQuote().then(setQuote);
  // }, []);

  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [count, setCount] = useState<number>(0);
  const [submitted, setSubmitted] = useState<boolean>(false);

  return (
    <main className="mx-auto w-full max-w-2xl py-16">
      {/* <InspirationalQuote content={quote.content} source={quote.source} /> */}
      <Quotes
        count={count}
        onChange={(e) => setCount(e.target.valueAsNumber)}
        onSubmit={() => {
          fetchQuotes(count).then(setQuotes);
        }}
      >
        {quotes.map((q) => (
          <div key={q.id} className="grid grid-cols-2 gap-4">
            <InspirationalQuote
              key={q.id}
              content={q.content}
              source={q.source}
            />
          </div>
        ))}
      </Quotes>
    </main>
  );
};

export default Application;
