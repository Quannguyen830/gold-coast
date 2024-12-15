import React, { useState } from 'react'
import { secretSantaDistribution } from '@/service/secret_santa'

interface SignInProps {
  setSecretSanta: (santa: any) => void;
}

export const SignIn: React.FC<SignInProps> = ({ setSecretSanta }) => {
  const [name, setName] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const foundSanta = secretSantaDistribution.find(person => person.name === name)
    setSecretSanta(foundSanta)
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className="my-4">
          <label className="">
            Your Name:
            <input
              type="text"
              name="name"
              required
              className="ml-2 border-b-2 border-gray focus:border-black focus:border-b-3 outline-none transition-all duration-100"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block">
            Password (optional):
            <input
              type="text"
              name="name"
              className="ml-2 border-b-2 border-gray focus:border-black focus:border-b-3 outline-none transition-all duration-100"
            />
          </label>
        </div>
        <button type="submit" className="bg-gray-800 text-white py-1 px-2 rounded hover:bg-gray-600">
          Who is your secret santa
        </button>
      </form>
      <p className="mt-4">Name/Password are only for this event.</p>
      <p>New to this event? Password de cho dep.</p>
      <p>For the sake of the game, don't sign in as other person.</p>
    </div>
  )
}
