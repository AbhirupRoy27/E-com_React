import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { handleLogout } from "../../utils/handleLogout";

function Logout() {
  const { setIsLogout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-80 text-center">
        <h2 className="text-lg font-semibold mb-3">Are you sure?</h2>
        <p className="text-gray-600 mb-5">Do you really want to log out?</p>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => handleLogout(setIsLogout, navigate)}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 w-[200px]"
          >
            Yes, Logout
          </button>
          <button
            onClick={() => setIsLogout(false)}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 text-black w-[200px]"
          >
            Cancel
          </button>
        </div>
      </div>

      <div class="flex flex-col items-center gap-3 bg-slate-900/30 text-gray py-6 px-14 rounded-xl">
        <div class="min-w-26 min-h-26 bg-white rounded-full flex items-center justify-center">
          <i
            class="fa-solid fa-right-from-bracket"
            style="font-size: 70px; color: gray;"
          ></i>
        </div>
        <h2 class="text-2xl font-bold">Are You Sure ?</h2>
        <div class="flex gap-3">
          <button class="py-3 px-4 bg-slate-500 rounded">Cancel</button>
          <button class="py-3 px-4 bg-red-700 text-white rounded">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Logout;
