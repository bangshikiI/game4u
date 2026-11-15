const CONFIG = {
  title: "A Little Game For You",
  intro: "Answer my questions right and you win something. Ready?",

  questions: [
    {
      q: "How many seconds should a proper hug last for best effect? (Hint: science says it's a lot)",
      answers: ["20", "twenty", "20 seconds"],
      hint: "More than 10, less than 30.",
      reward: "u pick tonight's dessert 🍰"
    },
    {
      q: 'Where do I want to travel with u most?',
      answers: ["japan"],
      hint: "Anime.",
      reward: "One flight ticket for u in the future hehe :3"
    },
    {
      q: "What's the one thing I'd never change about you?",
      answers: ["everything"],
      hint: "You are already perfect.",
      reward: "You choose where we eat next 🍜"
    },
    {
      q: "What was the first thing I noticed about you?",
      answers: ["face card"],
      hint: "It never declines.",
      reward: "Coco & Potcor"
    },
    {
      q: "Which artist shows up the most in the first 30 songs of my playlist?",
      answers: ["malcolm todd", "malcolm"],
      hint: "Think sweet boy, think accutane...",
      reward: "Final prize unlocked: your mini playlist 🎧"
    }
  ],

  wrongMessages: [
    "Not quite. Try again 👀",
    "So close. Or not. Try again 😅",
    "Hmm, the game says no 🙈",
    "Plot twist: that's wrong 😄"
  ],

  // 🎧 The reward. Add songs you picked for her.
  playlistTitle: "Songs I'd pick for you",
  playlist: [
    { title: "Comfort Me", artist: "Malcolm Todd", note: "For the days you need someone to simply be there." },
    { title: "Velvet Light", artist: "Jakob", note: "For slow evenings and soft thoughts." },
    { title: "Home", artist: "Luke Chiang", note: "Because you feel like it." }
  ],

  finalMessage: "You won. Now press play 🎵"
};
