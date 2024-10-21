'use client';
import { useState } from "react";
import { useRouter } from "next/navigation"; 
import { Josefin_Sans } from 'next/font/google'; 

const josefinSans = Josefin_Sans({
  weight: ['400', '700'],  
  subsets: ['latin'],     
});

const reviews = [
  {
    text: "An absolute masterpiece! The storyline was captivating, and the characters were well developed. I found myself completely immersed from beginning to end. Definitely a movie I would watch again!",
    movie: "Inception (2010)",
    score: "91.56%",
    sentiment: "Positive",
  },
  {
    text: "I was so disappointed with this movie. I struggled to stay awake during most of it. The characters were one-dimensional, and the acting was lackluster at best. A complete waste of time.",
    movie: "The Last Airbender (2010)",
    score: "90.14%",
    sentiment: "Negative",
  },
];

const HeroSection = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const router = useRouter(); 

  const nextReview = () => {
    setCurrentReviewIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevReview = () => {
    setCurrentReviewIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const currentReview = reviews[currentReviewIndex];
  const nextReviewCard = reviews[(currentReviewIndex + 1) % reviews.length];

  const handleGetStarted = () => {
    router.push("/review"); 
  };

  return (
    <section
      className={`relative w-full h-screen bg-cover bg-center ${josefinSans.className}`}
      style={{
        backgroundImage: "url('/images/movies.png')",
        backgroundSize: "cover",   
        backgroundPosition: "center",  
        backgroundRepeat: "no-repeat", 
        height: "100vh",  
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white ">
        <div className="mt-20">
          <h4 className="text-5xl md:text-5xl font-bold mb-4 leading-tight">
            Curious what your review is really <br /> saying? Drop it and Let’s unveil <br /> the sentiment magic!
          </h4>
          <button
            className="bg-blue-500 hover:bg-orange-600 transition-colors duration-300 px-6 py-1 text-lg font-semibold rounded-md"
            onClick={handleGetStarted} 
          >
            Get Started
          </button>
        </div>

        <div className="flex justify-center items-center space-x-4 mt-8">
          <button
            className="text-blue-500 rounded-full p-4 hover:bg-gray-200"
            onClick={prevReview}
          >
            &#9664;
          </button>

          <div className="flex space-x-6 p-4 ">
            <div
              className="backdrop-blur-lg p-4 rounded-lg shadow-lg text-white text-left max-w-sm max-h-60"
              style={{ backgroundColor: "rgba(217, 217, 217, 0.5)" }}
            >              
              <blockquote className="italic mb-4">{`"${nextReviewCard.text}"`}</blockquote>
              <p className="font-bold">{nextReviewCard.movie}</p>
              <p>Confidence Score: {nextReviewCard.score}</p>
              <p>Sentiment: {nextReviewCard.sentiment}</p>
            </div>

            <div
              className="backdrop-blur-lg p-4 rounded-lg shadow-lg text-white text-left max-w-sm"
              style={{ backgroundColor: "rgba(217, 217, 217, 0.5)" }}
            >              
              <blockquote className="italic mb-4">{`"${nextReviewCard.text}"`}</blockquote>
              <p className="font-bold">{nextReviewCard.movie}</p>
              <p>Confidence Score: {nextReviewCard.score}</p>
              <p>Sentiment: {nextReviewCard.sentiment}</p>
            </div>
          </div>          <button
            className="text-blue-500 rounded-full p-4 hover:bg-gray-200"
            onClick={nextReview}
          >
            &#9654;
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
