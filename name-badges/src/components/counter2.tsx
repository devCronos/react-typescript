import { useEffect, useReducer, useState } from 'react';

type CounterState = {
  count: number;
  draftCount: number;
};

const initialState: CounterState = {
  count: 0,
  draftCount: 0,
};

type CounterAction = {
  type: 'increment' | 'decrement' | 'reset' | 'updateCountFromDraft';
};
type CounterActionWithPayload = {
  type: 'updateDraftCount';
  payload: number;
};

const reducer = (
  state: CounterState,
  action: CounterAction | CounterActionWithPayload,
): CounterState => {
  const { count, draftCount } = state;

  if (action.type === 'increment') {
    const newCount = count + 1;
    return { count: newCount, draftCount: newCount };
  }
  if (action.type === 'decrement') {
    const newCount = count - 1;
    return { count: newCount, draftCount: newCount };
  }
  if (action.type === 'reset') {
    return initialState;
  }
  if (action.type === 'updateDraftCount') {
    console.log('//FIXME ~ action.type:', 'updateDraftCount');

    return { count, draftCount: action.payload };
  }
  if (action.type === 'updateCountFromDraft') {
    console.log('//FIXME ~ action.type:', 'updateCountFromDraft');
    return { count: Number(draftCount), draftCount };
  }
  return state;
};

const Counter2 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <section className="flex w-2/3 flex-col items-center gap-8 border-4 border-primary-500 bg-white p-8 shadow-lg">
      <h1>(with reducer) Days Since the Last Accident</h1>
      <p className="text-6xl">{state.count}</p>
      <div className="flex gap-2">
        <button onClick={() => dispatch({ type: 'decrement' })}>
          ➖ Decrement
        </button>
        <button onClick={() => dispatch({ type: 'reset' })}>🔁 Reset</button>
        <button onClick={() => dispatch({ type: 'increment' })}>
          ➕ Increment
        </button>
      </div>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(111);
            dispatch({ type: 'updateCountFromDraft' });
          }}
        >
          <input
            type="number"
            value={state.draftCount}
            onChange={(e) =>
              dispatch({
                type: 'updateDraftCount',
                payload: e.target.valueAsNumber,
              })
            }
          />
          <button type="submit">Update Counter</button>
        </form>
      </div>
    </section>
  );
};

export default Counter2;
