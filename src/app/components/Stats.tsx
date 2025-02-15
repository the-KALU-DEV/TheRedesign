export default function Stats() {
    return (
      <section className="w-full bg-green-600 py-10">
        <div className="container mx-auto px-6">
          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {/* Stat 1 */}
            <div>
              <h2 className="text-5xl font-bold">621</h2>
              <p className="text-lg">Students</p>
            </div>
  
            {/* Stat 2 */}
            <div>
              <h2 className="text-5xl font-bold">05</h2>
              <p className="text-lg">Collaborations</p>
            </div>
  
            {/* Stat 3 */}
            <div>
              <h2 className="text-5xl font-bold">06</h2>
              <p className="text-lg">Event organised</p>
            </div>
  
            {/* Stat 4 */}
            <div>
              <h2 className="text-5xl font-bold">4327</h2>
              <p className="text-lg">Event attendees</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  