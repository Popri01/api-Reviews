import express from "express";



import ProductRouts from "./routes/Productos.routes.js";
import ReviewsRouts from "./routes/Reviews.routes.js";
import ReviewUsers from "./routes/Users.routes.js";

const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "https://review-app-teal.vercel.app/"); 
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
  });


app.use(express.json());

app.use("/api", ProductRouts);
app.use("/api", ReviewsRouts);
app.use("/api", ReviewUsers);

app.listen(3001);
