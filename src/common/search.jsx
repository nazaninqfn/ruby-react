import React from "react";
import { Button, Im, Input, Form } from "./search.styled";

const Search = ({ value, onChange }) => {
  return (
    <Form className="container d-flex justify-content-center">
      <Input
        className="form-control me-2 "
        type="search"
        id="exampleFormControlInput1"
        placeholder="جستجوی خبر ..."
        aria-label="Search"
        value={value}
        onChange={onChange}
      />
      <Button
        className="btn redhover"
        style={{
          background: "#F25F5C",
          border: "1px solid #F25F5C",
        }}
        type="submit"
      >
        <Im src="../assets/image/icons-3.png"></Im>
      </Button>
    </Form>
  );
};

export default Search;
