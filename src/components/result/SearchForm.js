import COLOR from "constant/color";
import React from "react";
import styled from "styled-components";

function SearchForm({ onSubmit, searchInput, setSearchInput }) {
  return (
    <Form onSubmit={onSubmit}>
      <SearchInput
        placeholder="Search Name"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <SeachButton>Search</SeachButton>
    </Form>
  );
}

export default SearchForm;

const Form = styled.form`
  height: 38px;
`;

const SearchInput = styled.input`
  height: 100%;
  width: 240px;
  padding: 0 10px;
  border: 0;
  border-bottom: 1px solid ${COLOR.MAIN};
  color: ${COLOR.MAIN};
`;

const SeachButton = styled.button`
  height: 100%;
  padding: 0 12px;
  background: ${COLOR.MAIN};
  color: white;
  letter-spacing: 0.5px;
  font-weight: bold;
`;
