import { useEffect, useState } from "react";
import "./Messages.css";

interface Message {
  id: number;
  full_name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  created_at: string;
}

function Messages() {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/messages")
      .then((response) => response.json())
      .then((data) => setMessages(data))
      .catch((error) => console.error(error));
  }, []);

  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);

  return (
    <div className="messages-page">
      <h1>Contact Messages</h1>

      <table className="messages-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Subject</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {messages.map((message) => (
            <tr key={message.id}>
              <td>{message.full_name}</td>
              <td>{message.email}</td>
              <td>{message.phone}</td>
              <td>{message.subject}</td>
              <td>
                {new Date(message.created_at).toLocaleDateString()}
              </td>
              <td>
                <button
                  className="view-btn"
                  onClick={() => setSelectedMessage(message)}
                >
                  👁 View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedMessage && (
  <div
    className="modal-overlay"
    onClick={() => setSelectedMessage(null)}
  >
    <div
      className="modal"
      onClick={(e) => e.stopPropagation()}
    >
      <h2>{selectedMessage.full_name}</h2>

      <p>
        <strong>Email:</strong> {selectedMessage.email}
      </p>

      <p>
        <strong>Phone:</strong> {selectedMessage.phone}
      </p>

      <p>
        <strong>Subject:</strong> {selectedMessage.subject}
      </p>

      <hr />

      <p>{selectedMessage.message}</p>

      <button
        className="close-btn"
        onClick={() => setSelectedMessage(null)}
      >
        Close
      </button>
    </div>
  </div>
)}
    </div>
  );
}

export default Messages;