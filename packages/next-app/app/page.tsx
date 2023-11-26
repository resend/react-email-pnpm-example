'use client'
import { sendCodePenChallenges } from '@/serverActions/sendEmail';

import './style.css';

export default function Home() {
  return (
    <main style={{ display: 'flex', padding: 0, justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh', background: 'rgb(5, 5, 10)' }}>
      <form
        action={sendCodePenChallenges}
      >
        <button
          type="submit"
        >
          Send code pen challenges email
        </button>
      </form>
    </main>
  )
}
