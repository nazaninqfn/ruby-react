import React from "react";
import { Button, Im, Input, Form } from "./search.styled";

const SearchCourse = ({ value, onChange }) => {
  return (
    <Form className="container d-flex justify-content-center">
      <Input
        className="form-control me-2 "
        type="search"
        id="exampleFormControlInput1"
        placeholder="جستجوی دوره..."
        aria-label="Search"
        value={value}
        onChange={onChange}
      />
      <Button
        className="btn "
        style={{
          background: "blue",
          border: "1px solid blue",
        }}
        type="submit"
      >
        <Im src="../assets/image/icons-3.png"></Im>
      </Button>
    </Form>
  );
};

export default SearchCourse;
