import React from 'react'
import { Tab , Row, Col, Nav} from 'react-bootstrap'
import { Outlet } from 'react-router-dom'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentAlt, faUserGroup, faCommentDots, faTrash, faGear } from '@fortawesome/free-solid-svg-icons';

import ListDeleted from '../ListDeleted'
import ListMessages from '../ListMessages';
import ListFriends from '../ListFriends'
import ListWaitingMessages from '../ListWaitingMessages';
import Setting from '../Setting';
import './styles.css'

export const SideBar = () => {
  return (
    <>
    
    <Tab.Container id="left-tabs-example" defaultActiveKey="1" className=''>
      <Row>
        <Col sm={1} xs={1} md={1} style={{paddingRight: "0px"}}>
          <Nav variant="pills" className="flex-column jutify-content-between">

            <Nav.Item className='m-2 px-2'>
              <Nav.Link eventKey="1" ><FontAwesomeIcon icon={faCommentAlt} style={{color: "#276678", fontSize: "22px"}}/></Nav.Link>
            </Nav.Item >

            <Nav.Item className='m-2 px-2'>
              <Nav.Link eventKey="2"><FontAwesomeIcon icon={faUserGroup} style={{color: "#276678", fontSize: "22px"}}/></Nav.Link>
            </Nav.Item>
            <Nav.Item className='m-2 px-2'>
              <Nav.Link eventKey="3"><FontAwesomeIcon icon={faCommentDots}style={{color: "#276678", fontSize: "22px"}}/></Nav.Link>
            </Nav.Item>
            <Nav.Item className='m-2 px-2'>
              <Nav.Link eventKey="4"><FontAwesomeIcon icon={faTrash} style={{color: "#276678", fontSize: "22px"}} /></Nav.Link>
            </Nav.Item>
            <Nav.Item className='m-2 px-2'>
              <Nav.Link eventKey="5"><FontAwesomeIcon icon={faGear} style={{color: "#276678", fontSize: "22px"}}/></Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>

        <Col sm={8} xs={9} md={8} style={{paddingLeft: "0px", marginLeft: '18%'}} >
          <Tab.Content>
            <Tab.Pane eventKey="1"><ListMessages/></Tab.Pane>
            <Tab.Pane eventKey="2"><ListFriends/></Tab.Pane>
            <Tab.Pane eventKey="3"><ListWaitingMessages/></Tab.Pane>
            <Tab.Pane eventKey="4"><ListDeleted/></Tab.Pane>
            <Tab.Pane eventKey="5"><Setting/></Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
    
    <Outlet/>
    </>
    
  )
}
