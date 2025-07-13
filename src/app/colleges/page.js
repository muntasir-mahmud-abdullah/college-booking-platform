import CollegeCard from "@/components/CollegeCard";


    export default async function Colleges() {
      // Mock data (replace with API call)
      const colleges = [
        { id: 1, name: 'College A', image: '/images/college-a.jpg', rating: 4.5, admissionDates: ['2025-01-01'], researchCount: 10 },
        // Add more colleges
      ];

      return (
        <div>
          <h1 className="text-2xl font-bold mb-4">All Colleges</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {colleges.map(college => (
              <CollegeCard key={college.id} college={college} />
            ))}
          </div>
        </div>
      );
    }