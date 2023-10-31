const quizData = [
    {
      question: '1.	Mysql is ?',
      options: ['Object Oriented Database',
        'Relational Database Management System',
        'Non Relational Database Management System',
        'All of the above'
 ],
      answer: 'Relational Database Management System',
    },
    {
      question: '2.	The maximum length of the char columns is ',
      options: ['255 bytes',
       ' 65, 535 bytes',
        '256 bytes',
        'None of the above',
 ],
      answer: '255 bytes',
    },
    {
      question: '3.	The maximum length of the varchar columns is ',
      options: ['Upto 65, 535 bytes',
        'Upto 256 bytes',
        'Upto 65, 567 bytes',
        'None of the mentioned',
 ],
      answer: 'Upto 65, 535 bytes',
    },
    {
      question: '4.	Which of the following data type is the best suitable one to store contact number?',
      options: ['Int',
        'Varchar',
        'Float',
        'Decimal',
        
        ],
      answer: 'Varchar',
    },
    {
      question: '5.	Mysql is case sensitive',
      options: [
        'True',
        'False'
        
      ],
      answer: 'False',
    },
    {
      question: '6.	How many primary keys can be in a table',
      options: ['only 1',
              ' more than 1',
               'Only 2',		
               'Depending on no of columns',
        
        ],
      answer: 'only 1',
    },
    {
      question: '7.	What operator tests column for absence of data',
      options: [
        'Not',
        'Exist',
        'Is null',
        'Not nUll'

      ],
      answer: 'Is null',
    },
    {
      question: '8.	Which of the following statement is true?',
      options: [
        'Truncate free the table space while delete does not',
        'Both truncate and delete statements free the tables space',
        'Both truncate and delete statement does not free the tables space',
        'Delete free the table space while truncate does not'
      ],
      answer: 'Truncate free the table space while delete does not',
    },
    {
      question: '9.	In SQL, Which command is used to change a table’s storage characteristics?',
      options: [
        'Alter table',
        'Modify table',
        'Change table',
        'None of these'

      ],
      answer: 'Alter table',
    },
    {
      question: '10.	Which SQL constraint do we use to set some value to a field whose value has not been added explicitly?',
      options: [
        'Unique',
        'Not null',
        'Default',
        'Check'
        
      ],
      answer: 'Default',
    },
    {
      question:'11.	The left and right joins are also known as ',
      options:['Inner join',
                'Self join',
                'Full join',
                'Natural join'
        ],
      answer:'Full join',
    },
    {
      question:'12.	__________ is an Aggregate function.',
      options:['Select',
        'Avg',
        'Modify',
        'Alter'
        ],
      answer:'Avg',
    },
    {
      question:'13.	Insert into instructor values (10211, "Smith", "Biology", 66000); What type of statement is this?',
      options:['DDL',
        'DML',
        'DCL',
        'None of the above'
        ],
      answer:'DML',
    },
    {
      question:'14.	Which of the following is true with respect to UNION?',
      options:['Combines the output from no more than two queries and must include the same number of columns',
              'Combines the output from no more than two queries and does not include the same number of columns',
              'Combines the output from multiple queries and must include the same no of columns.',
              'Combines the output from multiple queries and does not include the same no of columns'
   ],
      answer:'Combines the output from multiple queries and must include the same no of columns.',
    },
    {
      question:'15.	Which of the following is known as virtual table?',
      options:['Schema',
        'Database',
        'Stored Procedure',
        'View'
        ],
      answer:'View',
    },
    {
      question:'16.	Point out the wrong statement',
      options:['The ROW_NUMBER function simply assigns sequential numbering to the records of a result-set or to the records within groups of a result-set',
                'OVER clause is not required in all the ranking functions',
                'SQL Server introduced four different ranking functions',
                'All of them'
        ],
      answer:'OVER clause is not required in all the ranking functions',
    },
    {
      question:'17.	What is generally done if an error occurs during the transaction?',
      options:['Delete',
        'Roll back',
        'commit',
        'Update'
        ],
      answer:'Roll back',
    },
    {
      question:'18.	Views are not updatable',
      options:['False',
                'True',
        ],
      answer:'False',
    },
    {
      question:'19.	Which among the following are the correct definitions for “NULL” in Mysql?',
      options:['Zero',
                'Unknown',
 ],
      answer:'Unknown',
    },
    {
      question:'20.	Which procedure parameter enables the caller to pass in a value and get back a value?',
      options:['IN',
        'OUT',
        'INOUT',
        'GETINOUT'
        ],
    answer:'INOUT',
    },
    {
      question:'21.	A Boolean data type that can take values true, false, and',
      options:['0',
        '1',
        'NULL',
        'UNKNOWN',
        ],
      answer:'NULL',
    },
    {
      question:'22.	Aggregate functions are functions that take a ___________ as input and return a single value?',
      options:['Collection of Values',
        'Single Values',
        'Double values',
        'All of the above'
        ],
      answer:'Collection of Values',
    },
    {
      question:'23.	Which is the most important benefit of window function?',
      options:['Aggregation',
        'Association',
        'Generalization',
        'None of the above'
        ],
    answer:'Aggregation',
    },
    {
      question:'24.	Which of the following is not a mathematical function?',
      options:['Pi',
              'Sum',
             'Power',
              'Ceil'
        ],
      answer:'Sum',
    },
    {
      question:'25.	What is the meaning of LIKE ‘%0%0%’?',
      options:['Feature begins with two 0’s',
                'Feature ends with two 0’s',
                'Feature has more than two 0’s',
                'Feature has two 0’s in it, at any position'
        ],
      answer:'Feature has two 0’s in it, at any position',
    },
    {
      question:'26.	__________ returns the rank of rows within the partition of a result set, without any gaps in the ranking?',
      options:['Rank',
              'Lead',
              'Dense rank',
              'Row_number',
        ],
      answer:'Dense rank',
    },
    {
      question:'27.	Which is the correct format to store date in the SQL?',
      options:['DEC-01-1991',
              '01-1991-11',
              '01-DEC-12',
              '1991-11-01',
        
        ],
      answer:'1991-11-01',
    },
    {
      question:'28.	What is the value of val2 in the following MySQL statement?UPDATE t SET val1 = val1 +2, val2 = val1;',
      options:['val 1',
              'updated val1',
              'val2',
              'gives an error'
        ],
      answer:'updated val1',
    },
    {
      question:'29.	The comma operator can also be used to join tables',
      options:['True',
              'False'
        ],
      answer:'True',
    },
    {
    question:'30.	DROP TABLE cannot be used to drop a table referenced by a _____ constraint',
    options:['Unique',
            'Foreign key',
            'Primary key',
            'Composite key'
      ],
    answer:'Foreign key',
    },
    {
      question:'31. Commit command is used for',
      options:['To restore the old values',
                'To save the current table',
              'To save the current transaction',
              'To recover the old table'
      ],
      answer:'To save the current transaction'
    },
    {
      question:'32. The value of Primary key',
      options:['can be duplicated',
      	        'can be null',
      	      'cannot be null',
      	      'none of these'
      ],
      answer:'cannot be null'
    },
    {
      question:'33. Drop table structure is',
      options:['DML Statement',
        	    'DDL Statement',
        	    'Query Statement',
        	    'None of the above'
        ],
        answer:'DDL Statement'
    },
    {
      question:'34. A _____ is a property of the entire relation, rather than of the individual tuples in which each tuple is unique.',
      options:['Rows',
        	  'Key',
            'Attribute',
            'Fields'
        ],
        answer:'Key'
    },
    {
      question:'35. A relational database consists of a collection of',
      options:['Table',
              'Fields',
              'Records',
              'Keys'
        ],
        answer:'Table'
    },
    {
      question:'36. The term attribute refers to a ___________ of a table.',
      options:['Record',
                'Column',
                'Tuple',
                'Key',
        ],
      answer:'Column'
    },
    {
      question:'37. Which of the following is used to delete an entire MYSQL database?',
      options:['drop entiredb dbname',
              'drop database dbname',
              'drop db dbname',
              'drop dbase dbname'
        ],
        answer:'drop database dbname'
    },
    {
      question:'38. Which method is used to get the current time in MySQL?',
      options:['gettime()',
        'time()',
        'now()',
        ],
      answer:'now()'
    },
    {
      question:'39. In an RDBMS relationship between tables are created by using',
      options:['Primary Key constraint ',
        	    'Foreign Key constraint',
        	    'Default Key constraint',
        	    'Check Key constraint'
        ],
      answer:'Foreign Key constraint'
    },
    {
      question:'40. Which of the following statements is NOT true for views in SQL?',
      options:['Select statement used in the view definition cannot include ORDER BY clause.',
              'A view drives its data from the base tables(s)',
              'A view is updatable if it has been defined from a single relation',
              'A view contains a copy of the data',
        ],
      answer:'Select statement used in the view definition cannot include ORDER BY clause.'
    },
    {
      question:'41. Storing same data in many places is called.',
      options:['Iteration',
              'Concurrency',
              'Redundancy',
              'Enumeration',
        ],
      answer:'Redundancy'
    },
    {
      question:'42.If You Want To Undo A GRANT, You Should Use',
      options:[
        'ungrant',
        'undo',
        'delete',
        'revoke',
        ],
      answer:'revoke',
    },
    {
      question:'43. Which statement is used to change database?',
      options:['Use db_name;',
        	    'Want db_name;',
        	    'Change db_name;',
        	    'None of the above'
        ],
      answer:'Use db_name;'
    },
    {
    question:'44.	Character data can be stored as ______________',
    options:['Fixed length string',
            'Variable length string',
            'Either Fixed or Variable length string',
            'None of the mentioned'
      ],
      answer:'Either Fixed or Variable length string'
    },
    {
  question:'45. Which keyword is the synonym for DATABASE?',
  options:['Table',
           'Object',
            'db',
            'Schema'
    ],
    answer:'Schema'
    },
    {
      question:'46. To remove duplicate rows from the result of a SELECT use the following keyword:. ',
      options:[
        'No duplicate',
        'Distinct',
        'Unique',
        'None of the above'
        ],
      answer:'Distinct'
    },
    {
      question:'47. The statement to change the table name is __________',
      options:['Change',
              'Changename',
              'Changenm',
              'Rename'
        ],
      answer:'Rename'
    },
    {
      question:'48. SELECT select_list FROM table_list WHERE row_constraint GROUP BY grouping_columns; Which of these is not optional?',
      options:['Select_list',
              'Table_list',
              'Row_constraint',
              'Grouping_columns'
        ],
      answer:'Select_list'
    },
    {
      question:'49. How can we get the number of records or rows in a table?',
      options:[
        'Using count',
        'Using num',
        'Using number',
        'Both a and c above'
        ],
      answer:'Using count'
    },
    {
      question:'50. Which of the following ways below are the correct way to get the current date?',
      options:[
        'Select curtime();',
        'Select current_time()',
        'Select curdate();',
        'All the them',
        ],
      answer:'Select curdate();'
    },
  ];


  //forthe buttons
  const quizContainer = document.getElementById('quiz');
  const resultContainer = document.getElementById('result');
  const submitButton = document.getElementById('submit');
  const retryButton = document.getElementById('retry');
  const showAnswerButton = document.getElementById('showAnswer');
  
  let currentQuestion = 0;
  let score = 0;
  let incorrectAnswers = [];
  
  //shuffle the options every time
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  function displayQuestion() {
    const questionData = quizData[currentQuestion];
  
    const questionElement = document.createElement('div');
    questionElement.className = 'question';
    questionElement.innerHTML = questionData.question;
  
    const optionsElement = document.createElement('div');
    optionsElement.className = 'options';
  
    const shuffledOptions = [...questionData.options];
    shuffleArray(shuffledOptions);
  
    for (let i = 0; i < shuffledOptions.length; i++) {
      const option = document.createElement('label');
      option.className = 'option';
  
      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = 'quiz';
      radio.value = shuffledOptions[i];
  
      const optionText = document.createTextNode(shuffledOptions[i]);
  
      option.appendChild(radio);
      option.appendChild(optionText);
      optionsElement.appendChild(option);
    }
  
    quizContainer.innerHTML = '';
    quizContainer.appendChild(questionElement);
    quizContainer.appendChild(optionsElement);
  }
  
  function checkAnswer() {
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    if (selectedOption) {
      const answer = selectedOption.value;
      if (answer === quizData[currentQuestion].answer) {
        score++;
      } else {
        incorrectAnswers.push({
          question: quizData[currentQuestion].question,
          incorrectAnswer: answer,
          correctAnswer: quizData[currentQuestion].answer,
        });
      }
      currentQuestion++;
      selectedOption.checked = false;
      if (currentQuestion < quizData.length) {
        displayQuestion();
      } else {
        displayResult();
      }
    }
  }
  
  function displayResult() {
    quizContainer.style.display = 'none';
    submitButton.style.display = 'none';
    retryButton.style.display = 'inline-block';
    showAnswerButton.style.display = 'inline-block';
    resultContainer.innerHTML = `You scored ${score} out of ${quizData.length}!`;
  }
  
  function retryQuiz() {
    currentQuestion = 0;
    score = 0;
    incorrectAnswers = [];
    quizContainer.style.display = 'block';
    submitButton.style.display = 'inline-block';
    retryButton.style.display = 'none';
    showAnswerButton.style.display = 'none';
    resultContainer.innerHTML = '';
    displayQuestion();
  }
  
  function showAnswer() {
    quizContainer.style.display = 'none';
    submitButton.style.display = 'none';
    retryButton.style.display = 'inline-block';
    showAnswerButton.style.display = 'none';
  
    let incorrectAnswersHtml = '';
    for (let i = 0; i < incorrectAnswers.length; i++) {
      incorrectAnswersHtml += `
        <p>
          <strong>Question:</strong> ${incorrectAnswers[i].question}<br>
          <strong>Your Answer:</strong> ${incorrectAnswers[i].incorrectAnswer}<br>
          <strong>Correct Answer:</strong> ${incorrectAnswers[i].correctAnswer}
        </p>
      `;
    }
  
    resultContainer.innerHTML = `
      <p>You scored ${score} out of ${quizData.length}!</p>
      <p>Incorrect Answers:</p>
      ${incorrectAnswersHtml}
    `;
  }
  
  submitButton.addEventListener('click', checkAnswer);
  retryButton.addEventListener('click', retryQuiz);
  showAnswerButton.addEventListener('click', showAnswer);
  
  displayQuestion();


  