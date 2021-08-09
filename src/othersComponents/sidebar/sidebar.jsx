// import pakages
import React from 'react';

// import components
import './sidebarStyle.css'

const Sidebar = () => {

    // this is the sidebar animation handler part
    let list = document.querySelectorAll('.list');
    for(let i=0; i<list.length; i++){
        list[i].onclick = function(){
            let j = 0;
            while(j< list.length){
                list[j++].className='list';
            }
            list[i].className = 'list active'
        }
    }
    const handleToggle = () =>{
        let menuToggle = document.querySelector('.toggle');
        let navi = document.querySelector('.navigation');
        menuToggle.classList.toggle('active')
        navi.classList.toggle('active')
    }

    return ( 
        <div>
            {/* sidebar part  */}
            <nav className="navigation">
                <ul>
                    <li className="list active">
                        <b></b>
                        <b></b>
                        <a href="#">
                            <span><i className="fas fa-house-damage"></i></span>
                            <span className="btn-title">Home</span>
                        </a>
                    </li>
                    <li className="list ">
                        <b></b>
                        <b></b>
                        <a href="#">
                            <span><i className="fas fa-plus-square"></i></span>
                            <span className="btn-title">Create Quiz</span>
                        </a>
                    </li>
                    <li className="list ">
                        <b></b>
                        <b></b>
                        <a href="#">
                            <span><i className="fas fa-concierge-bell"></i></span>
                            <span className="btn-title">Attend Quiz</span>
                        </a>
                    </li>
                    <li className="list ">
                        <b></b>
                        <b></b>
                        <a href="#">
                            <span><i className="fas fa-poll-h"></i></span>
                            <span className="btn-title">Result</span>
                        </a>
                    </li>
                    <li className="list ">
                        <b></b>
                        <b></b>
                        <a href="#">
                            <span><i className="fas fa-cog"></i></span>
                            <span className="btn-title">Settings</span>
                        </a>
                    </li>
                    <li className="list ">
                        <b></b>
                        <b></b>
                        <a href="#">
                            <span><i className="fas fa-bullhorn"></i></span>
                            <span className="btn-title">Help</span>
                        </a>
                    </li>
                </ul>
            </nav>

            {/* navigation open and close btn  */}

            <div className="toggle" onClick={handleToggle}>
                <i className="fas fa-align-center open"></i>
                <i className="fas fa-times close"></i>
            </div>
        </div>
     );
}
 
export default Sidebar;
