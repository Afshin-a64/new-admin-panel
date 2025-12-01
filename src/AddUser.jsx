

const AddUser = () => {
  return (
    <div className="w-fit h-fit my-2">
      <h2>افزودن کاربر</h2>
      <form>
        <label>نام</label>
        <input type="text" placeholder="نام"/>
        <label>نام کاربری</label>
        <input type="text" placeholder="نام کاربری"/>
        <label>ایمیل</label>
        <input type="email" placeholder="ایمیل"/>
        <button type="submit">افزودن کاربر</button>
      </form>
    </div>
  );
};

export default AddUser;
