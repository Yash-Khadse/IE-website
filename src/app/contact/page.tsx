import CTASection from '@/sections/CTASection';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

export const metadata = {
  title: 'Contact | InvisiEdge',
  description: 'Initialize a secure connection with our team. Start your project today.',
};

export default function ContactPage() {
    return (
        <main className="pt-20 bg-background min-h-screen">
             <div className="py-24 md:py-32 text-center relative overflow-hidden border-b border-border">
                 <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20 pointer-events-none" />
                 <div className="max-w-4xl mx-auto px-6 relative z-10">
                     <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6">
                         ESTABLISH <span className="text-primary">UPLINK</span>
                     </h1>
                     <p className="text-xl text-muted-foreground">
                         Ready to upgrade your infrastructure? Initialize the sequence below.
                     </p>
                 </div>
            </div>

            <section className="py-20 px-6 max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                    
                    {/* Contact Form */}
                    <div className="bg-card border border-border p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
                        
                        <form className="flex flex-col gap-6 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Identity</label>
                                    <input type="text" placeholder="Full Name" className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Comms_ID</label>
                                    <input type="email" placeholder="Email Address" className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors" />
                                </div>
                            </div>
                            
                            <div className="space-y-2">
                                <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Subject_Vector</label>
                                <select className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors appearance-none">
                                    <option>System Architecture Consultation</option>
                                    <option>Performance Optimization</option>
                                    <option>Custom Development</option>
                                    <option>General Inquiry</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Transmission_Data</label>
                                <textarea rows={6} placeholder="Describe your project parameters..." className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors resize-none" />
                            </div>

                            <button type="submit" className="mt-4 bg-primary text-primary-foreground font-bold py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 group">
                                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> SEND TRANSMISSION
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col justify-center">
                        <h3 className="text-3xl font-bold text-foreground mb-8">Secure Channels</h3>
                        
                        <div className="space-y-8">
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-foreground mb-2">Base of Operations</h4>
                                    <p className="text-muted-foreground leading-relaxed">
                                        1234 Silicon Avenue, Suite 404<br/>
                                        San Francisco, CA 94107
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-foreground mb-2">Digital Drop</h4>
                                    <p className="text-muted-foreground leading-relaxed">
                                        hello@invisiedge.io<br/>
                                        careers@invisiedge.io
                                    </p>
                                </div>
                            </div>

                             <div className="flex items-start gap-6">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-foreground mb-2">Voice Comms</h4>
                                    <p className="text-muted-foreground leading-relaxed">
                                        +1 (555) 123-4567<br/>
                                        Mon-Fri, 0900 - 1800 PST
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 p-6 bg-secondary rounded-2xl border border-border">
                            <p className="text-sm text-foreground/80 font-mono">
                                <span className="text-green-500 mr-2">●</span>
                                Current Status: <span className="font-bold">ACCEPTING NEW CLIENTS</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
