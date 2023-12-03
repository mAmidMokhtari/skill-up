import { useState } from "react";

export const useData = () => {
  const [isSwapped, setIsSwapped] = useState(false);

  const handleSwapClick = () => {
    setIsSwapped(!isSwapped);
  };
  return { handleSwapClick, isSwapped };
};
