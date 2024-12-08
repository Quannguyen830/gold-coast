"use client";

import { supabase } from "../utils/supabase";

export default function Home() {
  return (
    <>
      <button
        onClick={() => {
          supabase.auth.signInWithOAuth({
            provider: "google",
          });
        }}
      >
        gg
      </button>
    </>
  )
}
