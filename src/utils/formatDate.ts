import { format } from "date-fns";

const formatDate = (timestamp: number) => {
  const date = new Date(timestamp);

  return format(date, "dd/MM/yyyy HH:mm");
};

export default formatDate;
