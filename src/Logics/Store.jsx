import { createStore } from "redux";
import { combine } from "./Cartreducer";

const store=createStore(combine)
export default  store;