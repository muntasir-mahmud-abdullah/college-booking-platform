import Link from 'next/link';

    export default function CollegeCard({ college }) {
      return (
        <div className="border p-4 rounded shadow">
          <img src={college.image} alt={college.name} className="w-full h-48 object-cover mb-4" />
          <h2 className="text-xl font-bold">{college.name}</h2>
          <p>Admission Dates: {college.admissionDates.join(', ')}</p>
          <p>Events: {college.events?.join(', ')}</p>
          <p>Research: {college.research?.join(', ')}</p>
          <p>Sports: {college.sports?.join(', ')}</p>
          <Link href={`/colleges/${college.id}`} className="text-blue-500 hover:underline">Details</Link>
        </div>
      );
    }