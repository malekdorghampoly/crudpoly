import React,{Component} from 'react';
import {Modal, Col, Row, Form, Button} from 'react-bootstrap';
import {FormControl, FormGroup, FormLabel} from 'react-bootstrap';
import { updateStudent } from '../services/StudentService';



const UpdateStudentModal = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        updateStudent(props.student.email, e.target)
        .then((result)=>{
            alert(result);
            props.setUpdated(true);
        },
        (error)=>{
            alert("Failed to Update Student");
        })
    };

    return(
        <div className="container">

            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered >

                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Update Student Information
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col sm={6}>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="full_name">
                                    <Form.Label>full_name</Form.Label>
                                    <Form.Control type="text" name="full_name" required defaultValue={props.student.full_name} placeholder="" />
                            </Form.Group>

                            <Form.Group controlId="email">
                                    <Form.Label>email</Form.Label>
                                    <Form.Control type="text" name="email" required defaultValue={props.student.email} placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="twitter">
                                    <Form.Label>twitter</Form.Label>
                                    <Form.Control type="text" name="twitter" required defaultValue={props.student.twitter} placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="linkedin">
                                    <Form.Label>linkedin</Form.Label>
                                    <Form.Control type="text" name="linkedin" required defaultValue={props.student.linkedin} placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="facebook">
                                    <Form.Label>facebook</Form.Label>
                                    <Form.Control type="text" name="facebook" required defaultValue={props.student.facebook} placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="website">
                                    <Form.Label>website</Form.Label>
                                    <Form.Control type="text" name="website" required defaultValue={props.student.website} placeholder="" />
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


export default UpdateStudentModal;

