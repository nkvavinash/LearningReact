import { Children, createContext, useReducer } from "react";



const PostList = createContext({
postlist: [],
addPost: () => [],
deletePOst: () => {},

});

function postListReducer(currPostList, action) {
  return currPostList;
}

const PostListProvider = ({childres})=>{
const [postlist,dispatchPostlist] = useReducer(postListReducer,[]);
  const addpost = () =>{};
  const deletepost =()=> {};


  return <PostList.Provider values ={
    {PostList, addpost,deletepost}}>
      {Children}
    
    </PostList.Provider>

};


const DEFAULT_POST_LIST =[
  {
  id: '1',
  title: 'Going to Mumbai',
  body: 'HI Friends i am going to mubai for vacation',
  reactions: 2,
  userId: "user-9",
  tags: ["vaction","Mumbai","Enjoying"],


},
{
  id: '2',
  title: 'Going to Pune',
  body: 'HI Friends i am going to Pune for vacation',
  reactions: 2,
  userId: "user-3",
  tags: ["vaction","Mumbai","Enjoying"],

}
]

export default PostListProvider;