import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { assets, COLOURS } from "../../../constants";

// Component imports
import Header from "../../../components/Header";
import BottomNav from "../../../components/BottomNav";
import TitlePill from "../../../components/TitlePill";
import FunctionCircle from "../../../components/FunctionCircle";
import InfoModal from "../../../components/InfoModal";

// Feedback screen
export default function Feedback({
  navigation,
  showModal,
  setShowModal,
  tabActive,
  setTabActive,
}) {
  const [reviewText, setReviewText] = useState("");

  const modalText = "Thank you for submitting your feedback!";

  const onSubmit = () => {
    setShowModal(false);
    setTabActive("Home");
    navigation.navigate("Homepage");
  };

  return (
    <View style={styles.feedbackScreenWrapper}>
      {/* Header */}
      <Header />

      {/* Back button */}
      <FunctionCircle
        navigation={navigation}
        icon={assets.chevronLeftIcon}
        iconSize={42}
        navigateTo="Settings"
      />

      {/* Section title pill */}
      <View style={styles.titlePillWrapper}>
        <TitlePill title="Give Feedback" />
      </View>

      {/* Section content */}
      <View style={styles.sectionContentWrapper}>
        {/* Explanation modal */}

        {/* Explanation of screen */}
        <View style={styles.explanationContainer}>
          <Text style={styles.explanationText}>
            Your feedback is greatly appreciated and it helps us make the
            application even better!
          </Text>
        </View>

        {/* Feedback input */}
        <View style={styles.textInputContainer}>
          <TextInput
            placeholder="Please tell us what you think..."
            value={reviewText}
            onChangeText={setReviewText}
            style={styles.textInput}
          />
        </View>

        {/* Submit button */}
        <View style={styles.submitButtonContainer}>
          <View style={styles.submitButtonPill}>
            <TouchableOpacity
              onPress={() => setShowModal((previous) => !previous)}
              style={styles.submitButton}
            >
              <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Modal */}
      {showModal && (
        <View style={styles.modalOveraly}>
          <InfoModal
            modalText={modalText}
            tabActive={tabActive}
            setTabActive={setTabActive}
            answerText="OK"
            fontSize={24}
            onPress={onSubmit}
          />
        </View>
      )}
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  feedbackScreenWrapper: {
    backgroundColor: COLOURS.white,
    display: "flex",
    flex: 1,
    width: "100%",
  },

  titlePillWrapper: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
  },

  sectionContentWrapper: {
    display: "flex",
    flex: 1,
    width: "100%",
  },

  explanationContainer: {
    width: "100%",
    paddingHorizontal: 24,
  },

  explanationText: {
    fontFamily: "HammersmithOne",
    fontSize: 19,
    textAlign: "center",
  },

  textInputContainer: {
    marginTop: 24,
    width: "100%",
    height: 160,
    display: "flex",
    // flex: 1,

    paddingHorizontal: "10%",

    backgroundColor: COLOURS.white,
  },

  textInput: {
    width: "100%",
    height: "100%",
    fontFamily: "HammersmithOne",
    fontSize: 16,

    borderColor: COLOURS.lightGray,
    borderWidth: 5,
    borderRadius: 10,

    paddingHorizontal: 10,
    paddingBottom: 105,
    textAlignVertical: "top",

    backgroundColor: COLOURS.white,

    shadowColor: COLOURS.black,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.35,
    shadowRadius: 7.49,

    elevation: 12,
    zIndex: 99,
  },

  submitButtonContainer: {
    height: 100,
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

    paddingTop: 8,
  },

  submitButtonPill: {
    backgroundColor: COLOURS.yesGreen,

    borderRadius: 70,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: 192,
    height: 60,
  },

  submitButton: {
    backgroundColor: COLOURS.white,

    borderRadius: 70,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: 168,
    height: 38,

    shadowColor: COLOURS.black,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },

  submitButtonText: {
    fontFamily: "HammersmithOne",
    fontSize: 20,
    textAlign: "center",
  },

  bottomNavWrapper: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: COLOURS.white,
    paddingVertical: 20,

    display: "flex",

    shadowColor: COLOURS.black,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
    zIndex: 99,
  },

  modalOveraly: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 99,
    backgroundColor: "rgba(0,0,0,0.9)",
  },
});
