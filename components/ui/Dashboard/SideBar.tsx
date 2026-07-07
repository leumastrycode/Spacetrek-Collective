export default function Sidebar({ 
  activeTab, 
  setActiveTab, 
  isOpen, 
  onClose 
}: { 
  activeTab: string; 
  setActiveTab: (tab: string) => void;
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <>
      {/* 1. Backdrop Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-30 md:hidden transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      {/* 2. Sidebar Panel */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-[#1a1a1a] border-r border-gray-500 z-40 pt-5 transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0`}>
        
        <div className="flex flex-col h-full mt-[80px] w-full">
          <div className="flex justify-between items-center pr-5 mb-5 pl-5">
            <h2 className="font-plexMono text-2xl mb-0">ADMIN</h2>
            <button 
              onClick={onClose} 
              className="md:hidden text-gray-400 hover:text-white focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col space-y-2">
            <button 
              onClick={() => { setActiveTab('dashboard'); onClose(); }}
              className={`w-full p-5 text-left transition-colors duration-200 hover:text-white ${
                activeTab === 'dashboard' ? 'bg-indigo-600 text-white' : 'text-gray-300'
              }`}
            >
              Dashboard
            </button>
            <button 
              onClick={() => { setActiveTab('users'); onClose(); }}
              className={`w-full p-5 text-left transition-colors duration-200 hover:text-white ${
                activeTab === 'users' ? 'bg-indigo-600 text-white' : 'text-gray-300'
              }`}
            >
              Users
            </button>
            <button 
              onClick={() => { setActiveTab('orders'); onClose(); }}
              className={`w-full p-5 text-left transition-colors duration-200 hover:text-white ${
                activeTab === 'orders' ? 'bg-indigo-600 text-white' : 'text-gray-300'
              }`}
            >
              Order
            </button>
            <button 
              onClick={() => { setActiveTab('profile'); onClose(); }}
              className={`w-full p-5 text-left transition-colors duration-200 hover:text-white ${
                activeTab === 'profile' ? 'bg-indigo-600 text-white' : 'text-gray-300'
              }`}
            >
              Your Profile
            </button>
          </div>
        </div>
      </div>
    </>
  );
}