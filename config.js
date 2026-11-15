// ✏️ EDIT THIS FILE ONLY. Everything on the page comes from here.

const CONFIG = {
  title: "A Little Game For You",
  intro: "Answer my questions right and you win something. Ready?",

  questions: [
    {
      q: "Which artist shows up the most in the first 30 songs of my playlist?",
      // Accepted answers: lowercase, any of these counts as correct
      answers: ["malcolm todd", "malcolm"],
      hint: "Think sweet boy, think accutane...",
      reward: "You pick tonight's dessert 🍰"
    },
    {
      q: 'Finish this: "Slow love is still ____ love."',
      answers: ["real"],
      hint: "The opposite of fake.",
      reward: "One 60-second shoulder rub 💆"
    },
    {
      // ⚠️ CHANGE THIS: a question only the two of you know
      q: "Where did we first meet?",
      answers: ["CHANGE ME"],
      hint: "You were there too.",
      reward: "One over-the-top compliment, delivered with a straight face 😌"
    },
    {
      // ⚠️ CHANGE THIS
      q: "What was the first thing I noticed about you?",
      answers: ["CHANGE ME"],
      hint: "It wasn't your phone.",
      reward: "A voice message from me, just for you 🎙️"
    },
    {
      // ⚠️ CHANGE THIS
      q: "Which song on the playlist sounds the most like you?",
      answers: ["CHANGE ME"],
      hint: "Scroll up, you know it.",
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

  finalMessage: "You won. Now press play 💛"
};
