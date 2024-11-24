import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";
import connectDB from "./config/connectDB.js";
import indexRouter from "./routes/route.js";
import session from "express-session";

dotenv.config();

const app = express();


app.use(cors({
    credentials: true,
    origin: process.env.FRONTEND_URL
}));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(session({
    secret: process.env.SESSION_SECRET || 'yourSecretKey',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: process.env.NODE_ENV === 'production',
        httpOnly: true,
        sameSite: 'strict',
        maxAge: 24 * 60 * 60 * 1000
    }
}));

app.use(cookieParser());
app.use(morgan('dev'));
app.use(helmet({
    crossOriginResourcePolicy: false
}));

app.use('/api', indexRouter);

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.json({
        message: "server is running"
    });
});


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        message: "Something went wrong!"
    });
});


connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("🚀Server listening on port🚀", PORT);
    });
}).catch(err => {
    console.error("Failed to connect to database:", err);
    process.exit(1);
});