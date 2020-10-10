import React, { Component } from "react";
import PersonData from "../data/PersonData.json";
import "bootstrap/dist/css/bootstrap.min.css";
import Greeting from "../Greeting";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class PersonInfo extends Component {
  render() {
    return (
      <div className="container infobox">
        <h1 className="titleMain">
          These are the 25 prime innovators in entertainment who have shaken up
          things and ignited conversations
        </h1>
        <p className="introPara">
          If words could get tired, ‘disruptor’ would be lying on a hospital
          bed, hooked up to an IV, near death with exhaustion because it’s been
          used and abused so much in the last few years. Anyone with a mildly
          sparkling idea has been dubbed a disruptor. The frequency has frayed
          its power. It’s like the chilling line the fabulously delusional
          villain Syndrome delivers in The Incredibles – When everyone’s
          super... no one will be.
        </p>

        <p className="introPara">
          We think it’s time to reclaim the word. The Cambridge dictionary
          defines disruptor as “a person or thing that prevents something,
          especially a system, process, or event from continuing as usual or
          expected.” Disruptors are innovators who, to steal a line from T. S.
          Eliot’s iconic poem The Love Song of J. Alfred Prufrock, ‘dare disturb
          the universe.’ Something shifts because of their actions.
        </p>

        <p className="introPara">
          With this in mind, we present the first list of Film Companion
          Disruptors. These are the prime innovators in entertainment. Between
          July 1st 2018 and August 2019, these are the people who’ve shaken up
          things, ignited conversations, created new ways of seeing or found the
          beating pulse of an audience. This list was created by the Film
          Companion team, aided by researcher Trupti Kanade. For the last three
          months, we pored over names, argued accomplishments and struggled with
          who is truly a disruptor. We decided that these people are.
        </p>

        <div className="row">
          <div className="columnData">
            {PersonData.map((PDetail, index) => {
              return (
                <div className=" col-md-12 PanelData">
                  <Link to={`/greeting/${PDetail.id}`}>
                    {" "}
                    <img
                      alt="img"
                      className="infoImage"
                      src={PDetail.image}
                      width="100%"
                      height="auto"
                    />
                    <h4 className="infotitle">{PDetail.title}</h4>{" "}
                  </Link>
                  <p className="InfoPara">{PDetail.info}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

const RouterExample = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={PersonInfo} />
      <Route
        path="/greeting/:id"
        render={(props) => <Greeting text="Hello, " {...props} />}
      />
    </div>
  </Router>
);

export default PersonInfo;
