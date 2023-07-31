import { useContext } from "react"
import { PostsContext } from "./PostsContext"

function Posts () {

    const {uglyThings, deleteData, putData, editThing} = useContext(PostsContext)

    const uglyElements = uglyThings.map(obj =>{
     return(   
        <div
        className="post" 
        key={obj._id}
        >
            <h3>{obj.title}</h3>
            <img 
            width="200px" 
            src={obj.imgUrl}
            />
            
            <p>{obj.description}</p>
            <button 
            onClick={deleteData} 
            id={obj._id}
            >Delete
            </button>

            <button
            onClick={putData}
            id={obj._id}
            >Edit
            </button>
            <input 
            onChange={editThing} 
            placeholder="Edit Title" 
            name="title"
            value={editThing.title}
            />
            
            <input 
            onChange={editThing} 
            placeholder="Edit Description" 
            name="description"
            value={editThing.description}
            />
        </div>
        )})
       
    return(
        <div className="posts-container">
            {uglyElements}
        </div>
    )
}

export default Posts