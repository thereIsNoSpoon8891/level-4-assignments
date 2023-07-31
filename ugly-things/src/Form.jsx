import { useContext } from "react"
import { PostsContext } from "./PostsContext"


function Form () {



const  {postData, makeUglyThing} = useContext(PostsContext)


  
    return(
        <div className="input-container">
            <form onSubmit={postData}>
                <input 
                type="text"
                name="title" 
                placeholder="Title"
                className="post-inputs"
                onChange={makeUglyThing}
                />

                <input 
                type="text"
                name="description" 
                placeholder="Description"
                className="post-inputs"
                onChange={makeUglyThing}
                />

                <input 
                type="text"
                name="imgUrl" 
                placeholder="Image URL"
                className="post-inputs"
                onChange={makeUglyThing}
                />

                <button>
                    Post it!
                </button>
            </form>
        </div>
    )
}

export default Form