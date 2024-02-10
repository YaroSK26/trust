  "use client";
  import useFunctions from "../../../components/Functions";
  import Navbar from "../../../components/NavBar";
  import Footer from "../../../components/Footer";
  import { slideIn, textVariant } from "../../../utils/motion";
  import usePlanLogic from "../../../components/PlansLogic";
  import "../../../css/layout.css";
  import { withSwal } from "react-sweetalert2";
  import { motion } from "framer-motion";
  import Link from "next/link";
  import { ArrowLeft } from "lucide-react";
  import { useClerk } from "@clerk/nextjs";
import { useEffect, useState } from "react";


  const Anger = ({ swal }) => {
    const { theme, toggleTheme } = useFunctions();
    const [planName, setPlanName] = useState("Anger");
      useEffect(() => {
        if (typeof window !== "undefined") {
          const pathArray = window.location.pathname.split("/");
          const activePlan = pathArray[pathArray.length - 1]; 
          setPlanName(activePlan.charAt(0).toUpperCase() + activePlan.slice(1)); 
        }
      }, []);
    const clerk = useClerk();
    const userId = clerk.user ? clerk.user.id : null;


    const {
      loading,
      dayStates,
      planFinished,
      activeDay,
      handleCheckboxChange,
      toggleActiveDay,
      handleLabelClick,
    } = usePlanLogic(userId, planName);

    
    const handleDay1Thought = () => {
      swal.fire({
        title: "Thought",
        text: "Guilt is the heart's initial adversary, originating from actions we believe are wrong. It results in a message from within saying I owe! For instance, a man who abandons his family for another relationship inadvertently robs them of their emotional and financial security. Initially, he may not recognize the full extent of his actions, focusing instead on his immediate gains. However, when confronted with the consequences, such as a question from his daughter, he begins to feel the weight of guilt.Guilt accumulates as a debt of the spirit, one that burdens the guilty until they address it. Traditional remedies like community service or religious participation might provide temporary relief, but they don't erase the guilt. The true resolution comes from acknowledging the wrongdoing, both to oneself, to God, and importantly, to those who were wronged.The concept of confession is deeply rooted in religious teachings, such as Christianity, where it is believed to have the power to break the cycle of sin. 1 John 1:9 suggests that by confessing our sins and seeking forgiveness, we can be cleansed of our unrighteousness. This confession is more than just admitting wrong; it's a commitment to change and a step towards making amends. Guilt can lead to a continuous cycle of repeat offenses if not addressed. By keeping secrets or merely expressing regret to a higher power, one might set themselves up for future missteps. The act of confessing to those directly affected is both an acknowledgment of the pain caused and a deterrent against future wrongdoings.In essence, overcoming guilt involves a sincere acknowledgment of one's sins, seeking forgiveness, and committing to change. It's a process that not only addresses the past but also paves the way for a guilt-free, more ethical future. It's about understanding the impact of our actions, making amends, and learning to make better choices moving forward. This journey of resolution and redemption is personal, often spiritual, and always deeply transformative",
        confirmButtonColor: "#000",
        confirmButtonText: "Amen",
      });
    };
    const handleDay1Verse = () => {
      swal.fire({
        title: "Matthew 6:12-15",
        text: "And forgive us our trespasses, as we forgive our trespasses. And lead us not into temptation, but deliver us from the Evil One. For if you forgive men their trespasses, your heavenly Father will also forgive you.",
        confirmButtonColor: "#000",
        confirmButtonText: "Amen",
      });
    };
    const handleDay2Thought = () => {
      swal.fire({
        title: "Thought",
        text: "Anger, recognized as the second enemy of the heart, arises from unmet desires or perceived losses. It's often a mask for hurt, stemming from something taken, leading to a sense of injustice and a belief that someone owes us. This feeling of debt creates a bond between the debtor and creditor, fueling ongoing resentment and anger. Common expressions of this anger include feeling robbed of youth, opportunities, or relationships, and these grievances keep the angry individual trapped in a cycle of bitterness and resentment. This emotion is not just about the immediate reaction to an event but is often a sustained feeling that can control one's life for an extended period. The question then becomes: How long will one allow past hurts to dictate their present and future? The encouragement is to choose not to insist on suffering but to seek a path to freedom. The biblical reference to Ephesians 4 suggests casting away anger and embracing forgiveness, akin to how forgiveness is granted through Christ. This spiritual perspective highlights that while one cannot change past events, one has the power to control how they let these events affect their future. Forgiveness is posited as the cure for anger. It involves a conscious decision to cancel the debt, releasing both the debtor and creditor from the bonds of anger. This act is about letting go of the right to get even and instead choosing a path of emotional liberation. Overcoming anger is presented not only as a personal healing journey but as a vital step towards spiritual and emotional well-being. It involves a deliberate and often challenging process of identifying the source of anger, recognizing what is felt owed, and choosing to forgive and release the debt. This process is not a one-time act but a commitment to continually refuse to let anger resurface, maintaining a stance of forgiveness and release. In doing so, one can overcome the destructive power of anger and move towards a life characterized by peace and emotional freedom.",
        confirmButtonColor: "#000",
        confirmButtonText: "Amen",
      });
    };
    const handleDay2Verse = () => {
      swal.fire({
        title: "Ephesians 4:26-27",
        text: "Be angry, but do not sin! Do not let the sun set on your anger, and do not give place to the devil.",
        confirmButtonColor: "#000",
        confirmButtonText: "Amen",
      });
    };
    const handleDay3Thought = () => {
      swal.fire({
        title: "Thought",
        text: "Jealousy, the third heart issue, revolves around the belief that God owes me for perceived lacks, whether in looks, talents, or opportunities. This envy mistakenly targets those who have what we desire, though it's ultimately a discontent with what God has provided. Jealousy can damage relationships and personal well-being, but the remedy lies in shifting focus from coveting others' blessings to seeking what is truly best for us through divine understanding. The teachings of James suggest that our internal conflicts, born from unsatisfied desires, lead to external strife. Instead of envying others or fighting over unmet desires, we are encouraged to bring our deepest longings to God, engaging in an open and honest dialogue about our needs and wants. By presenting our concerns to God, who values us immensely, we can find peace and direction. This process isn't a one-off act but a continuous dialogue, bringing all aspects of our lives before God with confidence in His care. The ultimate assurance is that our hearts are precious to God, and by seeking His guidance and blessing, we align ourselves with a path that reflects His best for us, moving away from the destructive path of jealousy towards a journey filled with His love and provision.",
        confirmButtonColor: "#000",
        confirmButtonText: "Amen",
      });
    };
    const handleDay3Verse = () => {
      swal.fire({
        title: "1 Corinthians 10:24",
        text: "Let no one seek his own interests, but the interests of another.",
        confirmButtonColor: "#000",
        confirmButtonText: "Amen",
      });
    };

    return (
      <div>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        {loading ? (
          <p className=" text-[var(--color2)] flex justify-center items-center w-[100vw] h-[100vh] ">
            Loading...
          </p>
        ) : (
          <div className=" flex min-h-screen  flex-col  pt-20 text-[var(--color2)] justify-between items-center">
            <motion.h1
              initial="hidden"
              animate="show"
              variants={textVariant()}
              className="text-4xl  mt-10  flex justify-center items-center relative"
            >
              <ArrowLeft
                className="absolute  left-[-40px] cursor-pointer"
                onClick={() => (window.location.href = "/home")}
              />
              Anger
            </motion.h1>

            <motion.div
              variants={slideIn("left", "tween", 0.2, 1)}
              initial="hidden"
              animate="show"
              className="flex justify-center items-center  gap-10 mt-10 pb-[20px] lg:flex-row flex-col"
            >
              <div
                onClick={() => toggleActiveDay("day1")}
                className=" cursor-pointer relative w-60 h-60  rounded-lg border-2  border-[var(--color2)] bg-[var(--color1)] flex flex-col justify-center items-center"
              >
                <h1 className="text-4xl">1</h1>
                <h2 className="text-3xl">DAY</h2>
                <label className="container absolute top-1 left-1 text-2xl">
                  <input
                    disabled={loading}
                    type="checkbox"
                    checked={dayStates[1].thought && dayStates[1].verse}
                    readOnly
                  />
                  <div className="checkmark"></div>
                </label>
                {activeDay === "day1" && (
                <div className="flex flex-col gap-2 mt-2  ">
                  <div className="flex justify-center items-center gap-2 ">
                    <h1
                      onClick={() => handleDay1Thought()}
                      className="cursor-pointer underline"
                    >
                      Thought
                    </h1>
                    <label className="container cursor-pointer flex justify-end">
                      <input
                        disabled={loading}
                        type="checkbox"
                        checked={dayStates[1].thought}
                        onChange={(event) => handleCheckboxChange(1, "thought")}
                      />
                      <div className="checkmark"></div>
                    </label>
                  </div>
                  <div className="flex justify-center items-center gap-2 ">
                    <h1
                      onClick={() => handleDay1Verse()}
                      className="cursor-pointer underline   "
                    >
                      Matthew&nbsp;6:12&nbsp;-15
                    </h1>
                    <label className="container cursor-pointer">
                      <input
                        disabled={loading}
                        type="checkbox"
                        checked={dayStates[1].verse}
                        onChange={(event) => handleCheckboxChange(1, "verse")}
                      />

                      <div className="checkmark"></div>
                    </label>
                  </div>
                </div>
                )}
              </div>
              <div
                onClick={() => toggleActiveDay("day2")}
                className="cursor-pointer  relative w-60 h-60  rounded-lg border-2  border-[var(--color2)] bg-[var(--color1)] flex flex-col justify-center items-center"
              >
                <h1 className="text-4xl">2</h1>
                <h2 className="text-3xl">DAY</h2>
                <label className="container absolute top-1 left-1  text-2xl">
                  <input
                    type="checkbox"
                    checked={dayStates[2].thought && dayStates[2].verse}
                    readOnly
                  />
                  <div className="checkmark"></div>
                </label>
                {activeDay === "day2" && (
                <div className="flex flex-col gap-2 mt-2  ">
                  <div className="flex justify-center items-center gap-2 ">
                    <h1
                      className="cursor-pointer underline"
                      onClick={() => handleDay2Thought()}
                    >
                      Thought
                    </h1>
                    <label className="container cursor-pointer flex justify-end">
                      <input
                        disabled={loading}
                        type="checkbox"
                        checked={dayStates[2].thought}
                        onChange={(event) => handleCheckboxChange(2, "thought")}
                      />
                      <div className="checkmark"></div>
                    </label>
                  </div>
                  <div className="flex justify-center items-center gap-2  ">
                    <h1
                      className="cursor-pointer underline"
                      onClick={() => handleDay2Verse()}
                    >
                      Ephesians&nbsp;4:26&nbsp;-27
                    </h1>
                    <label className="container cursor-pointer ">
                      <input
                        disabled={loading}
                        type="checkbox"
                        checked={dayStates[2].verse}
                        onChange={(event) => handleCheckboxChange(2, "verse")}
                      />
                      <div className="checkmark"></div>
                    </label>
                  </div>
                </div>
                )}
              </div>
              <div
                onClick={() => toggleActiveDay("day3")}
                className="cursor-pointer relative w-60 h-60  rounded-lg border-2  border-[var(--color2)] bg-[var(--color1)] flex flex-col justify-center items-center"
              >
                <h1 className="text-4xl">3</h1>
                <h2 className="text-3xl">DAY</h2>
                <label className="container absolute top-1 left-1 text-2xl">
                  <input
                    type="checkbox"
                    checked={dayStates[3].thought && dayStates[3].verse}
                    readOnly
                  />
                  <div className="checkmark"></div>
                </label>
                {activeDay === "day3" && (
                <div className="flex flex-col gap-2 mt-2  ">
                  <div className="flex justify-center items-center gap-2 ">
                    <h1
                      className="cursor-pointer underline"
                      onClick={() => handleDay3Thought()}
                    >
                      Thought
                    </h1>
                    <label className="container cursor-pointer flex justify-end ">
                      <input
                        disabled={loading}
                        type="checkbox"
                        checked={dayStates[3].thought}
                        onChange={(event) => handleCheckboxChange(3, "thought")}
                      />
                      <div className="checkmark"></div>
                    </label>
                  </div>
                  <div className="flex justify-center items-center gap-2  ">
                    <h1
                      className="cursor-pointer underline"
                      onClick={() => handleDay3Verse()}
                    >
                      1&nbsp;Corinthians&nbsp;10:24
                    </h1>
                    <label className="container cursor-pointer">
                      <input
                        disabled={loading}
                        type="checkbox"
                        checked={dayStates[3].verse}
                        onChange={(event) => handleCheckboxChange(3, "verse")}
                      />
                      <div className="checkmark"></div>
                    </label>
                  </div>
                </div>
                )}
              </div>
            </motion.div>
            <div
              className={`text-center transition-opacity duration-300 ${
                planFinished ? "opacity-1" : "opacity-0"
              } `}
            >
              <h2 className="text-3xl font-bold">Finished Plan</h2>
              <p>
                Congratulations on completing the Anger plan! Check more from
                &nbsp;
                <Link
                  href={"https://bit.ly/2gNB92i"}
                  target="_blank"
                  className="underline"
                >
                  Andly Stanly
                </Link>
              </p>
            </div>
            <Footer></Footer>
          </div>
        )}
      </div>
    );
  };

  export default withSwal(Anger);

  //tts

  /*
  const volume2Icon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>`;
  const volumeXIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>`;

  const handleDay1Thought = () => {
    const thoughtText =
      "Guilt is the heart's initial adversary, originating from actions we believe are wrong. It results in a message from within saying I owe! For instance, a man who abandons his family for another relationship inadvertently robs them of their emotional and financial security. Initially, he may not recognize the full extent of his actions, focusing instead on his immediate gains. However, when confronted with the consequences, such as a question from his daughter, he begins to feel the weight of guilt.Guilt accumulates as a debt of the spirit, one that burdens the guilty until they address it. Traditional remedies like community service or religious participation might provide temporary relief, but they don't erase the guilt. The true resolution comes from acknowledging the wrongdoing, both to oneself, to God, and importantly, to those who were wronged.The concept of confession is deeply rooted in religious teachings, such as Christianity, where it is believed to have the power to break the cycle of sin. 1 John 1:9 suggests that by confessing our sins and seeking forgiveness, we can be cleansed of our unrighteousness. This confession is more than just admitting wrong; it's a commitment to change and a step towards making amends. Guilt can lead to a continuous cycle of repeat offenses if not addressed. By keeping secrets or merely expressing regret to a higher power, one might set themselves up for future missteps. The act of confessing to those directly affected is both an acknowledgment of the pain caused and a deterrent against future wrongdoings.In essence, overcoming guilt involves a sincere acknowledgment of one's sins, seeking forgiveness, and committing to change. It's a process that not only addresses the past but also paves the way for a guilt-free, more ethical future. It's about understanding the impact of our actions, making amends, and learning to make better choices moving forward. This journey of resolution and redemption is personal, often spiritual, and always deeply transformative";
    let isSpeaking = false; // Track the speaking state to manage the toggle

    // This function will attempt to find and set an English male voice for speech synthesis
    const getEnglishMaleVoice = () => {
      const voices = window.speechSynthesis.getVoices();
      return voices.find(voice => voice.lang.includes('en') && voice.name.includes('Male'));
    };

    const toggleSpeech = () => {
      const synth = window.speechSynthesis;
      if (isSpeaking) {
        synth.cancel();
        isSpeaking = false;
      } else {
        const utterance = new SpeechSynthesisUtterance(thoughtText);
        const englishMaleVoice = getEnglishMaleVoice();
        if (englishMaleVoice) utterance.voice = englishMaleVoice; // Use the English male voice if available
        utterance.onend = () => {
          isSpeaking = false;
          document.getElementById("soundIcon").innerHTML = volume2Icon;
        };
        synth.speak(utterance);
        isSpeaking = true;
      }
      // Update icon based on the isSpeaking state
      document.getElementById("soundIcon").innerHTML = isSpeaking ? volumeXIcon : volume2Icon;
    };

    swal.fire({
      title: '<span>Thought</span> <button id="toggleSpeechBtn" style="border: none; background-color: transparent; cursor: pointer; margin-left: 10px;"><span id="soundIcon">' + volume2Icon + '</span></button>',
      html: `<p>${thoughtText}</p>`,
      confirmButtonColor: "#000",
      confirmButtonText: "Amen",
      didOpen: () => {
        document.getElementById("toggleSpeechBtn").addEventListener("click", toggleSpeech);
      },
      willClose: () => {
        if (isSpeaking) { // Ensure speech synthesis is stopped when the alert is closed
          window.speechSynthesis.cancel();
        }
      },
      customClass: {
        title: 'swal2-title-custom'
      }
    });
  };
  */
