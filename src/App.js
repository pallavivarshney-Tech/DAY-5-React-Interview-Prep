import logo from './logo.svg';
import './App.css';
import HOC from './HOC.jsx';
import ButtonClick from './ButtonClick';
import Hover from './Hover'
import NewComponent from './NewComponent';

function App() {
  return (
    <div className="App">
    <h1>React Interview Prep- Day-5</h1>
<HOC />
    <ButtonClick />
    <Hover />
    <NewComponent/>
    
     <h1>Question-2</h1>
     <h2>Do you know about SEO ? Is it true that react js supports SEO support</h2>
     <p>Search engine optimisation (SEO) is the process of improving the quality and quantity of website traffic to a website or a web page from search engines. SEO targets unpaid traffic (known as “natural” or “organic” results) rather than direct traffic or paid traffic. React helps build a very user-friendly UI that is also valuable by SEO, so you definitely shouldn't avoid it while creating a user interface for your app/website. However, you should use some tricks to ensure that your React-site is understandable for Google crawlers and, therefore, good for SEO.</p>
     <h1>Question-3</h1>
     <h2>clean up in useEffect?</h2>
     <p>clean up function: this function gets executed when the component is unmounted from the screen. This is mostly used for memory leaks. //componentWillUnmount : Cleanup function in useEffect. </p>
     <h1>Question-4</h1>
     <h2>What is the use of useCallback and useMemo</h2>
   <h4>Use Memo</h4>
     <p>React has a built-in hook called useMemo that allows you to memoize expensive functions so that you can avoid calling them on every render. You simple pass in a function and an array of inputs and useMemo will only recompute the memoized value when one of the inputs has changed.</p>
     <h4>Use Call Back Hooks</h4>
   <p>useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed. This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.</p>
   <h1>Question-5</h1>
   <h2>Why do we need keys in react list?</h2>
   <p>The main purpose of keys is to help React differentiate and distinguish elements from each other, increasing its performance when diffing between the virtual and real DOM. To use keys, simply add the prop inside an element such as

. Unique IDs are the best value to assign to keys. (or) "Key" prop is used to look pretty, and there is no benefit whatsoever. "Key" prop is a way for React to identify a newly added item in a list and compare it during the "diffing" algorithm. It is one of the attributes in HTML. It is NOT commonly used in an array.</p>
<h1>Question-6</h1>
<h2>Do you know about redux</h2>
<p>Redux is a pattern and library for managing and updating application state, using events called "actions". It serves as a centralized store for state that needs to be used across your entire application, with rules ensuring that the state can only be updated in a predictable fashion. Here is a small example of react and Redux application.
React Redux is the official React binding for Redux. It allows React components to read data from a Redux Store, and dispatch Actions to the Store to update data. Redux helps apps to scale by providing a sensible way to manage state through a unidirectional data flow model.</p>
    </div>
  );
}

export default App;
