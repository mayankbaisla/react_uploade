import React from 'react';

const Heading = (props) => {
    return (
        <>

            
        
	
            <div className='Head'>
                <h1>{props.heading}</h1>

            </div>
	
	<ul className="links">
		<li><a href="#home">Home</a></li>
		<li><a href="#about">About</a></li>
		<li><a href="#work">Work</a></li>
		<li><a href="#projects">Projects</a></li>
		<li><a href="#contact">Contact</a></li>
	</ul>






        
        </>
    );
};


export default Heading;