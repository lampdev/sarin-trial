const colors = [
  "Brown (light)",
  "Brown (Medium)",
  "Brown (Dark)",
  "Fancy yellow (Light fancy)",
  "Fancy yellow (Fancy)",
  "Fancy yellow (Intense)",
  "Fancy yellow (Vivid)",
  "Blue (Light fancy)",
  "Blue (Fancy)",
  "Blue (Intense)",
  "Blue (Vivid)",
  "Pink (Light fancy)",
  "Pink (Fancy)",
  "Pink (Intense)",
  "Pink (Vivid)"
];

const colorAnswers = colors.map((color, key) => {
  return {
    answer: color,
    action: "continue",
    key: String.fromCharCode(key + 65)
  };
});

export default {
  callToAction: "Upload new parcel form",
  launchButton: "Upload",
  formId: "registration",
  questions: [
    {
      question: "Tender",
      type: "single",
      answers: [
        {
          answer: "Libero",
          action: "continue",
          key: "A"
        },
        {
          answer: "Pariatur",
          action: "continue",
          key: "B"
        },
        {
          answer: "Sunt",
          action: "continue",
          key: "C"
        },
        {
          answer: "Id",
          action: "continue",
          key: "D"
        },
        {
          answer: "Nam",
          action: "continue",
          key: "E"
        }
      ]
    },
    {
      question: "Parcel Number",
      type: "number"
    },
    {
      question: "Size",
      type: "number"
    },
    {
      question: "Color by eye",
      type: "single",
      answers: colorAnswers
    },
    {
      question: "Comment on color by eye",
      type: "text"
    },
    {
      question: "Color by machine",
      type: "single",
      answers: colorAnswers
    },
    {
      question: "Comment on color by machine",
      type: "text"
    },
    {
      question: "Fluorescence",
      type: "single",
      answers: [
        {
          answer: "None",
          action: "continue",
          key: "A"
        },
        {
          answer: "Faint",
          action: "continue",
          key: "B"
        },
        {
          answer: "Medium",
          action: "continue",
          key: "C"
        },
        {
          answer: "Strong",
          action: "continue",
          key: "D"
        },
        {
          answer: "Very Strong",
          action: "continue",
          key: "E"
        }
      ]
    },
    {
      question: "Comment fluorescence",
      type: "text"
    },
    {
      question: "Valuation",
      type: "number"
    },
    {
      id: "thank-you",
      question: "Save",
      type: "submit"
    }
  ]
};
