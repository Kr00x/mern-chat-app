import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import http from 'http';
import { Server } from 'socket.io';

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000"], // Fügen Sie zusätzliche erlaubte Ursprünge hier hinzu
    methods: ["GET", "POST"],
    credentials: true
  }
});

app.use(express.json());
app.use(cors({ origin: ["http://localhost:3000"], credentials: true })); // Fügen Sie zusätzliche erlaubte Ursprünge hier hinzu
app.use(cookieParser());

const port = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    server.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });

// Optional: Socket.io Konfiguration
io.on('connection', (socket) => {
  console.log('A user connected', socket.id);
  // Weitere Socket.io-Events...
});
