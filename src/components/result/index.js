import React, { useEffect, useState } from "react";
import styled from "styled-components";

import COLOR from "constant/color";
import { loadResult } from "./utils/api";

import ErrorAlert from "components/ErrorAlert";
import ResultTable from "./ResultTable";
import SelectedList from "./SelectedList";
import SearchForm from "./SearchForm";

function Result() {
  const [resultList, setResultList] = useState([]);
  const [filtedName, setFiltedName] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [error, setError] = useState(null);

  useEffect(async () => {
    try {
      const loadedList = await loadResult();
      setResultList(loadedList);
    } catch (err) {
      console.error(err);
      setError(err);
    }
  }, []);

  const onSearchSubmit = (e) => {
    e.preventDefault();

    setFiltedName(searchInput);
  };

  const includeSearch = ({ name }) =>
    name.toLowerCase().includes(filtedName.toLowerCase());

  return (
    <ResultConatiner>
      <Header>
        <Title>Result</Title>
        <SearchForm
          onSubmit={onSearchSubmit}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        />
      </Header>

      <SelectedList />

      {error ? (
        <ErrorAlert msg={error} />
      ) : (
        <ResultTable
          resultList={resultList.filter(includeSearch)}
          setResultList={setResultList}
        />
      )}
    </ResultConatiner>
  );
}

export default Result;

const ResultConatiner = styled.main`
  width: 1200px;
  margin: auto;
  padding: 60px 0px;
`;

const Header = styled.header`
  position: sticky;
  top: 0;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 0px 40px 0px;
  border-bottom: 2px solid ${COLOR.MAIN};
  margin-bottom: 24px;
  z-index: 1;
`;

const Title = styled.h1`
  font-size: 25px;
`;
