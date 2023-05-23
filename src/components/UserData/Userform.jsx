import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../firebase";
import "./Userdata.css";
import { updateDoc, getDocs, query, collection, where, doc } from "firebase/firestore";
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
        navigate("/log-in")
      }
    });
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();

    const data = {
      "Neck": neck,
      "Chest": chest,
      "Abdomen": abdomen,
      "Hip": hip,
      "Thigh": thigh,
      "Knee": knee,
      "Ankle": ankle,
      "Biceps": biceps,
      "Forearm": forearm,
      "Wrist": wrist
    };

    getDocs(
      query(collection(db, "users"), where("ID", "==", uid))
    ).then((querySnapshot) => {
      const docId = querySnapshot.docs[0].id;
      updateDoc(doc(db, "users", docId), data);
    });

    navigate("/dashboard")
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
          >
            Let us get to know you better...
          </div>
          <h2>Please enter your body measurements</h2>
          <h5>This data will solely be used to find your body fat percentage using our advanced machine learning technology</h5>
        </div>
        <div className="formCenter">
          <form className="formFields" onSubmit={onSubmit}>

            <div className="formgroup">


              <div className="formField">
                <label className="formFieldLabel" htmlFor="height">
                  Neck Circumference (in cm)
                </label>
                <input
                  type="number"
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
                  type="number"
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
                  type="number"
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
                  type="number"
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
                  type="number"
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
                  type="number"
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
                  type="number"
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
                  type="number"
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
                  type="number"
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
                  type="number"
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
              <button className="formFieldButton" onClick={skip} type="button">Skip</button>
            </div>
          </form>
        </div>
      </div>
      <div className="appAside" />
    </div>
  );
};

export default UserData;
