import { on } from "events";
import { observable } from "mobx";
import { observer } from "mobx-react-lite";
import { useStore } from "../Hooks/useStore";

if (process.env.NODE_ENV === "development") {
  const { enableLogging } = require("mobx-logger");
  enableLogging();
}

export const Count = observer(() => {
  const {
    rootStore: { countStore },
  } = useStore();

  const onIncrement = () => {
    countStore.increment();
  };

  const onDecrement = () => {
    countStore.decrement();
  };

  return (
    <div>
      Count:{countStore.getCountValue}
      <div>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
      </div>
    </div>
  );
});
