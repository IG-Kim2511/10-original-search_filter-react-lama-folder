import { useEffect, useState } from "react";
import { Users } from "./users";
import "./app.css";
import Table from "./Table";
import axios from "axios";


/* 🍀version 1. BASIC SEARCH
.filter
*/

/* 🦄🍄
1. input, setQuery

2. query

3. data_Users.filter

4. if...data_Users.filter = query... map loop안에 데이터바인딩 ㄱㄱ
*/


// function App() {
//   const [query, setQuery] = useState("");
//   return (
//     <div className="app">
//       <input
//         className="search"
//         placeholder="Search..."
//         onChange={(e) => setQuery(e.target.value.toLowerCase())}
//       />
//       <ul className="list">
//         {Users.filter((asd) =>
//           asd.first_name.toLowerCase().includes(query)
//         ).map((user) => (
//           <li className="listItem" key={user.id}>
//             {user.first_name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }



/* 🍀version 2.SEARCH ON A DATATABLE
function밖으로 뺌

filter, some, const keys

*/
/* 🦄🍄
1.data.filter

2. keys.some

3. data.filter한 것+ keys.some한 것 둘다 있으면, 

includes(~) 실행
*/

function App() {

  const [query, setQuery] = useState("");

  const keys = ["first_name", "last_name", "email"];

  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };

return (
  <div className="app">
      <input
        className="search"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
    {<Table data={search(Users)} />}
  </div>
);
}



/* 🍀version 3. API SEARCH
*/

// function App() {
//   const [query, setQuery] = useState("");
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const res = await axios.get(`http://localhost:5000?q=${query}`);
//       setData(res.data);
//     };
//     if (query.length === 0 || query.length > 2) fetchData();
//   }, [query]);

//   return (
//     <div className="app">
//         <input
//           className="search"
//           placeholder="Search..."
//           onChange={(e) => setQuery(e.target.value.toLowerCase())}
//         />
//       {<Table data={data} />}
//     </div>
//   );
// }

export default App;
