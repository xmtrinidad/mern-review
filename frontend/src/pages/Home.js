import { useEffect, useState } from "react";
import WorkoutDetails from '../components/WorkoutDetails'
import WorkForm from "../components/WorkoutForm";

const Home = () => {
  const [workouts, setWorkouts] = useState(null);
  
  // Empty array makes this fire once
  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('/api/workouts');
      const json = await response.json();

      if (response.ok) {
        setWorkouts(json)
      }
    }

    fetchWorkouts();
  }, []);

  return (
    <div className="home">
      <div className="workouts">
        {workouts && workouts.map((workout) => (
          <WorkoutDetails key={workout._id} workout={workout} />
        ))}
      </div>
      <WorkForm />
    </div>
  )
};

export default Home;