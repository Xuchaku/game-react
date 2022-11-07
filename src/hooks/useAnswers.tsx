import { useMemo } from "react";
import Item from "../types/Item/Item";
export function useAnswers(items: Item[]) {
  const answers = useMemo(() => {
    const values = items.map((item) => {
      return item.value;
    });
    if (typeof values[0] == "number") {
      let valuesNumbers = values as number[];
      return valuesNumbers.sort((a, b) => a - b);
    } else {
      let valuesChars = values as string[];
      return valuesChars.sort();
    }
  }, [items]);
  return answers;
}
