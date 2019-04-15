import React, {Component} from "react"
import {getCurrentMatches} from "../actions/matchAction";
import {connect} from "react-redux";
import { Container, Header, List } from "semantic-ui-react";

function mapStateToProps(state) {
    return {
        currentMatches: state.currentMatches
    };
}
/**
 * {
 *  "unique_id":1178404,
 *  "date":"2019-04-14T00:00:00.000Z",
 *  "dateTimeGMT":"2019-04-14T10:30:00.000Z",
 *  "team-1":"Kolkata Knight Riders",
 *  "team-2":"Chennai Super Kings",
 *  "type":"Twenty20",
 *  "squad":true,
 *  "toss_winner_team":"Chennai Super Kings",
 *  "winner_team":"Chennai Super Kings",
 *  "matchStarted":true
 * }
 */
class CurrentMatches extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.getCurrentMatches();
    }

    render() {
        return (
            <Container>
                <h2>Current Matches</h2>
                <List>
                    {this.props.currentMatches.map(el => (
                        <List.Item>
                            <List.Header>{el.team-1} vs {el.team-2}</List.Header>
                            {el.type}
                            {el.toss_winner_team}
                        </List.Item>
                    ))}
                </List>
            </Container>
        );
    }
}

export default connect(
    mapStateToProps,
    {getCurrentMatches}
)(CurrentMatches);