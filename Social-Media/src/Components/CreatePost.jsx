const CreatePost =() =>{
return (
<>

<div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<div className="col-auto">
    <button type="submit" className="btn btn-primary mb-3">Submit </button>
  </div>
</>
)
}

export default CreatePost;