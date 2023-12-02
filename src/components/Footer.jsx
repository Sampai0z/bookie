import { Row, Col, Container } from "react-bootstrap";
import classes from "./Footer.module.css";

export default function Footer() {
  return (
    <Container>
      <Row className={classes.footer}>
        <Col>teste</Col>
      </Row>
    </Container>
  );
}
