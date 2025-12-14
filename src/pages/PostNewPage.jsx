import {useNavigate} from 'react'

const PostNewPage = () => {
    const navigate = useNavigate();

    function handleSubmit(event) {
       event.preventDefault();
       
       
       const formData = new FormData(event.target);
       const newPost = {
       title: formData.get("title"),
       body: FormData.get("body"),
       userId: formData.get("userId"),
       };
       console.log("Submitting new post:", newPost);
       const response = fetch("https://jsonplaceholder.typicode.com/posts", {
       method: "POST",
       headers: {
       "Content-Type": "application/json",
       },
       body: JSON.stringify(newPost),
       });
       response.then((res) => {
       if (res.ok) {
       alert("Post created successfully!");
       navigate("/posts");
       }
    });
}
    
  return (
    <div>
        <h1>ສ້າງໂພສໃຫມ່</h1>

        <form 
        onSubmit= {handleSubmit}
        style={{
           display: "flex",
           flexDirection: "column",
           gap: 10,
           width: 300,
           margin: "8 auto",
        }}>
          <input name="title" type="text" placeholder="Enter Title..." required />
          <input name="body" type="text" placeholder="Enter body" required />
          <input name="userId" type="text" placeholder="Enter User ID" required />
        <div>
            style:{{
               display: "flex",
               gop: 10,
               }}
            <button onClick ={() => {
            navigate(-1);
            }}
            type="button">
            ຍົກເລີກ
            </button>
            <button type="submit">Submit</button>
        </div>
        </form>
    </div>
  )
}

export default PostNewPage