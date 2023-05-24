# e-GymBro

<img src="https://res.cloudinary.com/dhnkuonev/image/upload/v1684901314/Draft6_bqcn2p.png" width="150" alt="logo">

### Overview

e-GymBro is a web based application that aims to provide its users with a virtual “gym bro,” a non-judgmental and free-of-cost fitness partner and mentor right at home. It helps the user in keeping track of their progress as they exercise and provides them with feedback to improve their form. It also provides the user with their very own fitness assistant called ChadGPT.

### Problem statement

Many people in this world find themselves located nowhere near a gym, are unable to find a gym trainer or cannot afford either or both. Starting a fitness journey can thus be very daunting, especially because of the risk of injury when executing exercises with improper form due to lack of supervision. This causes a lot of beginners to never start on improving their health.

### Details

The web app is hosted on a Google Compute Engine which is an N2D AMD instance running an Nginx server. The front end makes use of React with Vite, and the MediaPipe library is used for tracking the movement of the user during exercise. The fitness assistant is a chatbot powered by Google DialogFlow. The server files are stored in a Google Cloud Bucket, and the domain name is registered using Cloud Domains alongside Cloud DNS, allowing the web app to be easily accessible to anyone over the internet. We make use of Firestore to store user data and display their exercise data on the user’s dashboard. We have trained a machine learning model that predicts the user’s body fat percentage and deployed it using Vertex AI, making use of Cloud Function to update the Firestore database in the background. User authentication is handled via Identity platform. In order to ensure that all traffic on the server is encrypted and thereby preserve the privacy of its users, Let’s Encrypt has been used to create a digital certificate enabling HTTPS.

### Results

<img src="results/SS1.png" width="500" alt="chadgpt">
<img src="results/SS2.png" width="500" alt="bicel curls">
<img src="results/SS3.png" width="500" alt="squats">
<img src="results/SS4.png" width="500" alt="pushups">
<img src="results/SS5.png" width="500" alt="shoulder press">

### Future Plans

We plan to upscale our product by adding a personalized diet and training system along with a deep learning model to include yoga pose classification and correction. Furthermore, we are looking into integrating our web app with a fitness band to track the user’s vitals for better exercise and diet recommendation.

### Contributors:

Team Name: Goal Diggers

- [Anay Pareek](https://github.com/anay-p)
- [Ashutosh Rath](https://github.com/Lucif3r-in)
- [Omkar Amlan Krishna](https://github.com/OmkarAmlan)
- [Shirsho Das Roy](https://github.com/shirsho-roy)
