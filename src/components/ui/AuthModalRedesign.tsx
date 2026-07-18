import { ArrowRight, Lock, Mail, User, X } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

export default function AuthModalRedesign() {
  const { isAuthModalOpen, closeAuthModal, login } = useAuth();
  const [registering, setRegistering] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!isAuthModalOpen) return null;

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    login(email, registering ? name : undefined);
  };

  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-[#0b1b2a]/70 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label={registering ? 'Create account' : 'Sign in'}>
      <div className="relative w-full max-w-lg overflow-hidden rounded-md bg-[#f5f2ea] p-7 shadow-2xl md:p-10">
        <button type="button" onClick={closeAuthModal} aria-label="Close sign in" className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full border border-[#18384e]/15"><X className="h-4 w-4" /></button>
        <p className="eyebrow">{registering ? 'Join Ruprays' : 'Welcome back'}</p>
        <h2 className="pr-10 font-serif text-4xl">{registering ? 'Create your account' : 'Sign in to continue'}</h2>
        <p className="mt-3 text-sm leading-7 text-[#66747c]">{registering ? 'Save favourites and enjoy a more personal experience.' : 'Continue to your saved pieces and shopping bag.'}</p>
        <form onSubmit={submit} className="mt-7 space-y-4">
          {registering && <label className="relative block"><span className="sr-only">Full name</span><User className="absolute left-5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#7b858a]" /><input required value={name} onChange={(event) => setName(event.target.value)} className="form-field !pl-12" placeholder="Full name" /></label>}
          <label className="relative block"><span className="sr-only">Email address</span><Mail className="absolute left-5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#7b858a]" /><input required type="email" value={email} onChange={(event) => setEmail(event.target.value)} className="form-field !pl-12" placeholder="Email address" /></label>
          <label className="relative block"><span className="sr-only">Password</span><Lock className="absolute left-5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#7b858a]" /><input required type="password" value={password} onChange={(event) => setPassword(event.target.value)} className="form-field !pl-12" placeholder="Password" /></label>
          <button type="submit" className="lux-button w-full justify-center">{registering ? 'Create account' : 'Sign in'} <ArrowRight className="h-4 w-4" /></button>
        </form>
        <p className="mt-6 text-center text-sm text-[#66747c]">
          {registering ? 'Already registered?' : 'New to Ruprays?'}
          <button type="button" onClick={() => setRegistering(!registering)} className="ml-2 font-semibold text-[#18384e] underline underline-offset-4">{registering ? 'Sign in' : 'Create account'}</button>
        </p>
      </div>
    </div>
  );
}
