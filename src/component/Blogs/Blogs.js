import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blogs'>
            <div>
            <h1 className='blogs-tag'>1. What is context api</h1>
            <h4>The new React Context API, introduced with React v.16.3, allows us to pass data through our component trees.It's aimed at solving the problem of prop drilling.With the new Context API, several new functions have been added to the mix creating giving us a rich tool to work with.There are sure to be more improvements and new features from the framework and its development community. In the meantime, enjoy what wonderful features it has like the Context API.</h4>
            </div>
            <div>
                <h1 className='blogs-tag'>2. What is semantic tag</h1>
                <h4>semantic tags gives you many more hooks for styling your content, too. You can do all of these things easily by using semantic markup and smartly applied CSS.Semantic HTML5 addresses this shortcoming by defining specific tags to indicate clearly what role is played by the content those tags contain.Although semantic tags existed in earlier HTML versions.The HTML5 specifications added several new semantic elements to the syntax—both on the block and inline levels.
                    </h4>
            </div>
        </div>
    );
};

export default Blogs;