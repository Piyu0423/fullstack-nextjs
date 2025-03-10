import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const POST = async (req) => {
  const { prompt, tag, userId } = await req.json();

  try {
    await connectToDB();
    const newPrompt = new Prompt({
      tag,
      creator: userId,
      prompt,
    });
    await newPrompt.save();
    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (error) {
    console.log("Failed to create a new prompt", error);
    return new Response("Failed to create a new prompt", { status: 500 });
  }
};
