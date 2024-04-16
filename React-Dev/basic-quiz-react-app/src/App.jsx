function App() {
  const quizQuestions = [
    {
      Question: "What is the time complexity of Binary Search?",
      Options: [
        { answer: "O(n)", isCorrect: false },
        { answer: "O(nlogn)", isCorrect: false },
        { answer: "O(logn)", isCorrect: true },
        { answer: "O(1)", isCorrect: false },
      ],
    },
    {
      Question: "What is time complexity of Linear Search",
      Options: [
        { answer: "O(logn)", isCorrect: false },
        { answer: "O(n)", isCorrect: true },
        { answer: "O(nlogn)", isCorrect: false },
        { answer: "O(1)", isCorrect: false },
      ],
    },
  ];
  return (
    <div className="app">
      {/* <h2>React</h2> */}
      <p>{quizQuestions[0].Question}</p>
      <p>{quizQuestions[0].Options[3].answer}</p>
      {/* <p>{quizQuestions[1].Question}</p> */}
    </div>
  );
}

export default App;
