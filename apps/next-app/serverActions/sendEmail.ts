'use server'

import { Resend } from "resend"
import { render } from "@react-email/render";

import { CodepenChallengesEmail } from '@my-repo/transactional';
 
const resend = new Resend(process.env.RESEND_KEY);

export async function sendCodePenChallenges() {
  const HTML = render(CodepenChallengesEmail());

  return await resend.emails.send({
    from: 'noreploy@yourdomain.com',
    to: 'delivered@resend.dev',
    subject: 'Codepen challenges of the moment',
    html: HTML
  });
}
