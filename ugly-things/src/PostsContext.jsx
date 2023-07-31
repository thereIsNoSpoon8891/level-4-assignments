import { useState, useEffect, createContext } from "react";
import axios from "axios"

const PostsContext = createContext()// create context


function PostsContextProvider (props) {

const [uglyThings, setUglyThings] = useState([])// holds all data

const [newUglyThing, setNewUglyThing] = useState({// creates post data
    title: "",
    imgUrl: "",
    description: ""
})

const [editUglyThing, setEditUglyThing] = useState({
    title: "",
    description: ""
})


useEffect( () => {// set data on page load
    
    getAllData();
    
}, [])

function getAllData (){// helper function to use after every change in data
    axios.get("https://api.vschool.io/shane88/thing")
        .then(data => setUglyThings(data.data))
        .catch(error => console.log(error))
}

function postData (e){// posts data from newUglything
    e.preventDefault()
            axios.post("https://api.vschool.io/shane88/thing", newUglyThing)
                .then(() => getAllData())
                .catch(error => console.log(error))
}

function makeUglyThing (e){// builds oject to be posted
    const {name, value} = e.target;
    setNewUglyThing(prevThing => ({
        ...prevThing,
        [name]: value
    }))
}


console.log(editUglyThing)

function deleteData (e) {// deletes item from the database
    e.preventDefault();
    axios.delete(`https://api.vschool.io/shane88/thing/${e.target.id}`)
    .then(() => getAllData())
    .catch(error => console.log(error))
}

function editThing (e) {
    e.preventDefault();
    // to make a PUT request I need 2 things, ID, and the minimum data(title, imgUrl, description)
    // creating a new state does not work, because I have no access to the imgURL...
    // How can I edit one specific object in my existing state, and submit THAT object in the put request?
    const {name, value} = e.target;
    setEditUglyThing(
        prevThing => ({
            ...prevThing,
        [name]: value
        })
    )
}
console.log(uglyThings)
function putData(e){//capture inputs, submit put request
    e.preventDefault();
        const {id} = e.target;
            axios.put(`https://api.vschool.io/shane88/thing/${id}`, editUglyThing)//
                .then(() => getAllData()) 
                .catch(error => console.log(error))

}
//         const editedMemes = savedMemes.map(meme => meme.id === id ? {...meme, [name]: value} : meme)
// setSavedMemes(editedMemes)

    return(
        <PostsContext.Provider 
        value={{uglyThings, newUglyThing, postData, makeUglyThing, putData, deleteData, editThing}}
        >
            {props.children}
            
        </PostsContext.Provider>
    )
}

export {PostsContext, PostsContextProvider}