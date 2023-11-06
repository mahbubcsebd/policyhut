'use client';

import { Col, Container, Row } from 'react-bootstrap';
import teams from '../../data/team';
import SingleTeam from './SingleTeam';

function Team({teamMember}) {
    const showNumber = Number(teamMember) || 4;
    return (
        <div
            id="team"
            className="team section-pb"
        >
            <div className="team-area">
                <Container>
                    <Row>
                        <div className="sectionTopTitleCenter">
                            <span className="sectionTopTag">
                                Our Team Member
                            </span>
                            <h2 className="sectionTitle">
                                Our Professional Staff
                            </h2>
                        </div>
                    </Row>
                    <Row>
                        {teams.slice(0, showNumber).map((team) => {
                            const { id, name, img, post } = team;
                            return (
                                <Col
                                    sm={6}
                                    lg={4}
                                    xl={3}
                                    className="mb-4"
                                    key={id}
                                >
                                    <SingleTeam
                                        id={id}
                                        name={name}
                                        img={img}
                                        post={post}
                                    />
                                </Col>
                            );
                        })}
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Team;
