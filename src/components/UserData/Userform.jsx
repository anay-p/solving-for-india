import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../firebase";
import "./Userdata.css";
import { updateDoc, doc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

const UserData = () => {
  const navigate = useNavigate();

  const [uid, setUid] = useState("");
  const [neck, setNeck] = useState("");
  const [chest, setChest] = useState("");
  const [abdomen, setAbdomen] = useState("");
  const [hip, setHip] = useState("");
  const [thigh, setThigh] = useState("");
  const [knee, setKnee] = useState("");
  const [ankle, setAnkle] = useState("");
  const [biceps, setBiceps] = useState("");
  const [forearm, setForearm] = useState("");
  const [wrist, setWrist] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUid(user.uid);
      } else {
        navigate("/log-in");
      }
    });
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();

    const data = {
      "neck": neck,
      "chest": chest,
      "abdomen": abdomen,
      "hip": hip,
      "thigh": thigh,
      "knee": knee,
      "ankle": ankle,
      "biceps": biceps,
      "forearm": forearm,
      "wrist": wrist,
    };

    updateDoc(doc(db, "users", uid), data);
    navigate("/dashboard");
  };

  const skip = () => {
    navigate("/dashboard");
  };

  return (
    <div className="App1">
      <div className="appForm">
        <div className="formTitle">
          <div
            activeClassName="formTitleLink-active"
            className="formTitleLink"
            style={{
              fontWeight: "500",
              marginBottom: "10px",
              color: "whitesmoke",
            }}
          >
            Let us get to know you better...
          </div>
          <h2 style={{ color: "#f6740a", marginBottom: "0.5rem" }}>
            Please enter your body measurements
          </h2>
          <h5 style={{ fontWeight: "400" }}>
            This data will solely be used to find your body fat percentage using
            our advanced machine learning technology
          </h5>
        </div>
        <div className="formCenter">
          <form className="formFields" onSubmit={onSubmit}>
            <div className="formgroup">
              <div className="formField">
                <label className="formFieldLabel" htmlFor="height">
                  Neck Circumference (in cm)
                </label>
                <input
                  type="text"
                  id="neck"
                  className="formFieldInput"
                  placeholder="Enter your neck circumference"
                  name="neck"
                  onChange={(e) => setNeck(e.target.value)}
                />
              </div>
              <div className="formField">
                <label className="formFieldLabel" htmlFor="height">
                  Chest Circumference (in cm)
                </label>
                <input
                  type="text"
                  id="chest"
                  className="formFieldInput"
                  placeholder="Enter your chest circumference"
                  name="chest"
                  onChange={(e) => setChest(e.target.value)}
                />
              </div>
              <div className="formField">
                <label className="formFieldLabel" htmlFor="height">
                  Abdomen Circumference (in cm)
                </label>
                <input
                  type="text"
                  id="abdomen"
                  className="formFieldInput"
                  placeholder="Enter your abdomen circumference"
                  name="abdomen"
                  onChange={(e) => setAbdomen(e.target.value)}
                />
              </div>
              <div className="formField">
                <label className="formFieldLabel" htmlFor="height">
                  Hip Circumference (in cm)
                </label>
                <input
                  type="text"
                  id="hip"
                  className="formFieldInput"
                  placeholder="Enter your hip circumference"
                  name="hip"
                  onChange={(e) => setHip(e.target.value)}
                />
              </div>
              <div className="formField">
                <label className="formFieldLabel" htmlFor="height">
                  Thigh Circumference (in cm)
                </label>
                <input
                  type="text"
                  id="thigh"
                  className="formFieldInput"
                  placeholder="Enter your thigh circumference"
                  name="thigh"
                  onChange={(e) => setThigh(e.target.value)}
                />
              </div>
              <div className="formField">
                <label className="formFieldLabel" htmlFor="height">
                  Knee Circumference (in cm)
                </label>
                <input
                  type="text"
                  id="knee"
                  className="formFieldInput"
                  placeholder="Enter your knee circumference"
                  name="knee"
                  onChange={(e) => setKnee(e.target.value)}
                />
              </div>
              <div className="formField">
                <label className="formFieldLabel" htmlFor="height">
                  Ankle Circumference (in cm)
                </label>
                <input
                  type="text"
                  id="ankle"
                  className="formFieldInput"
                  placeholder="Enter your ankle circumference"
                  name="ankle"
                  onChange={(e) => setAnkle(e.target.value)}
                />
              </div>
              <div className="formField">
                <label className="formFieldLabel" htmlFor="height">
                  Biceps Circumference (in cm)
                </label>
                <input
                  type="text"
                  id="biceps"
                  className="formFieldInput"
                  placeholder="Enter your biceps circumference"
                  name="biceps"
                  onChange={(e) => setBiceps(e.target.value)}
                />
              </div>
              <div className="formField">
                <label className="formFieldLabel" htmlFor="height">
                  Forearm Circumference (in cm)
                </label>
                <input
                  type="text"
                  id="forearm"
                  className="formFieldInput"
                  placeholder="Enter your forearm circumference"
                  name="forearm"
                  onChange={(e) => setForearm(e.target.value)}
                />
              </div>
              <div className="formField">
                <label className="formFieldLabel" htmlFor="height">
                  Wrist Circumference (in cm)
                </label>
                <input
                  type="text"
                  id="wrist"
                  className="formFieldInput"
                  placeholder="Enter your wrist circumference"
                  name="wrist"
                  onChange={(e) => setWrist(e.target.value)}
                />
              </div>
            </div>
            <div className="formFieldbut">
              <button className="formFieldButton">Submit</button>
              <button className="formFieldButton" onClick={skip} type="button">
                Skip
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="appAside" />
    </div>
  );
};

export default UserData;
