import { Person } from '@/constants/interface'
import { SmileIcon } from 'lucide-react';
import React from 'react'

interface ImageCardProps {
  person: Person;
}

export const ImageCard: React.FC<ImageCardProps> = ({ person }) => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h2 className="text-2xl font-bold">{person.secret_santa}</h2>
      <div className="mt-4">
        <img
          src={person.base_url}
          alt="Description of the image"
          className='rounded-xl h-[70vh] w-auto'
        />
      </div>
      <p className='mt-4 flex items-center'>
        Congratulation, you picked {person.secret_santa}
        <span className='ml-2'>
          <SmileIcon />
        </span>
      </p>
    </div>
  )
}
