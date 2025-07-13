import CollegeCard from "@/components/CollegeCard";

  export default async function Home() {
      // Mock data (replace with API call later)
      const colleges = [
        { id: 1, name: 'College A', image: '/images/college-a.jpg', admissionDates: ['2025-01-01'], events: ['Event 1'], research: ['Paper 1'], sports: ['Football'] },
        { id: 2, name: 'College B', image: '/images/college-b.jpg', admissionDates: ['2025-02-01'], events: ['Event 2'], research: ['Paper 2'], sports: ['Basketball'] },
        { id: 3, name: 'College C', image: '/images/college-c.jpg', admissionDates: ['2025-03-01'], events: ['Event 3'], research: ['Paper 3'], sports: ['Tennis'] },
      ];

      return (
        <div>
          <section className="mb-8">
            <input type="text" placeholder="Search for a college" className="border p-2 w-full rounded" />
          </section>
          <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {colleges.map(college => (
              <CollegeCard key={college.id} college={college} />
            ))}
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Image Gallery</h2>
            {/* Add image gallery */}
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Research Papers</h2>
            {/* Add research paper links */}
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">Reviews</h2>
            {/* Add reviews */}
          </section>
        </div>
      );
    }