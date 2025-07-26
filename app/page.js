"use client"
import { useState, useEffect } from 'react';

export default function GirlfriendProposal() {
  const [currentStep, setCurrentStep] = useState(0);
  const [showHearts, setShowHearts] = useState(false);
  const [showQuestion, setShowQuestion] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [showPleading, setShowPleading] = useState(false);

  const steps = [
    "These past two weeks have been Sanja ful",
    "Fuck you for making me say it out loud",
    "Love your sassy attitude and optimistic pessimism",
    "And how comfortable we are with each other",
    "So here goes nothing"
  ];

  useEffect(() => {
    if (currentStep < steps.length) {
      const timer = setTimeout(() => {
        setCurrentStep(currentStep + 1);
      }, 3000);
      return () => clearTimeout(timer);
    } else if (!showQuestion) {
      const timer = setTimeout(() => {
        setShowQuestion(true);
        setShowHearts(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [currentStep, steps.length, showQuestion]);

  const handleYes = () => {
    setAnswered(true);
    setShowHearts(true);
  };

  const handleNo = () => {
    setShowPleading(true);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center relative overflow-hidden">
      
      {/* Floating Hearts */}
      {showHearts && (
        <div className="fixed inset-0 pointer-events-none z-10">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute text-2xl animate-bounce opacity-80"
              style={{
                left: Math.random() * 100 + '%',
                animationDelay: Math.random() * 3 + 's',
                animationDuration: (Math.random() * 3 + 2) + 's',
                animation: `float ${Math.random() * 3 + 2}s infinite ease-in-out ${Math.random() * 3}s`
              }}
            >
              ❤️
            </div>
          ))}
        </div>
      )}

      <div className="p-8 text-center z-20 max-w-2xl mx-auto">
        
        {/* Celebration State */}
        {answered ? (
          <div className="animate-bounce">
            <h1 className="text-6xl font-bold text-black mb-6 drop-shadow-lg animate-pulse">
               FUCKING LEZZGO!
            </h1>
            <p className="text-2xl text-black mb-4 font-serif italic">
              Drinks on me next time
            </p>
          
          </div>
        ) 
        
        /* Question State */
        : showQuestion ? (
          <div className="animate-fade-in-up">
            {showPleading ? (
              <>
                <h1 className="text-4xl font-bold text-black mb-4 drop-shadow-lg font-serif animate-pulse">
                  Please say yes. I know you want to. 🥺
                </h1>
                
                <div className="flex gap-6 justify-center flex-wrap">
                  <button 
                    onClick={handleYes}
                    className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-black font-bold py-4 px-8 rounded-full text-xl transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl"
                  >
                    Yes 💖
                  </button>
                  {/* <button 
                    onClick={handleNo}
                    className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-black font-bold py-4 px-8 rounded-full text-xl transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl"
                  >
                    No 😔
                  </button> */}
                </div>
              </>
            ) : (
              <>
                <h1 className="text-5xl font-bold text-black mb-8 drop-shadow-lg animate-pulse font-serif">
                   Will be you be my date date (aka girlfriend, specifying cause ashole you cant read between the lines toh) rather than just a casual date?
                </h1>
                <div className="flex gap-6 justify-center flex-wrap">
                  <button 
                    onClick={handleYes}
                    className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-black font-bold py-4 px-8 rounded-full text-xl transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl"
                  >
                    YES! 💖
                  </button>
                  <button 
                    onClick={handleNo}
                    className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-black font-bold py-4 px-8 rounded-full text-xl transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl"
                  >
                    Maybe? 🤔
                  </button>
                </div>
              </>
            )}
          </div>
        ) 
        
        /* Story Messages */
        : (
          <div className="space-y-6">
            {steps.slice(0, currentStep + 1).map((step, index) => (
              <p 
                key={index} 
                className={`text-2xl text-black font-serif drop-shadow-lg transition-all duration-500 ${
                  index === currentStep 
                    ? 'opacity-100 scale-105 font-bold animate-pulse' 
                    : 'opacity-70'
                }`}
              >
                {step}
              </p>
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.8;
          }
          90% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(-10vh) rotate(360deg);
            opacity: 0;
          }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease;
        }
      `}</style>
    </div>
  );
}