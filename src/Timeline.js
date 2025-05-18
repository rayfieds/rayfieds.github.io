import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrush } from "@fortawesome/free-solid-svg-icons";
import { faComputer } from "@fortawesome/free-solid-svg-icons";
import { faI } from "@fortawesome/free-solid-svg-icons";
import { faMountain } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { GiBullHorns } from "react-icons/gi";
import { FaComputer } from "react-icons/fa6";

function Timeline() {
  return (
   <>
    <section className="styles.timelinecontainer">
        <VerticalTimeline lineColor={"white"}>
          <VerticalTimelineElement
            dateClassName="datecolor"
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#747eda" }}
            contentArrowStyle={{ borderRight: "7px solid  #747eda" }}
            date="Jan 2025 - Apr 2025"
            iconStyle={{ background: "#4064b8", color: "#fff" }}
            icon={<FaComputer />}
          >
            <h3 className="vertical-timeline-element-title">
              Tools Developer | CoreAVI 
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Waterloo, ON</h4>
            <p>
              - making cool tools for teams across the company
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            dateClassName="datecolor"
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#747eda" }}
            contentArrowStyle={{ borderRight: "7px solid  #747eda" }}
            date="Feb 2024 - present"
            iconStyle={{ background: "#4064b8", color: "#fff" }}
            icon={<GiBullHorns />}
          >
            <h3 className="vertical-timeline-element-title">
              Business Development | Hack the 6ix
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Toronto, ON</h4>
            <p>
              - asking big corps to give money so we can run cool event :D
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            dateClassName="datecolor"
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#747eda" }}
            contentArrowStyle={{ borderRight: "7px solid  #747eda" }}
            date="Aug 2023 - Sep 2024"
            iconStyle={{ background: "#4064b8", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faSun} />}
          >
            <h3 className="vertical-timeline-element-title">
              Head of Finance | JAMHacks
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Waterloo, ON</h4>
            <p>
              - funding the largest high school hackathon :D
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            dateClassName="datecolor"
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#747eda" }}
            contentArrowStyle={{ borderRight: "7px solid  #747eda" }}
            date="Sep 2023 - Dec 2023"
            iconStyle={{ background: "#4064b8", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faMountain} />}
          >
            <h3 className="vertical-timeline-element-title">
              Promotions | Hack the Ridge
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Oakville, ON</h4>
            <p>
              - did some cool branding and ran the account @hacktheridge on insta
            </p>

          </VerticalTimelineElement>

          <VerticalTimelineElement
            dateClassName="datecolor"
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#747eda" }}
            contentArrowStyle={{ borderRight: "7px solid  #747eda" }}
            date="Aug 2022 - Aug 2023"
            iconStyle={{ background: "#4064b8", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faI} />}
          >
            <h3 className="vertical-timeline-element-title">
              Instructor | Kumon
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Oakville, ON</h4>
            <p>
              - taught kids and got yelled at by parents!
            </p>

          </VerticalTimelineElement>

          {/* <VerticalTimelineElement
            dateClassName="datecolor"
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#747eda" }}
            contentArrowStyle={{ borderRight: "7px solid  #747eda" }}
            date="Sep 2021 - July 2023"
            iconStyle={{ background: "#4064b8", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faBrush} />}
          >
            <h3 className="vertical-timeline-element-title">
              President | Art Society
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Edmonton, AB</h4>
            <p>- Managed executive team to host events for students </p>
            <p>
              - Spearheaded annual mural initiative, recieving grants of $1000
            </p>
            <p>
              - Directed art enrichment meetings for 30+ members, leading 25+
              lessons in 2 years
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            dateClassName="datecolor"
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#747eda" }}
            contentArrowStyle={{ borderRight: "7px solid  #747eda" }}
            date="Sep 2021 - Feb 2023"
            iconStyle={{ background: "#4064b8", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faComputer} />}
          >
            <h3 className="vertical-timeline-element-title">
              Captain | CyberPatriots
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Edmonton, AB</h4>
            <p>
              - Led team of 6 students in international cyber security competition
              hosted by the Air & Space Forces Association
            </p>
            <p>
              - Secured Windows, Linux, and Server systems from cyber security
              threats
            </p>
            <p>- Placed in the top 2.5% out of 3000+ teams</p>
          </VerticalTimelineElement> */}
        </VerticalTimeline>
      </section>
    </>
  );
}

export default Timeline;