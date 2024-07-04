import { Link } from "react-router-dom";

function Home() {
    return (
        <>
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src="src/assets/marissa-grootes-zv5QSKaP8G8-unsplash.jpg"
      className="max-w-sm rounded-lg shadow-2xl pl-2" />
    <div>
      <h1 className="text-5xl font-bold">Event Scheduler</h1>
      <p className="py-6">
      Stay effortlessly organized with our Event Scheduler app. Track meetings, social gatherings, and more with ease. Set reminders, manage attendees, and sync seamlessly across all your devices. Download now and simplify event planning today!
      </p>
     <Link to='/eventlist'>
     <button className="btn-lg btn btn-neutral">Events</button>
     </Link>
    </div>
  </div>
</div>
        </>
     );
}

export default Home;