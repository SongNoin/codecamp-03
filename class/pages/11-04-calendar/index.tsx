import styled from "@emotion/styled";
import { Calendar } from "antd";
import { useState } from "react";

const MyCalendar = styled(Calendar)`
  width: 300px;
  border: 1px solid #f0f0f0;
  border-radius: 2px;
`;

export default function CalendarPage() {
  //   const [value, setValue] = useState("2021-09-13");
  function onPanelChange(value, mode) {
    console.log(value.format("YYYY-MM-DD"), mode);
    // setValue(value);
  }

  const [data, setData] = useState("");

  function onSelect(value) {
    setData(value.format("YYYY-MM-DD"));
  }

  return (
    <div>
      <MyCalendar
        fullscreen={false}
        onPanelChange={onPanelChange}
        onSelect={onSelect}
      />
      <div>{data}</div>
    </div>
  );
}
