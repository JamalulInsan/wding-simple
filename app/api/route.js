import fs from 'fs';
import path from 'path';

export function GET() {
  try {
    const messagesFilePath = path.join(process.cwd(), 'data', 'messages.json');
    const data = JSON.parse(fs.readFileSync(messagesFilePath, 'utf8'));

    return Response.json({ data });
  } catch (error) {
    return Response.json({ message: 'Internal Server Error' + error });
  }
}

export async function POST(req) {
  try {
    const { name, message } = await req.json();

    if (!name || !message) {
      return Response.json({
        error: 'Incomplete data. Please provide name and message fields.',
      });
    }

    const messagesFilePath = path.join(process.cwd(), 'data', 'messages.json');
    const messages = JSON.parse(fs.readFileSync(messagesFilePath, 'utf8'));

    const newMessage = { name, message };
    messages.push(newMessage);

    fs.writeFileSync(messagesFilePath, JSON.stringify(messages, null, 2));
    return Response.json({
      message: 'Message added successfully',
      data: newMessage,
    });
  } catch (error) {
    return Response.json({ error: 'Internal Server Error' });
  }
}
