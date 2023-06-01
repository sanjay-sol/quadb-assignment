import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams  } from "react-router";
import { Link } from 'react-router-dom';
import {  Navigate } from "react-router-dom";

const propTypes = {};

const defaultProps = {};

const Post = () => {
  
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [loading , setloading] = useState(false);
  const [data, setdata] = useState("");
  const [show, setshow] = useState(false);
  const [auth, setauth] = useState(false);
  const params = useParams();

  useEffect(() => {
    axios
      .get(`https://api.tvmaze.com/shows/${params.id}`)
      .then((res) => setdata(res.data));
  }, [params.id]);
 const handleSubmit = ()=>{
   localStorage.setItem("name", data.name);
  localStorage.setItem("time", data.schedule.time);
  localStorage.setItem("day", data.schedule.days);
  localStorage.setItem("user", name);
  localStorage.setItem("email", email);
  setloading(false)
  alert("Tickets Booked Sucessfully...")
setauth(true)
  

 }
 if (auth) {
  return <Navigate to="/" />;
}
  return (
    <>
        <Link
        to="/"
        className="bg-red-400 m-3 p-3 text-xl font-extrabold rounded-xl"
      >
       
          ⬅ Back to Dashboard
      
      </Link>
      {data && 
      <>

        <div className="flex flex-col mt-5  items-center justify-center sm:px-5 md:flex-row border-4 tails-selected-element ">

        <div className="w-full md:w-1/2  m-3">
        <a
                       href={`https://www.tvmaze.com/shows/${params.id}/all-${params.name.substring(4).toLowerCase()}`}

          target="_blank"
          rel="noreferrer"
          className="block"
        >
          <img
            className=" w-full h-full rounded-lg max-h-64 sm:max-h-96"
            src={`${data.image.medium}`}

            alt="profile"
          />
        </a>
      </div>
      <div className="flex flex-col items-start justify-center w-full h-full py-6 mb-6 md:mb-0 md:w-1/2">
      <div className="flex flex-col items-start justify-center h-full space-y-3 transform md:pl-10 lg:pl-16 md:space-y-5">
        <div className="bg-orange-500  items-center pl-2 pr-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block">
          <span>⌘ Book Tickets</span>
        </div>
      
        <p className="pt-2 text-sm font-bold">
          {" "}
          Movie Name : {data.name}{" "}
        </p>
        <p className=" text-sm font-medium">
          {" "}
          runtime : {data.runtime}{" "}
        </p>
        {data.ended === null ? <p className=" text-sm font-medium">
          {" "}
          Ended : NA{" "}
        </p> : <p className=" text-sm font-medium">
          {" "}
          Ended : {data.ended }{" "}
        </p>  }
        
        <p className=" text-sm font-medium"> Type : {data.type} </p>
        <p className=" text-sm font-medium"> Premiered On : {data.premiered} </p>
        <p className=" text-sm font-bold">Genres: {data.genres[0]}  {data.genres[1]} {data.genres[2]} </p>
        <p className=" text-sm font-medium">
          {" "}
          Movie Status :{" "}
          <span className="font-semibold text-lg text-orange-600">
            {data.status }
          </span>
        </p>
        {data.rating.average ? (
          <p className=" text-sm font-medium">
            {" "}
            Average Rating :{" "}
            <span className="font-semibold text-lg text-orange-600">
              {data.rating.average}
            </span>{" "}
            /10
          </p>
        ) : (
          <p className=" text-sm font-medium">
            {" "}
            Average Rating :{" "}
            <span className="font-semibold text-lg text-orange-600">
              NA
            </span>{" "}
            /10
          </p>
        )}
        <button className="bg-red-400 m-3 p-3 text-xl font-extrabold rounded-xl" onClick={()=> {
          show ? setshow(false) : setshow(true)
        }} >Book Tickets ➢</button>
      </div>
      
    </div>
    
    </div>
    
    {show && 
    <section className="w-full px-8 py-16 bg-gray-200 xl:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center md:flex-row">
            <div className="w-full space-y-5 md:w-3/5 md:pr-16">
              {/* <p
                className="font-medium text-blue-500 uppercase"
                data-primary="blue-500"
              >
                Building Businesses
              </p> */}
              <h2 className="text-2xl font-extrabold leading-none text-yellow-600 hover:text-yellow-500 sm:text-3xl md:text-5xl">
             {data.name}
              </h2>
              <h2 className="text-lg font-bold leading-none text-gray-600  sm:text-xl md:text-2xl">
            Time : {data.schedule.time}
              </h2>
              <h2 className="text-lg font-bold leading-none text-gray-600 sm:text-xl md:text-2xl">
            Days : {data.schedule.days}
              </h2>
              <p className="text-xl text-gray-500 md:pr-16">
             Runtime : {data.runtime} min
              
              </p>
              <p className="text-xl text-gray-500 md:pr-16">
            <span className="text-base font-bold text-black">Summary :</span>   {data.summary.replace(/<[^>]+>/g, '')} min
              
              </p>
            </div>

            <div className="w-full mt-16 md:mt-0 md:w-2/5">
              <div
                className="relative z-10 h-auto p-8 py-10 overflow-hidden bg-gray-800 border-b-2 border-gray-800 rounded-lg shadow-2xl px-7"
                data-rounded="rounded-lg"
                data-rounded-max="rounded-full"
              >
           

                <h3 className="mb-6  text-2xl font-bold text-gray-300 text-center">
                  Book Now..!!
                </h3>
                {/* <span className="text-white w-6 h-6" style={{display: state ? 'block' : 'none' }}>Invalid Email...</span> */}
                <label className="text-white text-base font-bold">Movie</label>
                <p
                  
                  // onChange={(e)=> setname(e.target.value)}
                  className="block w-full px-4 py-3 mb-4  border-2 border-transparent bg-gray-500 border-slate-400 rounded-lg focus:ring text-white font-extrabold placeholder:text-gray-300 focus:ring-gray-500 focus:outline-none"
                  
               
                >{data.name}</p>
                <label className="text-white text-base font-bold">Day</label>
                <p
                  
                  // onChange={(e)=> setname(e.target.value)}
                  className="block w-full px-4 py-3 mb-4  border-2 border-transparent bg-gray-500 border-slate-400 rounded-lg focus:ring text-white font-extrabold placeholder:text-gray-300 focus:ring-gray-500 focus:outline-none"
                  
               
                >{data.schedule.days}</p>
                <label className="text-white text-base font-bold">Time</label>
                <p
                  
                  // onChange={(e)=> setname(e.target.value)}
                  className="block w-full px-4 py-3 mb-4  border-2 border-transparent bg-gray-500 border-slate-400 rounded-lg focus:ring text-white font-extrabold placeholder:text-gray-300 focus:ring-gray-500 focus:outline-none"
                  
               
                >{data.schedule.time}</p>

                <input
                  type="text"
                  value={name}
                  onChange={(e)=> setname(e.target.value)}
                  className="block w-full px-4 py-3 mb-4  border-2 border-transparent bg-gray-500 border-slate-400  rounded-lg text-white placeholder:text-gray-300 focus:ring-gray-500 focus:outline-none"
                  data-rounded="rounded-lg"
                  data-primary="blue-500"
                  placeholder="Enter your name"
                />
                <input
                  type="Email"
                  value={email}
                  onChange={(e)=> setemail(e.target.value)}
                  className="block w-full px-4 py-3 mb-4  border-2 border-transparent bg-gray-500 border-slate-400  rounded-lg text-white placeholder:text-gray-300 focus:ring-yellow-500 focus:outline-none"
                  data-rounded="rounded-lg"
                  data-primary="blue-500"
                  placeholder="Email"
                />
                <div className="block">
                  {loading ? (
                    <button disabled type="button" className=" text-black bg-yellow-600 hover:bg-yellow-800 focus:ring-4 focus:ring-black font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-6 w-40 inline-flex items-center">
                    <svg aria-hidden="true" role="status" className="inline w-8 h-9 mr-3 text-black animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                    </svg>
                    Loading...
                    </button>
                  ) :
                  <button
                  className="w-full px-3 py-4  text-black font-bold bg-yellow-600 hover:bg-yellow-700 rounded-lg"
                  data-primary="blue-600"
                  data-rounded="rounded-lg"
                  onClick={handleSubmit}
                >
                  Book Now
                </button>
                }
                  
                </div>
                <p className="w-full mt-4 text-sm text-center text-gray-500">
                  Go to Dashboard..!!{" "}
                  <Link to="/" className="text-yellow-500 underline">
                    Dashboard
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
  
      </section>
}

    </>
      }
    </>
  );
};

Post.propTypes = propTypes;
Post.defaultProps = defaultProps;
// #endregion

export default Post;
