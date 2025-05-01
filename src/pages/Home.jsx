import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import PostCard from "../components/PostCard";
import { fetchPosts } from "../features/posts/PostSlice";

function Home() {
  const dispatch = useDispatch();
  const { posts, status, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (status === "loading")
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" />
      </div>
    );
  if (status === "failed")
    return <div className="text-danger text-center mt-5">{error}</div>;

  return (
    <Container>
      <Row>
        {posts.map((post) => (
          <Col key={post.data.id} sm={12} md={6} lg={4}>
            <PostCard
              title={post.data.title}
              selfTextHtml={post.data.selftext_html}
              url={post.data.url}
              score={post.data.score}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Home;
