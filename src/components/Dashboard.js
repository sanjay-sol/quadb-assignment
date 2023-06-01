import { useState , useEffect } from 'react';
// import './App.css';
import "../App.css";
import axios from "axios";
import { Link } from 'react-router-dom';


const propTypes = {};

const defaultProps = {};


const Dashboard = () => {
    const [data1, setdata1] = useState([]);
    const [search, setSearch] = useState("");
    const [show, setshow] = useState(false);
    useEffect(() => {
    axios.get(`https://api.tvmaze.com/search/shows?q=all`)
    .then(res=> setdata1(res.data))
    }, [])
    return (
      <>
      <input
        type="text"
        value={search}
        placeholder="Search by Movie Name   "
        className="w-8/12 h-12 px-6 py-2 mt-4 ml-3 mr-2 bg-slate-200 text-lg   font-medium placeholder:text-slate-400 focus:outline-none tails-selected-element border-2 border-slate-500 rounded "
        data-primary="indigo-800"
        onChange={(e) => setSearch(e.target.value)}
        data-dashlane-rid="ecf7b122e81b2461"
        data-kwimpalastatus="alive"
        data-kwimpalaid="1678604518890-0"
        data-form-type="text"
      ></input>
      <span><button className="bg-green-400 m-3 p-3 text-xl font-extrabold rounded-xl" onClick={()=> {
          show ? setshow(false) : setshow(true)
        }} >My Tickets</button> </span>
        {show &&  <div className='bg-gray-200 text-lg font-bold rounded-lg m-4 p-2'>
          
          <h4> Movie :  {localStorage.getItem("name") ? localStorage.getItem("name") : "NA"}</h4>
          <h4> Time :  {localStorage.getItem("time") ? localStorage.getItem("time") : "NA"}</h4>
          <h4> Day :  {localStorage.getItem("day") ? localStorage.getItem("day") : "NA"}</h4>
          <h4> Person Booked :  {localStorage.getItem("user") ? localStorage.getItem("user") : "NA"}</h4>
          <h4> Email :  {localStorage.getItem("email") ? localStorage.getItem("email") : "NA"}</h4>
         
        </div> }
      <div className="mb-10">
        <div className="grid  gap-6 m-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* ////// */}
          {data1 && data1.filter((profile) =>
                profile.show.name.toLowerCase().includes(search.toLowerCase())
              ).map((profile, index) => (
                
                <div
                  key={index}
                  className="w-full border mt-5 bg-gray-100 rounded-lg shadow-black"
                >
                  <span className=' pl-2 text-sm text-start font-bold' > Genres : <span className='text-sm font-normal'  > {profile.show.genres[0]} {profile.show.genres[1]}   {profile.show.genres[2]}  </span></span>
                  <p className=' pl-2 text-sm font-bold' > language : <span className='text-sm font-normal' > {profile.show.language} </span></p>
                  <p className=' pl-2 text-sm font-bold' > Status : <span className='text-sm font-normal' > {profile.show.status === 'Ended' ? <span className='text-lg font-bold text-red-500'>{profile.show.status}</span> : <span className='text-lg font-bold text-green-600'>{profile.show.status}</span> } </span></p>
                  
                  <div className="flex flex-col items-center justify-center p-">
                  <span className='pb-2 font-extrabold'>Rating :{profile.show.rating.average ? <span className='font-extrabold text-2xl text-yellow-600 pl-2'>{profile.show.rating.average }</span> : <span  className='font-bold pl-2 text-xl text-red-500'>NA</span> }</span>
                    <Link
                        to={`/post/${profile.show.id}/${profile.show.name.substring(4).toLowerCase()}`}
  
                      className="block"
                    >
                      <img
                        className="w-max max-h-96 mb-6 rounded "
                        src={`${profile.show.image.medium}`}
                        alt="Profile"
                      />
                    </Link>
                    <span className='text-lg pb-2 font-extrabold underline' >Title :<span className='text-sm font-bold no-underline'>{profile.show.name}</span> </span>
                    <a
                      href={`https://www.tvmaze.com/shows/${profile.show.id}/all-${profile.show.name.substring(4).toLowerCase()}`}
                      target="_blank"
                      rel="noreferrer"
                      className="relative inline-block text-lg group"
                    >
                      <span className="relative z-10  block px-5 py-3 overflow-hidden ">
                       
                        <span className="relative bg-slate-400 p-5 rounded-lg font-bold ">
                          {" "}
                         
                          View on TVMaze{" "}
                        </span>
                      </span>
                     
                    </a>
                    <div className='p-2'>
                    <Link
                        to={`/post/${profile.show.id}/${profile.show.name.substring(4).toLowerCase()}`}
                      className="relative inline-block text-lg group"
                    >
                      <span className="relative z-10  block px-5 py-3 overflow-hidden ">
                       
                        <span className="relative bg-purple-300 p-5 rounded-lg font-bold ">
                          {" "}
                         
                          Book Tickets ⇱{" "}
                        </span>
                      </span>
                     
                    </Link>
                    </div>
                  </div>      
                </div>
              ))
         }
        </div>
      </div>
   
     
      


             
    
      </>
    );
  }


Dashboard.propTypes = propTypes;
Dashboard.defaultProps = defaultProps;
// #endregion

export default Dashboard;