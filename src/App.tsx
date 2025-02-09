"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "What if I asked really nicely?",
      "Pretty please",
      "With a blueberry flavoured cheesecake?",
      "What about a bouquet",
      "PLEASE POOKIE",
      "But :*(",
      "I am going to die",
      "Yep im dead",
      "ok ur talking to Neon's ghost",
      "please bb",
      ":((((",
      "PRETTY PLEASE",
      // "Estoy muerto", // Removed Spanish
      "Ayaw mo talaga?", // Tagalog: You really don't want to?
      "Sige na please?", // Tagalog: Please, pretty please?
      "Puso mo'y bato!", // Tagalog: Your heart is stone! (Dramatic/cringe)
      "Di mo man lang ako love?", // Tagalog: You don't even love me? (Cringe/whiny)
      "Last chance na 'to ah!", // Tagalog: This is the last chance, you know! (Threateningly playful)
      "Uupakan kita diyan eh!", // Tagalog: I'll spank you there! (Playfully threatening - use with caution depending on your relationship!)
      "Joke lang hehe...", // Tagalog: Just kidding hehe... (Trying to play it cool after being cringe)
      "No :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" alt="Bear Kiss" />
          <div className="my-4 text-4xl font-bold">WOOOOOO!!! I love you pookie!! ;))</div>
        </>
      ) : (
        <>
          <img
            className="h-[150px] rounded-full mb-4" // Adjusted size and added rounded corners and margin
            src="/mica.jpg" // Path to Mica's picture in the public folder
            alt="Mica's Picture" // Added alt text
          />
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
            alt="Cute Bear with Roses" // Added alt text
          />
          <h1 className="my-4 text-4xl">Will you be my Valentine, bb?</h1> {/* Personalized question */}
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
