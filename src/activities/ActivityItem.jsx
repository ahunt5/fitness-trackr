import { useAuth } from "../auth/AuthContext";
import { useState } from "react";
export default function ActivityItem({ activity, syncActivities }) {
  const { token } = useAuth();
  const { deleteActivity } = useAuth();
  const [error, setError] = useState();

  const tryDeleteActivity = async () => {
    setError(null);
    try {
      await deleteActivity(activity.id);
      syncActivities();
    } catch (e) {
      setError(e.message);
    }
  };
  return (
    <>
      <li>{activity.name}</li>
      {token && (
        <button
          onClick={() => {
            tryDeleteActivity(activity.id);
          }}
        >
          Delete
        </button>
      )}
    </>
  );
}
