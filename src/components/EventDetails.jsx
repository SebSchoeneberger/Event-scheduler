import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { Link } from "react-router-dom";

function EventDetails() {
    const [eventDetails, setEventDetails] = useState([]);
    const {id: initialId} = useParams();
    const [id, setId] =useState(parseInt(initialId, 10));

    useEffect (() => {

        axios.get(`http://localhost:3001/api/events/${id}`)
        .then((res) => setEventDetails(res.data))
        .catch((err) => console.log(err));
    }, [id]);
    
if (!eventDetails) return ( 
    <div className="flex flex-col gap-6 justify-center items-center">
        <span className="loading loading-dots loading-lg"></span>
        <Link to='/eventlist'>
            <button className="btn btn-neutral">Back</button>
         </Link>
    </div>
);

    return ( 
        <>
        <div className="card card-side bg-base-100 shadow-xl">
            <figure>
                <img
                src="https://images.unsplash.com/photo-1529651737248-dad5e287768e?q=80&w=3330&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Movie"
                className="h-96" />
            </figure>
            <div className="card-body flex flex-col">
                <h2 className="card-title font-bold text-4xl pb-2 justify-center">{eventDetails.title}</h2>
                <p>{eventDetails.description}</p>
                <p><strong>Date: </strong>{eventDetails.date ? eventDetails.date.slice(0,10) : null}</p>
                <p><strong>Location: </strong>{eventDetails.location}</p>
                <div className="card-actions justify-end">
                <Link to='/eventlist'>
                <button className="btn btn-neutral">Back</button>
                </Link>
                </div>
            </div>
        </div>

        <div className="join grid grid-cols-2 pt-6">
            <Link to= {`/eventdetails/${id - 1}`}><button className="join-item btn btn-outline"onClick={() => setId(id - 1)} disabled={id <= 1}>Previous Event</button></Link>
            <Link to= {`/eventdetails/${id + 1}`}><button className="join-item btn btn-outline" onClick={() => setId(id + 1)}>Next Event</button></Link>
        </div>
        </>
     );
}

export default EventDetails;