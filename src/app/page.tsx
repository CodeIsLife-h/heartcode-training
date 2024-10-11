"use client";
import { FlipWords } from "@/components/ui/flip-words";
import { useEffect, useState } from "react";

export default function Home() {
  const words: string[] = ["cigarettes", "drugs", "alcohol"];
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <div>
      <div className="bg-[url('/drugabuse.jpg')] bg-cover bg-fixed">
        <div className="flex flex-col justify-center h-dvh ">

          <p className="font-bold text-5xl text-center text-white">
            Do you do
            {isMounted ? <FlipWords words={words} /> : words[0]}
            ?
          </p>

          <div className="text-xl text-center py-2 text-white">Scroll down to find out more.</div>
        </div>
      </div>


      <div className="bg-[url('/landscape.gif')] bg-cover">

 {/* Parallax Section with Additional Text Boxes */}
 <div className="parallax relative h-screen" style={{ backgroundImage: "url('/drugabusegif5.gif')" }}>
        <div className="flex flex-col items-center justify-center h-full">
          {/* Title */}
          <h2 className="text-black text-4xl font-bold mb-8">Understanding the Dangers of Drug Use</h2>

          {/* Additional Text Boxes in the Parallax Section */}
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* First Row */}
            <div className="p-4 bg-white bg-opacity-80 rounded-md shadow-lg">
              <h3 className="font-bold text-lg text-black">Physical Health Risks</h3>
              <p className="text-base text-black">
                Drug use can lead to a range of serious health issues, such as organ damage, respiratory problems, and increased risk of infectious diseases.
                Understanding these dangers is crucial for making informed choices.
              </p>
            </div>
            <div className="p-4 bg-white bg-opacity-80 rounded-md shadow-lg">
              <h3 className="font-bold text-lg text-black">Mental Health Challenges</h3>
              <p className="text-base text-black">
                Substance abuse can trigger or worsen mental health disorders, including depression, anxiety, and paranoia.
                Awareness of these effects can encourage individuals to seek help and prioritize their mental well-being.
              </p>
            </div>

            {/* Second Row */}
            <div className="p-4 bg-white bg-opacity-80 rounded-md shadow-lg ">
              <h3 className="font-bold text-lg text-black">Impact on Relationships</h3>
              <p className="text-base text-black">
                Drug use can strain relationships with family, friends, and colleagues, leading to isolation and conflict.
                Recognizing this impact is vital for fostering supportive environments that promote recovery.
              </p>
            </div>
            <div className="p-4 bg-white bg-opacity-80 rounded-md shadow-lg">
              <h3 className="font-bold text-lg text-black">Legal and Financial Consequences</h3>
              <p className="text-base text-black">
                Involvement with drugs can result in legal troubles, including arrests and fines, as well as financial instability due to treatment costs or loss of employment.
                Understanding these risks can help individuals make safer choices.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    

    </div>

  );
}
