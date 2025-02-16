import React from 'react';
import {Modal, Col, Row, Form, Button} from 'react-bootstrap';
import {FormControl, FormGroup, FormLabel} from 'react-bootstrap';
import { addStudent } from '../services/StudentService';


const AddStudentModal = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        addStudent(e.target)
        .then((result)=>{
            alert(result);
            props.setUpdated(true);
        },
        (error)=>{
            alert(error.message);
        })
    }

    return(
        <div className="container">

            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered >

                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Fill In Student Information
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col sm={6}>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="full_name">
                                    <Form.Label>full_name</Form.Label>
                                    <Form.Control type="text" name="full_name" required placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="email">
                                    <Form.Label>email</Form.Label>
                                    <Form.Control type="email" name="email" required placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="twitter">
                                    <Form.Label>twitter</Form.Label>
                                    <Form.Control type="text" name="twitter" required placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="linkedin">
                                    <Form.Label>linkedin</Form.Label>
                                    <Form.Control type="text" name="linkedin" required placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="facebook">
                                    <Form.Label>facebook</Form.Label>
                                    <Form.Control type="text" name="facebook" required placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="website">
                                    <Form.Label>website</Form.Label>
                                    <Form.Control type="text" name="website" required placeholder="" />
                            </Form.Group>
                            <Form.Group>
                                <p></p>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="danger" type="submit" onClick={props.onHide}>
                        Close
                </Button>

                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default AddStudentModal;