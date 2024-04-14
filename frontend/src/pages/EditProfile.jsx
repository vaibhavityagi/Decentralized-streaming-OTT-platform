export default function EditProfile() {
  return (
    <div>
      <div className="bg-richblack-100 rounded-full border w-8 h-8">h</div>
      <form action="">
        <label htmlFor="email">Email</label>
        <br />
        <input type="text" name="email" id="email" />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input type="password" name="password" id="password" />
      </form>
    </div>
  );
}
