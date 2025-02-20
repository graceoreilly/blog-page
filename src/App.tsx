import './App.css'

function App() {
  return (
    <>
      <div className="container">
        <h1 className="title">Finding Your Perfect Type: A TypeScript Love Story</h1>
        
        <p className="intro">
          When it comes to programming, it can be hard to find the programming languaget that is right for you. JavaScript can be exciting and spontaneous, but sometimes it lacks the structure needed for a long-term commitment. Enter TypeScript—the reliable, type-safe companion that ensures your code is error-free and easier to maintain. In this post, we'll explore the basics of TypeScript and how it helps you find your perfect type.
        </p>

        <div className="card">
          <h2>Who Am I? What is TypeScript?</h2>
          <p>Think of TypeScript as JavaScript, but with a sense of responsibility.</p>
          <ul>
            <li>💡 Developed by Microsoft, TypeScript is a superset of JavaScript that introduces strong type checking.</li>
            <li>💡 TypeScript compiles to plain JavaScript, meaning it works anywhere JavaScript does.</li>
            <li>💡 It has all the features of JavaScript, plus extra tools to make your code more predictable and maintainable.</li>
            <li>💡 If JavaScript is the fun, adventurous date who keeps you guessing, TypeScript is the dependable partner who ensures you never run into unexpected surprises.</li>
          </ul>
        </div>

        <div className="card">
          <h2>Why Choose TypeScript Over JavaScript? I Have Everything JavaScript Has... And More</h2>
          <p>Dating JavaScript can be risky. It lets you make mistakes, and you won’t realize them until run time—when it's too late. TypeScript, on the other hand, gives you red flags before things go wrong.</p>
          <h3>✅ Why TypeScript is the Better Match:</h3>
          <ul>
            <li>✅ Type Checking – Avoid unwanted surprises by catching errors early.</li>
            <li>✅ Code Documentation – Type annotations make your code more readable.</li>
            <li>✅ Static Typing – Define exactly what you expect in a function or variable.</li>
            <li>✅ Code Completion – Get smarter IntelliSense and autocomplete suggestions.</li>
            <li>✅ Refactoring – TypeScript makes it easier to restructure your code without breaking everything.</li>
            <li>✅ Shorthand Notations – Write cleaner and more efficient code.</li>
          </ul>

          <h3 className="red-flags">💔 JavaScript’s Red Flags:</h3>
          <ul className="red-flags-list">
            <li>🚩 Lets you reference variables that don’t exist.</li>
            <li>🚩 Allows you to work with objects of unknown shape.</li>
            <li>🚩 If something breaks, you won’t know until run time.</li>
            <li>🚩 Can be too flexible, leading to messy, hard-to-debug code.</li>
          </ul>
        </div>

        <div className="card">
          <h2>Type Interface: Setting Expectations Early</h2>
          <h3>Implicit vs. Explicit Typing</h3>
          <p>TypeScript is smart and can infer types when you don’t explicitly specify them. However, sometimes it's best to be explicit about your types to avoid confusion.</p>
          <p className="tip">💡 Tip: Being explicit about types is like defining your relationship early—it prevents misunderstandings later!</p>
        </div>

        <div className="card">
          <h2>Arrays in TypeScript: Finding the Right Group</h2>
          <p className="tip">💡 Tip: Defining types for arrays ensures you don’t end up with unexpected values—like mixing up your ex’s phone number with your grocery list!</p>
        </div>

        <div className="card">
          <h2>Union Types: Keeping Your Options Open</h2>
          <p className="tip">💡 Tip: Union types are great for handling different possibilities, just like having an open mind in dating!</p>
        </div>

        <div className="card">
          <h2>Functions in TypeScript: Set Your Boundaries</h2>
          <p className="tip">💡 Tip: In TypeScript, if you expect two parameters, you must provide two—no unexpected guests at the dinner table!</p>
        </div>

        <div className="card">
          <h2>The any Type... The Major Red Flag 🚩</h2>
          <p>Sometimes, you meet someone who seems to be everything and nothing at the same time. In TypeScript, that’s the <code>any</code> type.</p>
          <p className="tip">💡 Tip: Using <code>any</code> too much is like dating someone who refuses to define the relationship. Unpredictable and risky!</p>
        </div>

        <div className="card">
          <h2>Finding Your Perfect Match: Custom Types and Interfaces</h2>
          <p className="tip">💡 Tip: Custom types ensure that every object meets your desired criteria, just like a well-curated dating profile!</p>
        </div>

        <div className="card conclusion">
          <h2>Conclusion: TypeScript, The One You’ve Been Looking For ❤️</h2>
          <p>TypeScript helps you:</p>
          <ul>
            <li>✔ Avoid surprises by defining types upfront.</li>
            <li>✔ Catch errors before they become a problem.</li>
            <li>✔ Write cleaner, more maintainable code.</li>
            <li>✔ Improve collaboration with clear documentation.</li>
          </ul>
          <p>While JavaScript might be fun for quick flings, TypeScript is the long-term partner you can trust. So, if you’re ready for a stable, error-free relationship with your code, it’s time to commit to TypeScript!</p>
        </div>
        
      </div>
    </>
  );
}

export default App


