import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap'

function List({ data }) {
    return (
        <div>
            {
                data.map((a, i) => {
                    return (
                        <Card key={i}>
                            <CardBody>
                                <CardTitle tag="h5">
                                    {a.name}
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    {a.quantity}
                                </CardSubtitle>
                                <CardText>
                                    {a.expiry}
                                </CardText>
                                <Button>
                                    Button
                                </Button>
                            </CardBody>
                        </Card>
                    )
                })
            }
        </div>
    );
}

export default List;