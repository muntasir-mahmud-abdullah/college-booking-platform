'use client';
    import { useState } from 'react';

    export default function Admission() {
      const [formData, setFormData] = useState({ name: '', subject: '', email: '', phone: '', address: '', dob: '', image: null });

      const handleSubmit = (e) => {
        e.preventDefault();
        // Submit to API
      };

      return (
        <div>
          <h1 className="text-2xl font-bold mb-4">Admission Form</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" name="name" placeholder="Candidate Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="border p-2 w-full rounded" />
            {/* Add other fields */}
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit</button>
          </form>
        </div>
      );
    }