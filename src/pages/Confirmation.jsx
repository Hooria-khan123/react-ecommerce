import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { Footer } from '../components/Storefront';

export function Confirmation(){const location=useLocation(),name=location.state?.name||'there',number=location.state?.number||'10482';return <><main className="confirmation"><div className="confirmation-icon"><Check size={29}/></div><div className="eyebrow">THANK YOU FOR SHOPPING SMALL</div><h1>Good things are <em>on their way.</em></h1><p>Thanks, {name}. Your order <b>#{number}</b> is confirmed. We’ve sent you an email with all the details.</p><div className="confirmation-card"><div><span>✳</span><p>We’ll wrap your order with care and let you know as soon as it’s on its way.</p></div><Link to="/shop" className="button button-dark">Keep exploring <ArrowRight size={16}/></Link></div><Link to="/" className="under-link">Back to the good stuff <ArrowRight size={16}/></Link></main><Footer/></>}
