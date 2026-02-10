import { useAuth } from "../auth/AuthContext";
export default function ActivityItem({ activity }) {
  const { token } = useAuth();
  const { deleteActivity } = useAuth();
  return (
    <>
      <li>{activity.name}</li>
      {!token ? null : (
        <button onClick={() => deleteActivity(activity.id)}>Delete</button>
      )}
    </>
  );
}
