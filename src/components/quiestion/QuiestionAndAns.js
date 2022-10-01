import React from 'react';

const QuiestionAndAns = () => {
    return (

        <div className="grid grid-cols-1 md:grid-cols-4 mt-10 ">

        <div className="bg-blue-300 col-span-3 rounded-2xl">
            <br />
            <h1 className=' text-4xl text-center  font-bold underline'>Blog Section</h1>
            <br />
            <h1 className='text-2xl  font-bold'>(i) How Does React Work?</h1>

            <p className='my-3 text-xl m-3  w-10/12'>
            React is a JavaScript library. React allow developers to easily create fast user interfaces for websites and applications alike. The main concept of React. js is virtual DOM.How does ReactJS work behind the scenes?
            Image result for how does react work
            React goes through its virtual DOM ,creates a list of those changes that need to be made to the actual DOM and then does it all in one single process.
            </p>


            <br />
            <h1 className='text-2xl  font-bold'>(ii)What's the difference between state and props in React?</h1>

            <p className='my-3 text-xl m-3  w-10/12'>
            Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this. setState property is used to update the state values in the component.
            </p>

            <br />
            <h1 className='text-2xl font-bold'>(iii)What can do useEffect without data load?</h1>

            <p className='my-3 text-xl m-3   w-10/12'>
            The useEffect Hook allows you to perform side effects in your components
            useEffect() hook runs the side-effect after initial rendering, and on later renderings only if the name value changes.You can have multiple useEffects in your code and this is completely fine! As hooks docs say, you should separate concerns. Multiple hooks rule also applies to useState - you can have multiple useState in one component to separate different part of the state, you don't have to build one complicated state object
            </p>

          
        </div>
        </div>
    );
};

export default QuiestionAndAns;