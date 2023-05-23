import { React, useState } from "react";
import { Pose } from "@mediapipe/pose";
import * as cam from "@mediapipe/camera_utils";
import Webcam from "react-webcam";
import { useRef, useEffect } from "react";
import angleBetweenThreePoints from "./angle";
import Button from "react-bootstrap/Button";
import bicepcurls from "./BicepCurl.png";
import pushups from "./pushup.png";
import squats from "./squats.png";
import { Link,NavLink } from "react-router-dom";
import { useUserMedia } from "./getUSerMedia";
import "./counter.css";
import { auth, db } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
const styles = {
  webcam: {
    position: "absolute",
    marginRight: "auto",
    marginLeft: "auto",
    left: 0,
    right: 800,
    top: 10,
    textAlign: "center",
    zIndex: 9,
    width: 960,
    height: 720,
  },
  countBox: {
    position: "absolute",
    marginRight: "auto",
    marginLeft: "auto",
    left: 1100,
    right: 0,
    top: 600,
    width: 400,
    height: 100,
  },
  selectBox: {
    position: "absolute",
    marginRight: "auto",
    marginLeft: "auto",
    left: 1000,
    right: 0,
    top: 90,
    padding: 40,
    textAlign: "center",
    width: 400,
    color: "#05386B",
    background: "#FFFFFF",
    borderRadius: 10,
    border: "3px solid #f6740a",
  },
  back: {
    position: "absolute",
    display: "hidden",
    marginRight: "auto",
    marginLeft: "auto",
    left: 1700,
    right: 0,
    top: 850,
  },
};

const exrInfo = {
  bicepCurls: {
    index: [12, 14, 16],
    ul: 150,
    ll: 50,
    swing: [24, 12, 14],
    lls: 35,
    uls: 180,
  },
};

let count = 0;
let dir = 0;
let angle = 0;
let swinga = 0;
let str;

function Bicepcurl(props) {
  //const [exr, setExr] = useState("bicepCurls");
  const { stream, error } = useUserMedia({ video: true });
  const [conf, setConf] = useState(0);
  let imgSource;
  if (props.exercise === "bicepCurls") {
    imgSource = bicepcurls;
  } else if (props.exercise === "squats") {
    imgSource = squats;
  } else if (props.exercise === "pushups") {
    imgSource = pushups;
  }

  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  //const count = useRef(null);
  //const dir = useRef(null);
  //let angle = useRef();
  let camera = null;
  const countTextbox = useRef(null);

  function onResult(results) {
    if (results.poseLandmarks) {
      const position = results.poseLandmarks;

      // set height and width of canvas
      canvasRef.current.width = webcamRef.current.video.videoWidth;
      canvasRef.current.height = webcamRef.current.video.videoHeight;

      const width = canvasRef.current.width;
      const height = canvasRef.current.height;

      //ratios between 0-1, covert them to pixel positions
      const upadatedPos = [];
      const indexArray = exrInfo[props.exercise].index;
      const swingangle = exrInfo[props.exercise].swing;
      const swings = [];
      for (let i = 0; i < 3; i += 1) {
        upadatedPos.push({
          x: position[indexArray[i]].x * width,
          y: position[indexArray[i]].y * height,
        });
      }
      for (let i = 0; i < 3; i += 1) {
        swings.push({
          x: position[swingangle[i]].x * width,
          y: position[swingangle[i]].y * height,
        });
      }
      //console.log(upadatedPos)

      angle = Math.round(angleBetweenThreePoints(upadatedPos));
      //console.log("Angle is getting updated ",angle)
      swinga = Math.round(angleBetweenThreePoints(swings));
      // Count reps
      //0 is down, 1 is up
      if (angle > exrInfo[props.exercise].ul) {
        //console.log("test angle ",angle)
        if (dir === 0) {
          //count.current = count.current + 0.5
          console.log(count, " ", dir, " decrement ", angle);
          dir = 1;
        }
      }
      if (angle < exrInfo[props.exercise].ll) {
        if (dir === 1) {
          count = count + 1;
          console.log(count, " ", dir, " increment ", angle);
          dir = 0;
        }
      }

      if (swinga > 35) {
        setConf(1);
      } else {
        setConf(0);
      }
      // if(conf==1)
      // {
      //     str="Lock elbow in position";
      // }
      // else{
      //     str="";
      // }

      //console.log(count.current)
      const canvasElement = canvasRef.current;
      const canvasCtx = canvasElement.getContext("2d");
      canvasCtx.save();

      canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
      //canvasCtx.drawImage(results.image, 0, 0, canvasElement.width, canvasElement.height)

      for (let i = 0; i < 2; i++) {
        canvasCtx.beginPath();
        canvasCtx.moveTo(upadatedPos[i].x, upadatedPos[i].y);
        canvasCtx.lineTo(upadatedPos[i + 1].x, upadatedPos[i + 1].y);
        canvasCtx.lineWidth = 2;
        canvasCtx.strokeStyle = "white";
        canvasCtx.stroke();
      }
      //   for (let i = 0; i < 2; i++) {
      //     canvasCtx.beginPath();
      //     canvasCtx.moveTo(swings[i].x, swings[i].y);
      //     canvasCtx.lineTo(swings[i + 1].x,swings[i + 1].y);
      //     canvasCtx.lineWidth = 2;
      //     canvasCtx.strokeStyle = "white";
      //     canvasCtx.stroke();
      //   }
      for (let i = 0; i < 3; i++) {
        canvasCtx.beginPath();
        canvasCtx.arc(upadatedPos[i].x, upadatedPos[i].y, 10, 0, Math.PI * 2);
        canvasCtx.fillStyle = "#AAFF00";
        canvasCtx.fill();
      }
      //   for (let i = 0; i < 3; i++) {
      //     canvasCtx.beginPath();
      //     canvasCtx.arc(swings[i].x,swings[i].y, 10, 0, Math.PI * 2);
      //     canvasCtx.fillStyle = "#AAFF00";
      //     canvasCtx.fill();
      //   }
      canvasCtx.font = "40px aerial";
      canvasCtx.fillText(angle, upadatedPos[1].x + 10, upadatedPos[1].y + 40);
      //   canvasCtx.fillText(swinga, swings[1].x + 10, swings[1].y + 40);
      canvasCtx.restore();
    }
  }

  useEffect(() => {
    console.log("rendered");
    count = 0;
    dir = 0;

    //console.log(count.current)
    //console.log("rendered counter")
    const pose = new Pose({
      locateFile: (file) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/pose@0.5.1675469404/${file}`;
      },
    });
    pose.setOptions({
      modelComplexity: 1,
      smoothLandmarks: true,
      minDetectionConfidence: 0.6,
      minTrackingConfidence: 0.5,
    });

    pose.onResults(onResult);

    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null
    ) {
      camera = new cam.Camera(webcamRef.current.video, {
        onFrame: async () => {
          countTextbox.current.value = count;

          await pose.send({ image: webcamRef.current.video });
        },
        width: 640,
        height: 480,
      });
      camera.start();
    }
  }, []);
  //console.log(props)
  function resetCount() {
    console.log("clicked");
    count = 0;
    dir = 0;
  }

  const [signedIn, setSignedIn] = useState(false);
  const [uid, setUid] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setSignedIn(true);
        setUid(user.uid);
      }
    });
  }, []);

  function getDate() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    today = dd + '_' + mm + '_' + yyyy;
    return today;
  }

  function updateCount() {
    if (!signedIn) {
      alert("You aren't signed in! Please sign up to enable exercise tracking.");
    } else if (count == 0) {
      alert("You haven't done any workout yet!")
    } else {
      const docRef = doc(db, "exercise_data", uid);
      getDoc(docRef)
      .then((docSnap) => {
        const userx = docSnap.data();
        const date = getDate();
        const data = {}
        data[date] = {
          "bicep_curls": count
        }
        if (!userx) {
          setDoc(docRef, data);
        } else {
          if (!userx[date]) {
            updateDoc(docRef, data);
          } else {
            if (!userx[date]["bicep_curls"]) {
              userx[date]["bicep_curls"] = count;
            } else {
              userx[date]["bicep_curls"] += count;
            }
            updateDoc(docRef, userx);
          }
        }
      });
    }
  }

  return (
    <div className="background">
       
      <div style={styles.selectBox}>
      <div className="pageSwitcher">
          <NavLink
            exact
            to="/"
            activeClassName="pageSwitcherItem-active"
            className="pageSwitcherItem"
          >
            Home
          </NavLink>
        </div>
        <h1>Workout</h1>
        <img src={bicepcurls} width="300" alternate="bicepimage" />
        <br></br>
        <div style={{ top: 50 }}>
          <h1>Count</h1>
          <input
            variant="filled"
            ref={countTextbox}
            value={count}
            textAlign="center"
            style={{ height: 50, fontSize: 40, width: 80 }}
          />
          <br></br>
          {/* <input value={str} style={{color: "black"}}/> */}
          <div className="warningtext">
            {conf ? <h5>Lock Shoulder in Position</h5> : <h5></h5>}
          </div>
          <br></br>
          <Button
            style={{ top: 150 }}
            size="large"
            variant="contained"
            color="primary"
            onClick={resetCount}
          >
            Reset Counter
          </Button>
        </div>
      </div>
      <Webcam ref={webcamRef} style={styles.webcam} />
      <canvas ref={canvasRef} style={styles.webcam} />
      {/* <div style={styles.back}>
        <Link to="/">
          <Button size="large" variant="contained" color="primary">
            Back
          </Button>
        </Link>
      </div> */}
    </div>
  );
}

export default Bicepcurl;
