
const Greetings = () => {
  return (
    <div>
      <div className="rounded bg-gradient-to-r from-hot-pink to-orange-peach">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center items-start p-6">
          <img src="./images/welcome.png" alt="" />
          <div className="text-white space-y-3">
            <h1 className="font-semibold text-2xl">Hello, Mary Jane!</h1>
            <p>Stay Up-to-Date with your appointments.</p>
            <p>You Have No pending Reports</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Greetings;
