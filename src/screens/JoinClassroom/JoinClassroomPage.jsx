import React from "react";
import styles from "./JoinClassroomPage.module.css";
import MainPic from "../../../public/static/main-classroom.png";
import {
  ClassroomPic1,
  ClassroomPic2,
  ClassroomPic3,
  ClassroomPic4,
  ClassroomPic5,
  ClassroomPic6,
  ClassroomPic7,
  ClassroomPic8,
  ClassroomPic9,
} from "../../../public/static/ClassroomCollage";

import classes from "./JoinClassroomPage.module.css";
import { Image, Col, Row, Button } from "react-bootstrap";
import { displayMobileView } from "../../../utils/screen";
import Link from "next/link";
import urls from "../../../utils/urls";

function JoinClassroomPage() {
  const isMobile = () => {
    const mobile = displayMobileView();
    return mobile;
  };
  const mobileView = isMobile();

  const jumbotron = (
    <div className={classes.jumbotron}>
      <Image fluid src={MainPic} className={classes.picture} />
      <h1 className={classes.pageName}>The Classroom</h1>
    </div>
  );

  const photoGrid = (
    <Row>
      <Col md={4} className="d-flex flex-column px-0">
        <Image src={ClassroomPic2} className={classes.classroomPicture}></Image>
        <Image src={ClassroomPic3} className={classes.classroomPicture}></Image>
        <Image src={ClassroomPic6} className={classes.classroomPicture}></Image>
      </Col>
      <Col md={4} className="d-flex flex-column px-0">
        <Image src={ClassroomPic8} className={classes.classroomPicture}></Image>
        <Image src={ClassroomPic1} className={classes.classroomPicture}></Image>
      </Col>
      <Col md={4} className="d-flex flex-column px-0">
        <Image src={ClassroomPic4} className={classes.classroomPicture}></Image>
        <Image src={ClassroomPic7} className={classes.classroomPicture}></Image>
        <Image src={ClassroomPic5} className={classes.classroomPicture}></Image>
        <Image src={ClassroomPic9} className={classes.classroomPicture}></Image>
      </Col>
    </Row>
  );

  const contents = (
    <>
      <h1 className={classes.title}>
        Everyone <span className={classes.greenText}>welcome!</span>
      </h1>
      <br />
      <p>
        The Classroom is our community of donors. Their contributions are put
        straight back into the project fund.
      </p>
      <p>
        The Classroom is our group of public donors that are opening up
        opportunities to the next generation of children. Their donations are
        put into the necessities that we take for granted: the school, their
        school materials, and the meals. This community can follow as blogs are
        posted on world updates and how the Life Is Hope projects are
        progressing.
      </p>
      <Col md={2}>
        <h1 className={classes.sectionTitle}>
          &emsp;&emsp;The <span className={classes.greenText}>Impact</span>
        </h1>
      </Col>
      <p>
        Education gives these young minds HOPE. Your contribution is an
        investment in the astounding number of refugee children out of school.
        Imagine navigating the world without anything or anyone to believe in
        you. Education paves a brighter path to becoming self-sufficient
        individuals that are capable of achieving incredible feats, just as long
        as they???re given the tools to harness those strengths.
      </p>
      <Col md={2}>
        <h1 className={classes.sectionTitle}>
          &emsp;&emsp;How To <span className={classes.greenText}>Join</span>
        </h1>
      </Col>
      <p>
        Check out the Our Work page and donate to aid the projects that we???re
        currently involved with. If you have any further questions, visit our
        Contact Us page and shoot us an email.
      </p>
    </>
  );

  if (mobileView) {
    return (
      <div>
        {jumbotron}
        <div className={styles.mainContainer}>
          <div className={classes.card}>{contents}</div>
        </div>
        <div className={classes.pictures}>{photoGrid}</div>

        <div className={classes.background}>
          <div className="d-flex flex-column justify-content-center">
            <h1 className={classes.donateTextMobile}>
              Don???t wait to change the world...the world needs the change you
              can bring now
            </h1>
            <Link href={urls.pages.donate.index}>
              <Button className={classes.donateButton}>Donate</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div>
          {jumbotron}
          <div className={styles.mainContainer}>
            <div className={classes.card}>{contents}</div>
          </div>
          <div className={classes.pictures}>{photoGrid}</div>
          <div className={classes.background}>
            <h1 className={classes.donateText}>
              Don???t wait to change the<br></br>world...the world needs the{" "}
              <br></br>
              change you can bring now
            </h1>
            <div className={classes.buttonDiv}>
              <Link href={urls.pages.donate.index}>
                <Button className={classes.donateButton}>Donate</Button>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default JoinClassroomPage;
