import { Component } from "react";
import { CourseListSection } from "./courselistsection";
import styled from "styled-components";

export const Container = styled.div``;

class ListSection extends Component {
  render() {
    return (
      <Container className="container mt-5 mb-5">
        <div className="row">
          <CourseListSection courses={this.props.courses} />
        </div>
      </Container>
    );
  }
}

export default ListSection;
