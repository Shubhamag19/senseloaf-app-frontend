import { useEffect, useState, useRef } from "react";

function useWebSocket(onDataReceived) {
  const [sendOption, setSendOption] = useState(null);
  const socketRef = useRef(null);

  useEffect(() => {
    const ws = new WebSocket(`wss://${process.env.NEXT_PUBLIC_URL}`);
    socketRef.current = ws;

    ws.onopen = () => console.log("websocket connected");

    ws.onmessage = (event) => {
      try {
        const response = JSON.parse(event.data);
        onDataReceived(response);
      } catch (error) {
        console.error("error:", error);
      }
    };

    const send = (option) => {
      if (ws.readyState === WebSocket.OPEN) {
        ws.send(JSON.stringify({ selectedOption: option }));
      }
    };
    setSendOption(() => send);

    return () => ws.close();
  }, [onDataReceived]);

  return sendOption;
}

export default useWebSocket;
