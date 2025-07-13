import dbConnect from '@/utils/db';
    import College from '@/models/College';

    export async function GET() {
      await dbConnect();
      const colleges = await College.find();
      return new Response(JSON.stringify(colleges), { status: 200 });
    }