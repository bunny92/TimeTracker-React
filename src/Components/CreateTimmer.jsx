import React, { useState, useEffect } from "react";
import { CssBaseline, Container } from "@material-ui/core";
import NewTimmer from "./NewTimer.jsx";
import AddedTimmer from "./AddedTimmer.jsx";
import dataList from "../addTimmerList.js";
import { v4 as uuid } from "uuid";

export default function CreateTimmer(props) {
  const [timerList, setTimerList] = useState([]);

  useEffect(() => {
    if (dataList.length > 0) {
      setTimerList(dataList);
    }
  }, [timerList]);

  const addTimmer = (title) => {
    let newTimmer = {
      id: uuid(),
      end_time: null,
      start_time: null,
      title: title,
      created_at: new Date().getTime(),
      updated_at: new Date().getTime(),
    };
    const newTimmerList = [...timerList, newTimmer];
    setTimerList(newTimmerList);
  };

  const deletButton = (timerId) => {
    timerList.map((timer, i) => {
      if (timer.id === timerId) {
        delete timerList[i];
      }
    });
    let data = timerList.filter(function (element) {
      return element !== undefined;
    });
    setTimerList([...data]);
  };

  const updatedData = (data) => {
    timerList.map((timer, i) => {
      if (timer.id === data.id) {
        Object.assign(timer, {
          title: data.title,
          start_time: null,
          end_time: null,
          updated_at: new Date().getTime(),
        });
      }
    });
  };

  const startTimer = (timerId) => {
    const now = Date.now();
    let starttimers = timerList.map((timer) => {
      if (timer.id === timerId) {
        return Object.assign({}, timer, {
          start_time: now,
          end_time: null,
        });
      } else {
        return timer;
      }
    });
    setTimerList(starttimers);
  };

  const stopTimer = (timerId) => {
    const now = Date.now();
    let stoptimers = timerList.map((timer) => {
      if (timer.id === timerId) {
        return Object.assign({}, timer, {
          end_time: now,
        });
      } else {
        return timer;
      }
    });
    setTimerList(stoptimers);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      {console.log(timerList, "timerList")}
      {timerList.length > 0 &&
        timerList.map((a, i) => {
          return (
            <AddedTimmer
              timerList={a}
              startTimer={startTimer}
              stopTimer={stopTimer}
              deletButton={deletButton}
              updatedData={updatedData}
            />
          );
        })}
      <NewTimmer addTimmer={addTimmer} />
    </Container>
  );
}
