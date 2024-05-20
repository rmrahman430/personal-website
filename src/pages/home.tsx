import React from 'react';

interface AboutMeProps {
  name: string;
  bio: string; // Add bio for About Me section
  avatarUrl?: string; // Optional avatar image URL
  email: string;
  github: string;
}

const HomePage: React.FC<AboutMeProps> = ({
  name,
  bio,
  avatarUrl,
  email,
  github,
}) => {
  return (
    <main className="container mx-auto px-4 py-8 flex flex-col items-center pt-12">
      {avatarUrl && ( // Conditionally render avatar if URL provided
        <img
          className="w-32 h-32 rounded-full mb-4 object-cover"
          src={avatarUrl}
          alt="Your Avatar"
        />
      )}
      <section className="text-center">
        <h1 className="text-3xl font-bold mb-4">{name}</h1>
        <p className="text-lg leading-loose">{bio}</p>
      </section>
      <section className="mt-8 flex justify-center space-x-4">
        <a href={`mailto:${email}`} className="text-blue-500 hover:underline">
          Email
        </a>
        <a href={github} className="text-blue-500 hover:underline">
          GitHub
        </a>
      </section>
    </main>
  );
};

export default HomePage;
