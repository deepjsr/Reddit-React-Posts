import React, { useEffect, useState } from "react";
import { Container, Row, Col, Navbar } from "react-bootstrap";
import CardComponent from "./components/PostCard";
import "./App.css";
import PostSkeleton from "./components/PostSkeleton";
function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://www.reddit.com/r/reactjs.json")
      .then((res) => res.json())
      .then((data) => setPosts(data.data.children))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Container className="py-4">
      <Navbar bg="dark" variant="dark" className="mb-4 shadow-sm rounded">
        <Container>
          <Navbar.Brand>Reddit ReactJS Posts</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <a
                href="https://www.reddit.com/r/reactjs/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                Visit Reddit
              </a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Row>
        {posts.length === 0 ? (
          <PostSkeleton />
        ) : (
          posts.map((post) => (
            <Col
              key={post.data.id}
              sm={12}
              md={6}
              lg={4}
              className="mb-4 d-flex"
            >
              <CardComponent data={post.data} />
            </Col>
          ))
        )}
      </Row>
      <footer className="text-center mt-4">
        <p>
          &copy; {new Date().getFullYear()} Reddit ReactJS Posts. All rights
          reserved.
        </p>
        <p>
          Developed by{" "}
          <a
            href="https://deepjsr.github.io/PersonalWebsite/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none"
          >
            Deep j. Sarma
          </a>
        </p>
      </footer>
    </Container>
  );
}

export default App;
