import { React, useState } from "react";
import { Pose } from "@mediapipe/pose";
import * as cam from "@mediapipe/camera_utils";
import Webcam from "react-webcam";
import { useRef, useEffect } from "react";
import angleBetweenThreePoints from "./angle";
import Button from "react-bootstrap/Button";
import bicepcurls from "./bicepcurls.png";
import crunches from "./crunches.png";
import pushups from "./pushup.png";
import squats from "./squats.png";
import { Link, useNavigate } from "react-router-dom";
import "./counter.css";
import { useUserMedia } from "./getUSerMedia";
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
    top: 30,
    textAlign: "center",
    zIndex: 9,
    width: 960,
    height: "90vh",
    border: "2px solid blue",
    borderRadius: "10px",
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
    top: "6%",
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
  squats: {
    index: [24, 26, 28],
    ul: 170,
    ll: 50,
    ankle: [32, 28, 26],
    hip: [26, 24, 12],
  },
};

let count = 0;
let dir = 0;
let angle = 0;
let hipa = 0;
let anklea = 0;
function Squat(props) {
  //const [exr, setExr] = useState("bicepCurls");
  const { stream, error } = useUserMedia({ video: true });
  const [conf, setConf] = useState(0);
  const [conf2, setConf2] = useState(0);
  let imgSource;
  if (props.exercise === "bicepCurls") {
    imgSource = bicepcurls;
  } else if (props.exercise === "squats") {
    imgSource = squats;
  } else if (props.exercise === "pushups") {
    imgSource = pushups;
  } else if (props.exercise === "crunches") {
    imgSource = crunches;
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
      const hipangle = exrInfo[props.exercise].hip;
      const ankleangle = exrInfo[props.exercise].ankle;

      const hips = [];
      const ankles = [];
      for (let i = 0; i < 3; i += 1) {
        upadatedPos.push({
          x: position[indexArray[i]].x * width,
          y: position[indexArray[i]].y * height,
        });
      }
      for (let i = 0; i < 3; i += 1) {
        hips.push({
          x: position[hipangle[i]].x * width,
          y: position[hipangle[i]].y * height,
        });
      }
      for (let i = 0; i < 3; i += 1) {
        ankles.push({
          x: position[ankleangle[i]].x * width,
          y: position[ankleangle[i]].y * height,
        });
      }
      //console.log(upadatedPos)
      angle = Math.round(angleBetweenThreePoints(upadatedPos));
      //console.log("Angle is getting updated ",angle)
      hipa = Math.round(angleBetweenThreePoints(hips));
      anklea = Math.round(angleBetweenThreePoints(ankles));
      // Count reps
      //0 is down, 1 is up
      if (angle > exrInfo[props.exercise].ul) {
        //console.log("test angle ",angle)
        if (dir === 0) {
          //count.current = count.current + 0.5
          // count = count + 1;
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

      if (anklea < 70) {
        setConf(1);
      } else {
        setConf(0);
      }
      if (hipa < 80) {
        setConf2(1);
      } else {
        setConf2(0);
      }
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

      for (let i = 0; i < 3; i++) {
        canvasCtx.beginPath();
        canvasCtx.arc(upadatedPos[i].x, upadatedPos[i].y, 10, 0, Math.PI * 2);
        canvasCtx.fillStyle = "#AAFF00";
        canvasCtx.fill();
      }

      canvasCtx.font = "40px aerial";
      canvasCtx.fillText(angle, upadatedPos[1].x + 10, upadatedPos[1].y + 40);

      canvasCtx.restore();
    }
  }

  useEffect(() => {
    console.log("rendered");
    count = 0;
    dir = 0;
    //console.log(count.current)
    //console.log("rendered counter")
    const pose = new Pose(
      {
        locateFile: (file) => {
          return `https://cdn.jsdelivr.net/npm/@mediapipe/pose@0.5.1675469404/${file}`;
        },
      },
      []
    );
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
  });
  //console.log(props)
  function resetCount() {
    console.log("clicked");
    count = 0;
    dir = 0;
  }

  const [signedIn, setSignedIn] = useState(false);
  const [uid, setUid] = useState("");
  const navigate = useNavigate();

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
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0");
    var yyyy = today.getFullYear();

    today = dd + "_" + mm + "_" + yyyy;
    return today;
  }

  async function updateCount(setDone) {
    if (!signedIn) {
      alert(
        "You aren't signed in! Please sign up to enable exercise tracking."
      );
    } else if (count == 0) {
      alert("You haven't done any workout yet!");
    } else {
      const docRef = doc(db, "exercise_data", uid);
      await getDoc(docRef).then((docSnap) => {
        const userx = docSnap.data();
        const date = getDate();
        const data = {};
        data[date] = {
          squats: count,
        };
        if (!userx) {
          setDoc(docRef, data);
        } else {
          if (!userx[date]) {
            updateDoc(docRef, data);
          } else {
            if (!userx[date]["squats"]) {
              userx[date]["squats"] = count;
            } else {
              userx[date]["squats"] += count;
            }
            updateDoc(docRef, userx);
          }
        }
      });
      if (setDone) {
        resetCount();
      } else {
        navigate("/exercises");
      }
    }
  }

  return (
    <div className="background">
      <div style={styles.selectBox}>
        <Link to="/">
          <Button
            size="large"
            variant="contained"
            color="primary"
            style={{
              position: "absolute",
              left: "10px",
              top: "45px",
              padding: "5px 10px",
              borderRadius: "10px",
              cursor: "pointer",
              backgroundColor: "#0000004d",
              border: "2px solid black",
            }}
          >
            Home
          </Button>
        </Link>
        <h1>Workout</h1>
        <img src={imgSource} width="300" alternate="bicepimage" />
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
          <div>{conf == 1 ? <h5>Knees Leaning Forward</h5> : <h5></h5>}</div>
          <div>
            {conf2 == 1 ? <h5>Upper body hunched forward</h5> : <h5></h5>}
          </div>
          <br></br>
          <Button
            style={{
              top: 150,
              padding: "5px 10px",
              borderRadius: "10px",
              cursor: "pointer",
              marginRight: "10px",
              paddingRight: "5px",
              border: "2px solid black",
              backgroundColor: "#0000004d",
            }}
            size="large"
            variant="contained"
            color="primary"
            onClick={() => {
              updateCount(true);
            }}
          >
            Set Completed
          </Button>
          <Button
            style={{
              top: 150,
              padding: "5px 10px",
              borderRadius: "10px",
              cursor: "pointer",
              border: "2px solid black",
              backgroundColor: "#0000004d",
            }}
            size="large"
            variant="contained"
            color="primary"
            onClick={() => {
              updateCount(false);
            }}
          >
            Exercise Completed
          </Button>
          <Button
            style={{
              top: 150,
              padding: "5px 10px",
              borderRadius: "10px",
              cursor: "pointer",
              marginTop: "10px",
              border: "2px solid black",
              backgroundColor: "#0000004d",
            }}
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
    </div>
  );
}

export default Squat;
