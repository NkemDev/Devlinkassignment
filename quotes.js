function generateRandomQuote() {
    const quotes = [
        "The best revenge is massive success. - Frank Sinatra",
        "Doubt kills more dreams than failure ever will.- Suzy Kassem" ,
        "Don't dream your life, live your dream.- Harriet Tubman" ,
        "You miss 100% of the shots you don't take. - Wayne Gretzky",
        "The only way to do great work is to love what you do. - Steve Jobs",
        "Fall seven times, stand up eight. - Japanese Proverb",
        "The mind is everything. What you think you become.- Buddha" ,
        "Life is not a dress rehearsal. - Eleanor Roosevelt",
        "The two most important days in your life are the day you were born and the day you find out why. - Mark Twain",
        "You are braver than you believe, stronger than you seem, and smarter than you think. - A.A. Milne" 
    ];
  
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }
  
 
  const randomQuote = generateRandomQuote();
  console.log("Random Quote:", randomQuote);
  