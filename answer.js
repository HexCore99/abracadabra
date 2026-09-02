//Question 1 => Value Detective
function describeValue(val) {
  let truFalse = "truthy";
  if (!val || isNaN(val)) {
    truFalse = "falsy";
  }
  return `${typeof val} | ${truFalse}`;
}


// Question 2 => Bangladesh Weekend Machine
function getDayType(dayName) {
  dayName = dayName.toLowerCase();
  switch (dayName) {
    case "friday":
    case "saturday":
      return "Weekend";
    case "sunday":
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
      return "Working Day";
    default:
      return "Invalid Day";
  }
}


// Question 3 => username Gatekeeper
function validateUsername(str) {
  let copy = str.toLowerCase();
  if (copy.length < 4) {
    return "Too Short";
  }
  if (copy.includes(" ")) {
    return "No Space Allowed";
  }
  if (copy.includes("admin")) {
    return "Reserved Word";
  }
  return "Available";
}


// Question 4 => Dhaka CNG Fare Meter
function getCngFare(distance, isNight = false, waitingMinutes = 0) {
  if (distance <= 0) {
    return 0;
  }

  if (distance <= 2) {
    return 50;
  }
  let subTotal = 50 + 15 * (distance - 2);
  let waitingCharge = waitingMinutes * 2;
  let total = subTotal + waitingCharge;

  if (isNight) {
    return total + total * 0.2;
  }
  return total;
}


// Qusetion 5 => Run Chase Commentator
const getChaseVerdict = (target, scored, ballsLeft) => {
  const runsNeeded = target - scored;
  if (runsNeeded <= 0) {
    return "Won";
  }
  if (ballsLeft <= 0) {
    return "Lost";
  }

  const requiredRate = (runsNeeded / ballsLeft) * 6;

  if (requiredRate <= 6)
    return `Need ${runsNeeded} runs in ${ballsLeft} balls | Comfortable`;
  if (requiredRate <= 12)
    return `Need ${runsNeeded} runs in ${ballsLeft} balls | Tough`;
  return `Need ${runsNeeded} runs in ${ballsLeft} balls | Almost Impossible`;
};
