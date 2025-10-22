import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Instagram } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import footerSunset from "@/assets/footer-sunset.png";

const Index = () => {
  const sections = [
    {
      title: "Stay true to the region's certified plan—or risk chaos downstream",
      content: "The Puget Sound Regional Council certified Sammamish's 2024 Comprehensive Plan on the premise of ~2,100 new homes through 2044. That number isn't random; it's what regional infrastructure, funding assumptions, and environmental safeguards were built around. Authorizing ~4,000 would blow past the target PSRC reviewed, invite recertification risk, and force the City to scramble to retrofit transportation, stormwater, and service capacity that the plan does not currently fund. This isn't anti-growth; it's pro-plan, pro-credibility, and pro-good governance."
    },
    {
      title: "Roads and safety first: concurrency is a promise, not a loophole",
      content: "Residents know the pinch points—Issaquah-Pine Lake, Issaquah-Fall City/SE Duthie, 228th. The Transportation Master Plan shows a multi-year slate of expensive fixes already needed just to keep up. The City's own concurrency program requires capacity to be in place or imminent; 4,000 homes would front-load traffic onto corridors the City is still designing, phasing, or funding. Result: slower emergency response, more collisions, and longer commutes—real costs paid by families every day. Keeping growth near 2,100 lets projects land, protects concurrency, and keeps school-zone safety work ahead of demand."
    },
    {
      title: "Water, salmon, and the law: lower-impact growth protects what makes Sammamish Sammamish",
      content: "Sammamish is a headwaters city feeding Issaquah Creek and Lake Sammamish, waters already pressured by nutrients (notably phosphorus) and urban runoff. Under Washington's Phase II municipal stormwater permit, the City must prevent added pollution from impervious surfaces. Science is unambiguous: road runoff contains 6PPD-quinone, a tire-derived compound acutely toxic to coho salmon—a WRIA-8 priority species. Doubling the housing push would expand hardscape and pollutant load against a legal backdrop that's only getting stricter. Capping growth near 2,100 supports permit compliance and salmon recovery, safeguarding the lake, creeks, and downstream fisheries that define this place."
    },
    {
      title: "Schools and emergency services are already tight—fund capacity before adding demand",
      content: "The Issaquah School District openly flagged high-school overcrowding and sought a 2024–25 bond to add capacity; voters didn't reach the supermajority threshold. The District now plans smaller, slower fixes while Skyline and Issaquah remain near or above ideal utilization. Pushing 4,000 homes without funded classroom capacity risks more portables, longer passing times, and program cuts. Meanwhile, Eastside Fire & Rescue's 2024 Standard of Cover shows how finely tuned response times already are; sudden, disperse growth strains those benchmarks. Sensible pacing—~2,100 homes—keeps students safe and learning, and preserves response performance without saddling residents with emergency tax hikes."
    },
    {
      title: "Fiscal common sense: build what we can maintain",
      content: "Big housing numbers can look good on a spreadsheet, but the long-term bill arrives as pavement rehab, stormwater retrofits, intersection rebuilds, and school capacity—costs that outlast impact fees. The City's own TMP and capital program already list multi-million-dollar projects just to meet today's needs. Authorizing 4,000 units front-loads liabilities and risks crowding out investments in parks, trails, and safety. Phasing near 2,100 aligns revenue with reality—so we build well, maintain what we build, and keep Sammamish financially resilient."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
        {/* Background Image - Full horizontal format */}
        <div 
          className="w-full relative"
          style={{
            backgroundImage: `url(${footerSunset})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            minHeight: '80vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="max-w-5xl mx-auto text-center space-y-6 py-16 px-4 sm:px-6 lg:px-8 relative z-10">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-tight drop-shadow-2xl mb-8" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
              Youth<span className="text-white">Against</span>4k
            </h1>
            
            <p className="text-2xl sm:text-3xl lg:text-4xl text-white/95 max-w-4xl mx-auto leading-relaxed drop-shadow-lg font-medium">
              Supporting smart, sustainable growth in Sammamish
            </p>
            
            <div className="mt-12">
              <Button 
                size="lg" 
                className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300"
                onClick={() => {
                  document.getElementById('why')?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section id="why" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 sm:p-12 shadow-lg border-gray-200">
            <p className="text-lg sm:text-xl text-foreground/90 leading-relaxed">
              By no means do we not support the creation of a town center, meeting spaces, and more establishments. 
              It is just the 4,000 houses that is really unintelligent.
            </p>
          </Card>
        </div>
      </section>

      {/* Main Arguments */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
              Five Reasons for 2,100
            </h2>
            <p className="text-xl text-muted-foreground">
              Evidence-based arguments for responsible growth
            </p>
          </div>

          {sections.map((section, index) => (
            <Card 
              key={index} 
              className="p-8 sm:p-10 hover:shadow-xl transition-all duration-300 hover:border-gray-300"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-700">{index + 1}</span>
                </div>
                <div className="space-y-4 flex-1">
                  <h3 className="text-2xl font-semibold text-foreground leading-tight">
                    {section.title}
                  </h3>
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Youth Perspective */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 sm:p-12 shadow-xl border-gray-200">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                The Youth Perspective
              </h2>
              <p className="text-lg sm:text-xl text-foreground/90 leading-relaxed">
                4,000 houses will really ruin Sammamish. The politicians who are supporting this have been 
                bought out by developers to double their revenue. As youth, none of this really matters to us, 
                especially because we will all graduate before all this is done, but this really makes us mad and 
                we thought at least we should get our voices heard.
              </p>
              <p className="text-lg sm:text-xl text-foreground/90 leading-relaxed">
                These certain politicians use the "youth" as some sort of abstract idea, political tool, and buzzword, 
                but guess what? The youth aren't really on your side. We 
                want you to look into Sammamish and see what people truly believe. It's not just old people complaining. It's young as well.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />

        <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-lg">
              Join the Movement
            </h2>
            <p className="text-xl text-white/95 drop-shadow-md">
              Connect with us and make your voice heard
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-12 max-w-2xl mx-auto">
            <a 
              href="mailto:YouthAgainst4k@gmail.com"
              className="flex flex-col items-center gap-4 text-white hover:text-white/80 transition-colors group"
            >
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <Mail className="h-8 w-8" />
              </div>
              <div className="space-y-1 text-center">
                <p className="font-semibold text-lg drop-shadow-lg">Email Us</p>
                <p className="text-sm text-white/90 drop-shadow-md break-all">
                  YouthAgainst4k@gmail.com
                </p>
              </div>
            </a>

            <a 
              href="https://instagram.com/YouthAgainst4k"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-4 text-white hover:text-white/80 transition-colors group"
            >
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <Instagram className="h-8 w-8" />
              </div>
              <div className="space-y-1 text-center">
                <p className="font-semibold text-lg drop-shadow-lg">Follow Us</p>
                <p className="text-sm text-white/90 drop-shadow-md">
                  @YouthAgainst4k
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-foreground/90 font-medium">
            © {new Date().getFullYear()} YouthAgainst4k. Fighting for responsible growth in Sammamish.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
