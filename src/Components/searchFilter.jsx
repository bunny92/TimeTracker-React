import React, { useEffect, useState } from "react";
import { TextField } from "@material-ui/core";

export default function SearchFilter(props) {
  const [titleText, setTitletext] = useState("");

  const copyList = JSON.parse(JSON.stringify(props.timerList));
  const updatetitle = (e) => {
    let value = e.target.value;
    setTitletext(value);

    var searchString = value.trim().toLowerCase();
    if (searchString.length > 0) {
      var fliteredData = props.timerList.filter(function (product) {
        return product.title.toLowerCase().match(searchString);
      });
      props.filteredList(value.length === 1 ? copyList : fliteredData);
    }
  };

  return (
    <>
      <TextField
        id="searchFilter"
        label="Search Counter"
        variant="outlined"
        value={titleText}
        onChange={updatetitle}
        style={{ display: "flex", marginTop: "30px" }}
      />
    </>
  );
}
