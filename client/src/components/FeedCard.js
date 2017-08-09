import React from 'react';
import { Card, Feed } from 'semantic-ui-react';

const FeedCard = (props) => (
    <Card className="userfeed">
        <Card.Content>
            <Card.Header className="userfeed-header">
                {props.cardheader}
            </Card.Header>
        </Card.Content>
        <Card.Content>
            <Feed>
                <Feed.Event>
                    <Feed.Label>
                        <img src={props.feedimg}
                            alt=" Users friends profile"
                        />
                    </Feed.Label>
                    <Feed.Content>
                        <Feed.Date content={props.feedcontent} />
                        <Feed.Summary>
                            {props.feedsummary}
                        </Feed.Summary>
                    </Feed.Content>
                </Feed.Event>
            </Feed>
        </Card.Content>
    </Card>
);

export default FeedCard;
