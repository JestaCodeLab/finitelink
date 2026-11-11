import { useState, type FormEvent } from 'react';
import { ENQUIRY_EMAIL } from '../site';

/**
 * Enquiry form handling.
 *
 * There is no backend yet, so submitting opens the visitor's mail app with the
 * enquiry pre-filled. To post to an API instead (Formspree, a serverless
 * function…), replace the `window.location.href = …` line in `onSubmit`.
 */
export function useEnquiry(subject: string) {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: real visitors never fill this hidden field.
    if (data.get('website')) return;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const body = [...data.entries()]
      .filter(([k, v]) => k !== 'website' && String(v).trim())
      .map(([k, v]) => `${k}: ${v}`)
      .join('\n');

    window.location.href = `mailto:${ENQUIRY_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return { onSubmit, sent };
}

export function FormStatus({ sent }: { sent: boolean }) {
  return sent ? (
    <p className="form-status" role="status">
      Thanks! Your email app should open with your enquiry ready to send.
    </p>
  ) : (
    <p role="status" hidden />
  );
}
