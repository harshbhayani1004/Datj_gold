import { ArrowRight, Lock, Mail, User } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function LoginRedesign() {
  const [registering, setRegistering] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    login(email, registering ? name : undefined);
    navigate('/');
  };

  return (
    <div className="grid min-h-[720px] bg-[#f5f2ea] lg:grid-cols-2">
      <div className="relative hidden overflow-hidden lg:block">
        <img src="https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=1100&h=1200&fit=crop&auto=format&q=86" alt="Datj Gold jewellery" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1b2a]/85 via-transparent to-[#0b1b2a]/10" />
        <div className="absolute bottom-14 left-14 max-w-lg text-white">
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.26em] text-[#d7c59a]">Your private jewellery box</p>
          <blockquote className="font-serif text-5xl leading-[.95]">Save favourites, track orders and return to the pieces you love.</blockquote>
        </div>
      </div>

      <div className="flex items-center justify-center px-5 py-20 md:px-10">
        <div className="w-full max-w-md">
          <p className="eyebrow">{registering ? 'Join Datj Gold' : 'Welcome back'}</p>
          <h1 className="font-serif text-5xl">{registering ? 'Create your account' : 'Sign in to your account'}</h1>
          <p className="mt-4 text-sm leading-7 text-[#66747c]">{registering ? 'Keep your favourites close and enjoy a more personal Datj Gold experience.' : 'Your saved jewellery and shopping bag are waiting.'}</p>

          <form onSubmit={submit} className="mt-9 space-y-5">
            {registering && (
              <label className="relative block">
                <span className="sr-only">Full name</span>
                <User className="absolute left-5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#7b858a]" />
                <input required value={name} onChange={(event) => setName(event.target.value)} className="form-field !pl-12" placeholder="Full name" />
              </label>
            )}
            <label className="relative block">
              <span className="sr-only">Email address</span>
              <Mail className="absolute left-5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#7b858a]" />
              <input required type="email" value={email} onChange={(event) => setEmail(event.target.value)} className="form-field !pl-12" placeholder="Email address" />
            </label>
            <label className="relative block">
              <span className="sr-only">Password</span>
              <Lock className="absolute left-5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#7b858a]" />
              <input required type="password" value={password} onChange={(event) => setPassword(event.target.value)} className="form-field !pl-12" placeholder="Password" />
            </label>
            {!registering && <div className="text-right"><button type="button" className="text-xs text-[#506c63] underline underline-offset-4">Forgot password?</button></div>}
            <button type="submit" className="lux-button w-full justify-center">{registering ? 'Create account' : 'Sign in'}<ArrowRight className="h-4 w-4" /></button>
          </form>

          <p className="mt-8 text-center text-sm text-[#66747c]">
            {registering ? 'Already have an account?' : 'New to Datj Gold?'}
            <button type="button" onClick={() => setRegistering(!registering)} className="ml-2 font-semibold text-[#18384e] underline underline-offset-4">{registering ? 'Sign in' : 'Create account'}</button>
          </p>
          <div className="mt-8 text-center"><Link to="/" className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#6f7a80]">Return to the shop</Link></div>
        </div>
      </div>
    </div>
  );
}
