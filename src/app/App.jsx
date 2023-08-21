import React from "react";
import { getItem } from "../core/services/storage/storage";
import Athetication from "./Athentication/Athentication";
import Unathentication from "./Unauthentication/Unauthentication";

function App() {
 const islog = getItem("token");
 return(
  !islog ? <Unathentication/> : <Athetication/> 
 );
}
export default App;
