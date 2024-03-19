/* eslint-disable react-refresh/only-export-components */
// Import-Anweisungen beibehalten
import { createContext, useState, useEffect, useContext } from "react";
import { useAuthContext } from "./authContext";
import io from "socket.io-client";

const SocketContext = createContext();

export const useSocketContext = () => {
	return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
	const [socket, setSocket] = useState(null);
	const [onlineUsers, setOnlineUsers] = useState([]);
	const { authUser } = useAuthContext();

	useEffect(() => {
		let cleanup = () => {};
		
		if (authUser && authUser._id) {
			// Verwenden der Umgebungsvariable für die URL
			// eslint-disable-next-line no-undef
			const newSocket = io(process.env.API_URL || "http://localhost:5000", {
				query: {
					userId: authUser._id,
				},
			});

			setSocket(newSocket);

			newSocket.on("getOnlineUsers", (users) => {
				setOnlineUsers(users);
			});

			cleanup = () => newSocket.close();
		}

		return cleanup;
	}, [authUser]);

	return (
		<SocketContext.Provider value={{ socket, onlineUsers }}>
			{children}
		</SocketContext.Provider>
	);
};



