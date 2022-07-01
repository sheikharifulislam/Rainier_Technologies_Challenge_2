const Greetings = () => {
    return (
        <div>
            <div className="rounded bg-gradient-to-r from-hot-pink to-orange-peach">
                <div className="flex flex-col items-start justify-between p-6 sm:flex-row sm:items-center">
                    <img src="./images/welcome.png" alt="" />
                    <div className="space-y-3 text-white">
                        <h1 className="text-2xl font-semibold">
                            Hello, Mary Jane!
                        </h1>
                        <p>Stay Up-to-Date with your appointments.</p>
                        <p>You Have No pending Reports</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Greetings;
