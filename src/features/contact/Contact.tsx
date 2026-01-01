import { Section } from '../../components/layouts/Section';
import { useForm } from 'react-hook-form';
import { Reveal } from '../../components/ui/Reveal';
import { Button } from '../../components/ui/Button';

type ContactValues = { message: string };

const WHATSAPP_NUMBER = '6281233456496';
const EMAIL_TO = 'wildanzhaf@gmail.com';

export function Contact() {
  const form = useForm<ContactValues>({
    defaultValues: { message: '' },
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  const sendWhatsApp = (v: ContactValues) => {
    const msg = v.message.trim();
    if (!msg) {
      form.setError('message', { type: 'manual', message: 'Message is required' });
      return;
    }
    const wa = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(wa, '_blank', 'noreferrer');
  };

  const sendGmail = (v: ContactValues) => {
    const msg = v.message.trim();
    if (!msg) {
      form.setError('message', { type: 'manual', message: 'Message is required' });
      return;
    }
    const url = `https://mail.google.com/mail/?view=cm&fs=1` + `&to=${encodeURIComponent(EMAIL_TO)}` + `&body=${encodeURIComponent(msg)}`;

    window.open(url, '_blank', 'noreferrer');
  };

  return (
    <Section id="contact" title="Contact" subtitle="Let's build something great.">
      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="rounded-3xl border border-slate-200/60 dark:border-white/10 bg-white/60 dark:bg-white/5 p-6">
            <h3 className="font-semibold">Social</h3>
            <div className="mt-4 space-y-2 text-slate-700 dark:text-slate-200">
              <a className="block hover:text-orange-500 transition" href="https://github.com/wildanzhafiri" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="block hover:text-orange-500 transition" href="https://www.linkedin.com/in/muhammad-wildan-zhafiri-0a1921289/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a className="block hover:text-orange-500 transition" href="https://www.instagram.com/wildanzhf/" target="_blank" rel="noreferrer">
                Instagram
              </a>

              {/* optional: ini bisa kamu hapus kalau kamu ga mau pake mailto sama sekali */}
              <a className="block hover:text-orange-500 transition" href={`mailto:${EMAIL_TO}`}>
                Email
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <form onSubmit={(e) => e.preventDefault()} className="rounded-3xl border border-slate-200/60 dark:border-white/10 bg-white/60 dark:bg-white/5 p-6 space-y-4">
            <div>
              <label className="text-sm font-medium">Message</label>
              <textarea
                rows={6}
                className="mt-2 w-full rounded-2xl bg-slate-900/5 dark:bg-white/10 px-4 py-3 outline-none resize-none"
                placeholder="Write your message..."
                {...form.register('message', {
                  onChange: () => form.clearErrors('message'),
                })}
              />
              {form.formState.errors.message?.message ? <p className="mt-1 text-xs text-rose-500">{form.formState.errors.message.message}</p> : null}
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <Button type="button" onClick={() => sendWhatsApp(form.getValues())} className="w-full cursor-pointer hover:scale-105 transition ease-in-out">
                Send via WhatsApp
              </Button>

              <Button type="button" onClick={() => sendGmail(form.getValues())} className="w-full cursor-pointer hover:scale-105 transition ease-in-out">
                Send via Gmail
              </Button>
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
