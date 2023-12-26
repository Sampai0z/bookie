import { Row, Col, Container } from "react-bootstrap";
import classes from "./Footer.module.css";

export default function Footer() {
  return (
    <Container>
      <Row className={classes.footer}>
        <Col xs={5}>Bookie</Col>
        <Col>Bookie</Col>
        <Col>Bookie</Col>
        <Col>Bookie</Col>
      </Row>
    </Container>
  );
}
