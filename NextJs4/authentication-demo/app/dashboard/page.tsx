import { auth, currentUser } from "@clerk/nextjs/server" 

// export default async function DashboardPage() {
//     const authObj=await auth()
//     const userObj=await currentUser()

//     console.log({authObj,userObj})
//     return <h1>Data about DashboardPage</h1>
// }

const stats = [
  { title: "Total Users", value: "1,250", change: "+12%" },
  { title: "Total Revenue", value: "₹45,000", change: "+8%" },
  { title: "Total Orders", value: "320", change: "+15%" },
  { title: "Pending Orders", value: "25", change: "-3%" },
];

const activities = [
  { user: "Rahul Sharma", action: "Placed a new order", time: "10 minutes ago" },
  { user: "Priya Patel", action: "Created an account", time: "30 minutes ago" },
  { user: "Amit Verma", action: "Completed payment", time: "1 hour ago" },
  { user: "Sneha Joshi", action: "Updated profile", time: "2 hours ago" },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-6">
        <h1 className="text-2xl font-bold mb-10">MyDashboard</h1>

        <nav className="space-y-4">
          <a href="#" className="block bg-blue-600 p-3 rounded-lg">
            Dashboard
          </a>
          <a href="#" className="block p-3 hover:bg-gray-700 rounded-lg">
            Users
          </a>
          <a href="#" className="block p-3 hover:bg-gray-700 rounded-lg">
            Orders
          </a>
          <a href="#" className="block p-3 hover:bg-gray-700 rounded-lg">
            Analytics
          </a>
          <a href="#" className="block p-3 hover:bg-gray-700 rounded-lg">
            Settings
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">
              Dashboard
            </h2>
            <p className="text-gray-500 mt-1">
              Welcome back! Here's your overview.
            </p>
          </div>

          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
            + Add New
          </button>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <p className="text-gray-500">{stat.title}</p>

              <h3 className="text-3xl font-bold text-gray-800 mt-2">
                {stat.value}
              </h3>

              <p className="text-green-600 text-sm mt-2">
                {stat.change} from last month
              </p>
            </div>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="bg-white p-6 rounded-xl shadow-sm mt-8">
          <h3 className="text-xl font-bold text-gray-800 mb-5">
            Recent Activity
          </h3>

          <div className="space-y-5">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="flex justify-between items-center border-b pb-4 last:border-0"
              >
                <div>
                  <p className="font-semibold text-gray-800">
                    {activity.user}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {activity.action}
                  </p>
                </div>

                <span className="text-gray-400 text-sm">
                  {activity.time}
                </span>
              </div>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
}