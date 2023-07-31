import Form from "./Form"
import Posts from "./Posts"
import { PostsContextProvider } from "./PostsContext"
import "./style.css"


function App() {


  return (
    <PostsContextProvider>
      <Form />
      <Posts />
    </PostsContextProvider>
    
  )
}

export default App
