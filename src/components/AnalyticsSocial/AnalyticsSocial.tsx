import React from 'react';

const AnalyticsSocial = () => {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Social Media Analytics</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Analytics Cards */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Engagement Metrics</h2>
            <p className="text-gray-600">View detailed engagement analytics across all social platforms</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Audience Growth</h2>
            <p className="text-gray-600">Track your follower growth and audience demographics</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Content Performance</h2>
            <p className="text-gray-600">Analyze your top performing content and posts</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsSocial; 