'use client'

import { ImageCard } from '@/components/common/secret-santa/ImageCard'
import { SignIn } from '@/components/common/secret-santa/SignIn'
import React, { useState } from 'react'

export default function Page() {
  const [secretSanta, setSecretSanta] = useState(null);

  return (
    <div className="flex mt-10">
      <div className="w-1/2 p-5 border-r">
        <SignIn setSecretSanta={setSecretSanta} />
      </div>

      <div className="w-1/2 p-5">
        {secretSanta ? <ImageCard person={secretSanta} /> : <p>Please sign in to see your secret Santa.</p>}
      </div>
    </div>
  )
}
