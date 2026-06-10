import { useEffect } from "react";
import { getNotifications } from "../api/notificationApi";

function Notifications() {
  useEffect(() => {
    getNotifications().then((data) => {
      console.log(data);
    });
  }, []);

  return <h1>All Notifications</h1>;
}

export default Notifications;