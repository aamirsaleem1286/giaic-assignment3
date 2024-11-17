import React from 'react';

const Index = () => {
  return (
    <footer className="bg-[#043873] text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="flex flex-col">
            <h2 className="text-2xl font-semibold mb-4">whitepace</h2>
            <p className="text-sm text-white">
              whitepace was created for the new ways we live and work. We make a better workspace around the world.
            </p>
          </div>
          <div className="flex flex-col">
            <h2 className="text-2xl font-semibold mb-4">Product</h2>
            <ul className="space-y-2">
              <li><a href="#" className="text-white hover:text-white">Overview</a></li>
              <li><a href="#" className="text-white hover:text-white">Pricing</a></li>
              <li><a href="#" className="text-white hover:text-white">Customer stories</a></li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h2 className="text-2xl font-semibold mb-4">Resources</h2>
            <ul className="space-y-2">
              <li><a href="#" className="text-white hover:text-white">Blog</a></li>
              <li><a href="#" className="text-white hover:text-white">Guides & tutorials</a></li>
              <li><a href="#" className="text-white hover:text-white">Help center</a></li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="flex flex-col">
            <h2 className="text-2xl font-semibold mb-4">Company</h2>
            <ul className="space-y-2">
              <li><a href="#" className="text-white hover:text-white">About us</a></li>
              <li><a href="#" className="text-white hover:text-white">Careers</a></li>
              <li><a href="#" className="text-white hover:text-white">Media kit</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Index;
