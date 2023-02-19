const readline = require('readline');

const askMe = {
  name: "What's your name/nickname?",
  hobby: "What's an activity you like doing?",
  favouriteMusic: "What do you listen to while doing that?",
  favouriteMeal: "Which meal is your favourite(eg: dinner, brunch, etc.)",
  favouriteFood: "What's your favourite thing to eat for that meal?",
  favouriteSport: "Which sport is your absolute favourite?",
  superpower: "What is your superpower? In a few words, tell us what you are amazing at!"
};

const answers = {
  name: '',
  hobby: '',
  favouriteMusic: '',
  favouriteMeal: '',
  favouriteFood: '',
  favouriteSport: '',
  superpower: ''
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`${askMe.name} `, (answer) => {
  answers.name = answer;
  rl.question(`${askMe.hobby} `, (answer) => {
    answers.hobby = answer;
    rl.question(`${askMe.favouriteMusic} `, (answer) => {
      answers.favouriteMusic = answer;
      rl.question(`${askMe.favouriteMeal} `, (answer) => {
        answers.favouriteMeal = answer;
        rl.question(`${askMe.favouriteFood} `, (answer) => {
          answers.favouriteFood = answer;
          rl.question(`${askMe.favouriteSport} `, (answer) => {
            answers.favouriteSport = answer;
            rl.question(`${askMe.superpower} `, (answer) => {
              answers.superpower = answer;
              const profile = `My name is ${answers.name}. I like ${answers.hobby}. I enjoy listening to ${answers.favouriteMusic} while ${answers.hobby}. My favourite meal is ${answers.favouriteMeal} and I usually eat ${answers.favouriteFood}. I am a die hard fun of ${answers.favouriteSport}. I am amazing at ${answers.superpower}.`;
              console.log("...........................");
              console.log(profile);
              rl.close();
            });
          });
        });
      });
    });
  });
});