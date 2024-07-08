import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import Flip from "react-reveal/Flip";

function ExperienceJourney() {
  return (
    <div className="mt-5">
      <div>
        <Link className="btn btn-primary m-1" to="/educationjourney">
          Educational Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/experiencejourney">
          Experience Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/technicaljourney">
          Technical Journey
        </Link>
      </div>
      <div className="mt-5">
        <Flip top cascade>
          <h1>Experience Journey</h1>
        </Flip>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderLeft: "7px solid  rgb(78 22 112)" }}
          date="2023.4 - Present"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
          Freelance Developer
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
          Upwork
          </h6>
          <p>• Handled several text and image processing tasks based on Python and Django.</p>
          <p>• Managed tens of clients living in different timezones.</p>
          <p>• Provided clear updates and keeping the tight deadlines.</p>
          <p>• Provided 100% work success rate.</p>
          <p>• Developed several Solana game projects such as roulette and spin wheels.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="2022.10 - 2023.4"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
          React Front End Developer (Remote, Contract)
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
          Mad Dog Car Club(USA)
          </h6>
          <p>• Developed the front end of 3 projects using React, SASS, Bootstrap, Tailwind,
          Material-UI, TypeScript, Next.js, React Hooks, Context API, and Styled-components.</p>
          <p>• Integrated web3 parts into Ethereum, Solana and Cardano projects using web3.js
          and ethers.js.</p>
          <p>• Resolved image optimization and utilized a cookie parser to improve the performance
          of page loading by 240%.</p>
          <p>• Transformed the user experience by incorporating lazy loading via a streamlined and
          effective paginated API.</p>
          <p>• Resulted in a 60% improvement in page loading speed and substantial decrease in
          bounce rates.</p>
          <p>• Collaborated closely with the designer and backend developer, maintaining good
teamwork through communication channels such as Slack, Trello, and weekly scrum
meetings.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="2022.3 - 2022.10"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
          React Full Stack Developer (Remote, Contract)
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
          AutoScribe(USA)
          </h6>
          <p>• Oversaw the entire development process from start to finish using React, Django,
          AWS for 2 months.</p>
          <p>• Crafted and executed an MFA user authentication system that uplifted security by
50%, flawlessly integrated payment processing, resulting in a revenue jump of 30%,
and pioneered AI audio processing.</p>
          <p>• 2 Mobile app development using React Native, Expo UI, Laravel, Node.js, Firebase,
          Supabase.</p>
          <p>• To ensure scalability, used a cloud-based hosting solution and implemented load
          balancing to distribute traffic across multiple servers.</p>
          <p>• Optimized the website's performance by implementing caching, minimizing page load
          times, and optimizing images and other media files.</p>
          <p>• Revamped website traffic and user experience by 37%.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="2020.3 - 2022.3"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
          Full Stack Blockchain Engineer (Remote, Full-time)
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
          Bitfinex(Taiwan)
          </h6>
          <p>• Created and optimized components using React and Next.js. Cut development speed
          by 9%.</p>
          <p>• Drove best practice implementation for 22 employees across multiple departments.
          Decreased rework by 23% and costs by 15%.</p>
          <p>• Introduced effective database caching schema. Improved database access rate by
          17%.</p>
          <p>• Structured REST-based web services and serverless backend. Increased the user
          interaction by 30%.</p>
          <p>• Enhanced the Software Quality 15% by fixing the 150 bugs using React, Next.js,
          Express, Django, Laravel, AWS, Docker, Java, .NET.</p>
          <p>• Developed and launched 2 DeFi projects using HTML, CSS, JavaScript, React.js,
          Node.js, Web3.js and Smart contracts.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="2018.12 - 2020.02"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
          Full Stack Developer (Hybrid Remote, Full-Time)
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
          Resonac Hard Disk Singapore Pte Ltd(Singapore)
          </h6>
          <p>• Played a key role in the development, improvement, and operation of 7 web-based
          software using React.</p>
          <p>• Gained hands-on expertise in Node, Express, Nest, Django and other back-end
          frameworks as well as front-end frameworks and library such as React and Next.js.</p>
          <p>• Introduced effective database caching schema. Improved database access rate by
          17%.</p>
          <p>• Involved in new mock-ups and UI specifications for holiday events and raised 25%
          more in total sale leads.</p>
          <p>• Upgraded an ecommerce web apps to sell products online using Laravel and
          Wordpress. Expanded company revenue by 58%.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "#fbd9ad", color: "rgb(78 22 112)" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default ExperienceJourney;
