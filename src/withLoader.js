import React, { useState, useEffect } from "react";

export default function withLoader(Component, fetchFn) {
  return (props) => {
    const [list, setList] = useState([]);

    useEffect(() => {
      fetchFn().then((res) => setList(res));
    }, []);

    if (list.length === 0) {
      return "Carregando...";
    }

    return <Component {...props} data={list} />;
  };
}
