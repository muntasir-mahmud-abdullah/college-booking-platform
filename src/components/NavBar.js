'use client';
    import Link from 'next/link';
    import {signIn, signOut } from 'next-auth/react';

    export default function NavBar() {
      return (
        <nav className="bg-gray-800 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-white text-xl font-bold">College Booking</Link>
            <div className="space-x-4">
              <Link href="/colleges" className="text-white hover:text-gray-300">Colleges</Link>
              <Link href="/admission" className="text-white hover:text-gray-300">Admission</Link>
              {/* {session ? (
                <>
                  <Link href="/mycollege" className="text-white hover:text-gray-300">My College</Link>
                  <Link href="/profile" className="text-white hover:text-gray-300">{session.user.name}</Link>
                  <button onClick={() => signOut()} className="text-white hover:text-gray-300">Logout</button>
                </>
              ) : ( */}
                <button onClick={() => signIn()} className="text-white hover:text-gray-300">Login</button>
              {/* )} */}
            </div>
          </div>
        </nav>
      );
    }