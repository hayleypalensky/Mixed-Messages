let theme = ['Love & Relationships', 'Wealth & Success', 'Health & Well-being', 'Mystery & Unknown', 'Personal Growth'];
let fortuneDetails = ['A new opportunity will arise', 'Someone from your past will reappear', 'A hidden talent will be revealed', 'You will face an important decision', 'Luck is in your favor today'];
let advice = ['Trust your instincts', 'Take the risk, it will pay off', 'Be patient, good things take time', 'Avoid rushing into decisions','Your energy will attract what you seek'];

let randomThemeIndex = Math.floor(Math.random() * theme.length);
let randomfortuneDetailsIndex = Math.floor(Math.random() * fortuneDetails.length);
let randomAdviceIndex = Math.floor(Math.random() * advice.length);

let randomTheme = theme[randomThemeIndex];
let randomfortuneDetails = fortuneDetails[randomfortuneDetailsIndex];
let randomAdvice = advice[randomAdviceIndex];

let randomMessage = `The theme of your fortune is ${randomTheme}. Your fortune is: ${randomfortuneDetails}. ${randomAdvice}"`

console.log(randomMessage);