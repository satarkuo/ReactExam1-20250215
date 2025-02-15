import { useEffect, useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [ userList, setUserList ] = useState([]);

  useEffect(() => {
    getUserList();
  }, [])

  const getUserList = async() => {
    try {
      const res = await axios.get('https://randomuser.me/api/?results=10');
      setUserList(res.data.results)
      
    } catch (error) {
      console.log(error)
    }
  }

//   - 使用 fetch 或 axios 串接 `https://randomuser.me/api/?results=10` API 並將結果渲染到畫面上。

// ## 參考文件
// - [fetch MDN 文件](https://developer.mozilla.org/zh-TW/docs/Web/API/Fetch_API/Using_Fetch)
// - [axios 文件](https://axios-http.com/docs/api_intro)
// - [React 官方文件](https://react.dev/learn)、[React Hooks](https://react.dev/reference/react/useState)

  return (
    <>
      <div className="container mx-auto p-4">
        <div className="row">
          {userList.map(person => {
            return (<div className="col-md-4" key={person.registered.date}>
              <div className="bg-light p-3">
                <img
                  src={person.picture.large}
                  alt="頭像"
                  className="img-fluid rounded-circle"
                />
                <h2 className="mb-0">`${person.name.first} ${person.name.last}`</h2>
                <p className="mb-0">{person.email}</p>
              </div>
            </div>)
          })}
            
        </div>
      </div>
    </>
  )
}

export default App
