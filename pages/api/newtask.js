import { connectDB } from "../../utils/features";
import { Task } from "../../models/task";
const handler = async (req, res) => {
  await connectDB();
  await Task.create({
    title: "sample",
    description: "sample description",
    user: "asdfg",
  });

  res.json({
    success: true,
  });
};

export default handler;
