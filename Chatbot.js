import { useState } from "react";

function Chatbot() {
    const [message, setMessage] = useState("");
    const [response, setResponse] = useState("");

    const sendMessage = async () => {
        const res = await fetch("http://localhost:5000/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message })
        });
        const data = await res.json();
        setResponse(data.reply);
    };

    return (
        <div className="dark:bg-darkBg dark:text-darkText p-4">
            <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
            <button onClick={sendMessage}>Send</button>
            <p>{response}</p>
        </div>
    );
}

export default Chatbot;