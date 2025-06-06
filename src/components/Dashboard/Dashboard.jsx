const Dashboard = () => {
    return (
        <div className="min-h-screen bg-base-100 px-6 py-10">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-primary mb-4">📊 Dashboard</h2>
                <p className="text-lg text-gray-600 mb-8">
                    Welcome to your dashboard! Here you can manage your books, view reading stats, and personalize your experience.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 bg-base-200 rounded-xl shadow-md">
                        <h3 className="text-xl font-semibold mb-2">My Books</h3>
                        <p className="text-sm text-gray-500">View and manage your collection.</p>
                    </div>
                    <div className="p-6 bg-base-200 rounded-xl shadow-md">
                        <h3 className="text-xl font-semibold mb-2">Reading Stats</h3>
                        <p className="text-sm text-gray-500">Track your reading progress.</p>
                    </div>
                    <div className="p-6 bg-base-200 rounded-xl shadow-md">
                        <h3 className="text-xl font-semibold mb-2">Settings</h3>
                        <p className="text-sm text-gray-500">Customize your dashboard preferences.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
