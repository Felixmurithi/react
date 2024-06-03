import { memo, useEffect, useState } from "react";
import formatTime from "../../utils/formatTime";
import { Color } from "./TimerContextComponents";

function Now() {
  const [time, setTime] = useState(formatTime(new Date()));

  useEffect(
    function () {
      const id = setInterval(function () {
        //   setTime(formatTime(new Date()));
        setTime(formatTime(new Date()));
      }, 1000);

      return function cleanup() {
        clearInterval(id);
      };
    }, //  array not included
  );
  return (
    <div className="my-4 flex flex-col justify-around gap-6">
      <span className="mx-auto  block max-w-fit">Its {time}</span>
      <Color />
    </div>
  );
}

export default Now;
