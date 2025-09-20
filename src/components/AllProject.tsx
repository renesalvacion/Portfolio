import React from 'react';

interface SliderContent {
  image: string;
  title: string;
  content: string;
}

export default function AllProject() {
  const AllsliderArray: SliderContent[] = [
    {
      image: 'https://flowbite.com/docs/images/carousel/carousel-1.svg',
      title: 'Project One',
      content: 'This is the first project in the carousel.',
    },
    {
      image: 'https://flowbite.com/docs/images/carousel/carousel-2.svg',
      title: 'Project Two',
      content: 'Another example of a great project.',
    },
    {
      image: 'https://flowbite.com/docs/images/carousel/carousel-3.svg',
      title: 'Project Three',
      content: 'Carousel working perfectly now.',
    },
    {
      image: 'https://flowbite.com/docs/images/carousel/carousel-3.svg',
      title: 'Project Four',
      content: 'Another one in the mix.',
    },
    {
      image: 'https://flowbite.com/docs/images/carousel/carousel-3.svg',
      title: 'Project Five',
      content: 'More projects coming.',
    },
    {
      image: 'https://flowbite.com/docs/images/carousel/carousel-3.svg',
      title: 'Project Six',
      content: 'Impressive work continues.',
    },
    {
      image: 'https://flowbite.com/docs/images/carousel/carousel-3.svg',
      title: 'Project Seven',
      content: 'Keeping it going.',
    },
    {
      image: 'https://flowbite.com/docs/images/carousel/carousel-3.svg',
      title: 'Project Eight',
      content: 'The final showcase.',
    }
  ];

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Best Projects:</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {AllsliderArray.map((slide, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow p-4 flex flex-col items-center text-center hover:shadow-lg transition"
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="h-24 w-auto object-contain mb-4"
            />
            <h2 className="text-lg font-semibold mb-1">{slide.title}</h2>
            <p className="text-sm text-gray-600">{slide.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
