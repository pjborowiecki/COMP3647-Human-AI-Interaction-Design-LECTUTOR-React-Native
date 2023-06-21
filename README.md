# LecTutor

![Lectutor vod](https://github.com/pjborowiecki/haiid-lectutor-react-native/blob/more-fixes/img/lectutor.gif)

## Description
LecTutor is a helpful active learning application that leverages the power of Artificial Intelligence (AI) to improve the effectiveness of students' study time. The app automates the process of question creation based on lecture notes or slides, enabling users to study more efficiently.

## Disclaimer
Please note that as of now, **the AI component of LecTutor is under development and has not been integrated with the application yet**. The current version only includes the frontend development done in React Native.

## Features
- **Question and Answer Generation:** Using AI, the app creates a set of questions and answers based on the content of lecture slides or notes provided by the user. The app gives the user control to review and adjust these questions and answers to fit their study needs.
- **Review and Rating System:** Users can rate the generated quizzes and review them later. The ratings are used to improve the quality of future quizzes.
- **Studying Reminders:** The app sends reminders and incentives like a "daily streak" to help users keep consistent with their studying.
- **Data Privacy:** All user data is stored locally on the user's device, ensuring utmost privacy and security.

## Installation
**Prerequisites:**
Ensure you have the following installed on your local development machine:
- [Node.js](https://nodejs.org/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)

**Installation Process:**
\```bash
# Clone the repository
git clone https://github.com/pjborowiecki/haiid-lectutor-react-native

# Move to the LecTutor directory
cd haiid-lectutor-react-native

# Install the dependencies
yarn install

# Start the development server
npx expo start --tunnel
\```
The Expo development tool will start in your default web browser and a QR code will be displayed in the terminal. You can then use the Expo Go app on your iOS or Android device to scan the QR code and run the application. 

