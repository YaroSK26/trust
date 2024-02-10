import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

const usePlanLogic = (userId, planName) => {
  const [loading, setLoading] = useState(true);
  const [dayStates, setDayStates] = useState({
    1: { thought: false, verse: false },
    2: { thought: false, verse: false },
    3: { thought: false, verse: false },
  });
  const [planFinished, setPlanFinished] = useState(false);
  const [activeDay, setActiveDay] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!userId) return;
      setLoading(true);
      try {
        const response = await axios.get("/api/plans", {
          params: { userId, planName },
        });

        const plans = response.data.Plans;
        const newState = { ...dayStates };
        plans.forEach((plan) => {
          if (newState[plan.planDay] && plan.userId === userId) {
            newState[plan.planDay][plan.thoughtOrVerse.toLowerCase()] = true;
          }
        });
        setDayStates(newState);
        checkIfAllFilled(newState);
      } catch (error) {
        console.error("Error fetching plan data", error);
        toast.error("Failed to fetch data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId, planName]);

  const handleCheckboxChange = async (dayNumber, type) => {
    const dayNum = Number(dayNumber);
    const currentState = dayStates[dayNum][type];

    const newState = {
      ...dayStates,
      [dayNum]: { ...dayStates[dayNum], [type]: !currentState },
    };

    setDayStates(newState);

    try {
      const data = {
        userId,
        planName: planName,
        planDay: dayNum.toString(),
        thoughtOrVerse: type.charAt(0).toUpperCase() + type.slice(1),
      };

      if (!currentState) {
        await axios.post("/api/plans", data);
      } else {
        await axios.delete("/api/plans", { data: data });
      }
    } catch (error) {
      console.error("Error updating plan", error);
      toast.error("Failed to update.");
    }

    checkIfAllFilled(newState);
  };

  const checkIfAllFilled = (states) => {
    const allFilled = Object.values(states).every(
      (day) => day.thought && day.verse
    );
    setPlanFinished(allFilled);
  };

  const toggleActiveDay = (day) => {
    setActiveDay((prevDay) => (prevDay === day ? null : day));
  };

    const handleLabelClick = (event) => {
      event.stopPropagation();
    };

  return {
    loading,
    dayStates,
    planFinished,
    activeDay,
    handleCheckboxChange,
    toggleActiveDay,
    handleLabelClick,
  };
};

export default usePlanLogic;
