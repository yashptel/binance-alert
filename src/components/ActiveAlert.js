import React from "react";

const Activealert = ({ className }) => {
  return (
    <div
      className={`h-16 w-full bg-gray-700 border rounded-xl border-slate-700 overflow-hidden ${className}`}
    >
      <div className="h-16 w-full border -m-px ml-1 px-2 rounded-xl border-slate-700 bg-gray-50 flex items-center">
        <div className="h-full w-full flex items-center justify-between">
          <span className="text-sm text-gray-800">BTC/USDT</span>
          <span className="text-sm text-gray-800">Alert Price: $44,550</span>
          <span className="text-sm text-gray-800">Current Price: $45,967</span>
          <button
            className="flex items-center justify-center px-4 py-2 mr-2 border border-transparent rounded-lg text-sm font-medium text-gray-50 bg-gray-900 hover:bg-gray-700"
            type="submit"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Activealert;
