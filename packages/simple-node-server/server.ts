import express, { application } from "express";
import cors from 'cors';

const app = express();

export interface QueryPayload {
    foo: string;
}

app.use(cors());
app.get("/data",(req,res) => {
    //This is another way to prevent de CORS error.
    res.setHeader('Access-Control-Allow-Origin','*');
    const data: QueryPayload = {foo: "bar"}
    res.json(data);
});
const port = 3001;


app.listen(port, () => {
    console.log("example app listening at port "+ port)
})