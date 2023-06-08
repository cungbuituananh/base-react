import React from "react";
import type { RootState } from "../../app/store";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../slices/counterSlice";
import {
  useGetChannelDetailQuery,
  useGetChannelListQuery,
} from "../../api/channelApi";

export function Channel() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  const { data, error, isLoading } = useGetChannelDetailQuery("1");
  console.log("data: ", data);

  const handleSubmit = (formValues: any) => {
    // What do yo
  };

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
