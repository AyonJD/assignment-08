import React from 'react';
import { Accordion, Table } from 'react-bootstrap';

const Qna = () => {
    return (
        <div className='container mb-5'>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header><strong>How React works?</strong></Accordion.Header>
                    <Accordion.Body>
                    A group of Facebook developers discovered that the (DOM) is slow while developing client-side apps. (The (DOM) is an application programming interface (API) for HTML and XML documents.) It specifies the logical structure of documents as well as how they are accessed and modified.) To speed things up, React uses a virtual DOM, which is essentially a JavaScript representation of a DOM tree. As a result, it will use the virtual representation of the DOM when reading or writing to it. The virtual DOM will then attempt to update the browser's DOM in the most efficient manner possible.React elements, unlike browser DOM elements, are simple objects that are easy to generate. The DOM is updated to match the React elements by React DOM. This is because JavaScript is extremely fast, and it's worth keeping a DOM tree in it to speed up its manipulation.
                    Although React was designed to be used in the browser, it can also be utilized in the server using Node.js due to its design.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><strong>What is the difference between Props and State?</strong></Accordion.Header>
                    <Accordion.Body>
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                <th className='text-center'>Props</th>
                                <th className='text-center'>State</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Props are immutable.</td>
                                    <td>State is mutable.</td>
                                </tr>
                                <tr>
                                    <td>Props are read-only.</td>
                                    <td>State changes can be asynchronous.</td>
                                </tr>
                                <tr>
                                    <td>The child component has access to props.</td>
                                    <td>State cannot be accessed by child components.</td>
                                </tr>
                                <tr>
                                    <td>Props make components reusable.</td>
                                    <td>State cannot make components reusable.</td>
                                </tr>
                                <tr>
                                    <td>Props are used to communicate between components.</td>
                                    <td>States can be used to render the component's dynamic changes.</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header><strong>How useState works?</strong></Accordion.Header>
                    <Accordion.Body>
                    In function components, the useState hook lets us to declare one or more state variables. React keeps track of these state variables in the background and guarantees that they are updated on successive re-renders of the component.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Qna;