const QuizData = {
  topic: 'Javascript',
  level: 'Beginner',
  totalQuestions: 10, 
  perQuestionScore: 5,
  questions: [
    {
      question: 'What is the result of the expression "10" - 5 in JavaScript?',
      choices: ['5', '10', '15', 'Error'],
      type: 'MCQs',
      correctAnswer: '5',
    },
    {
      question: 'Which method is used to remove the last element from an array in JavaScript?',
      choices: ['remove()', 'pop()', 'delete()', 'splice()'],
      type: 'MCQs',
      correctAnswer: 'pop()',
    },
    {
      question: 'What does DOM stand for in JavaScript?',
      choices: ['Document Object Model', 'Data Object Model', 'Document Oriented Model', 'None of the above'],
      type: 'MCQs',
      correctAnswer: 'Document Object Model',
    },
    {
      question: 'Which symbol is used for single-line comments in JavaScript?',
      choices: ['//', '/*', '#', '%'],
      type: 'MCQs',
      correctAnswer: '//',
    },
    {
      question: 'What does NaN represent in JavaScript?',
      choices: ['Not a Number', 'Null and None', 'Number', 'Negative Number'],
      type: 'MCQs',
      correctAnswer: 'Not a Number',
    },
    {
      question: 'What is the result of the expression "10" + 20 in JavaScript?',
      choices: ['30', '1020', 'Error', '102020'],
      type: 'MCQs',
      correctAnswer: '1020',
    },
    {
      question: 'Which built-in method adds one or more elements to the end of an array and returns the new length of the array?',
      choices: ['push()', 'join()', 'pop()', 'concat()'],
      type: 'MCQs',
      correctAnswer: 'push()',
    },
    {
      question: 'What is the correct JavaScript syntax to write "Hello World"?',
      choices: ['response.write("Hello World")', 'print("Hello World")', 'document.write("Hello World")', 'console.log("Hello World")'],
      type: 'MCQs',
      correctAnswer: 'console.log("Hello World")',
    },
    {
      question: 'Which operator is used to assign a value to a variable in JavaScript?',
      choices: ['-', '=', '*', '+'],
      type: 'MCQs',
      correctAnswer: '=',
    },
    {
      question: 'What is the output of the following code snippet? \n\n console.log(typeof(null));',
      choices: ['Object', 'Undefined', 'Null', 'String'],
      type: 'MCQs',
      correctAnswer: 'Object',
    },
  ],
};

export default QuizData;
