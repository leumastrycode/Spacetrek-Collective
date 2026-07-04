export default function Sidebar({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (tab: string) => void }) {
  return (
    <div className="fixed top-0 left-0 h-full w-64 bg-[#1a1a1a] border-r border-gray-500 z-40 pt-5">
      <div className="flex flex-col h-full mt-[80px] w-full">
        <h2 className="font-plexMono text-2xl mb-5 pl-5">ADMIN</h2>

        <div className="flex flex-col space-y-2 ">
          <button 
            onClick={() => setActiveTab('dashboard')}
            className={`w-full p-5 text-left transition-colors duration-200 hover:text-white ${
              activeTab === 'dashboard' 
                ? 'bg-indigo-600 text-white' 
                : 'text-gray-300'
            }`}
          >
            Dashboard
          </button>
          <button 
            onClick={() => setActiveTab('users')}
            className={`w-full p-5 text-left transition-colors duration-200 hover:text-white ${
              activeTab === 'users' 
                ? 'bg-indigo-600 text-white' 
                : 'text-gray-300'
            }`}
          >
            Users
          </button>
          <button 
            onClick={() => setActiveTab('orders')}
            className={`w-full p-5 text-left transition-colors duration-200 hover:text-white ${
              activeTab === 'orders' 
                ? 'bg-indigo-600 text-white' 
                : 'text-gray-300'
            }`}
          >
            Order
          </button>
        </div>
      </div>
    </div>
  );
}
