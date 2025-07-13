import mongoose from 'mongoose';

    const collegeSchema = new mongoose.Schema({
      name: String,
      image: String,
      admissionDates: [String],
      events: [String],
      research: [String],
      sports: [String],
      rating: Number,
      researchCount: Number,
    });

    export default mongoose.models.College || mongoose.model('College', collegeSchema);