import { render } from '@react-email/components'

import CodepenChallengersEmail from '@/emails/CodepenChallengesEmail';

export default function Home() {
  const html = render(CodepenChallengersEmail());

  return (
    <main>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </main>
  )
}
