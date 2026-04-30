import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate, useLocation } from 'react-router-dom';
import { sites, getFaviconUrl, type Tab } from './data/sites';
import { useFavorites } from './lib/useFavorites';

/* ─── Top Header (Desktop & Mobile) ───────────────────────── */
function TopHeader({ title = "Boredom Buster", onTitleClick }: { title?: string, onTitleClick?: () => void }) {
  return (
    <header className="flex justify-center items-center w-full px-6 py-4 bg-white border-b-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] fixed top-0 z-40">
      <button 
        onClick={onTitleClick}
        className="text-2xl font-black text-black font-be uppercase tracking-tighter cursor-pointer hover:scale-105 active:scale-95 transition-transform"
      >
        {title}
      </button>
    </header>
  );
}

/* ─── Side Nav (Desktop) ────────────────────────────────── */
function SideNav({ activeTab, onTabSwitch }: { activeTab: string; onTabSwitch: (tab: string) => void }) {
  const tabs = [
    { id: 'timepass', label: 'Time Pass', icon: 'videogame_asset' },
    { id: 'student', label: 'Student', icon: 'school' },
    { id: 'builder', label: 'Builder', icon: 'handyman' },
  ];

  return (
    <nav className="hidden md:flex flex-col w-64 h-screen p-6 bg-[#b6e7fd] border-r-2 border-black shadow-[5px_0px_0px_0px_rgba(0,0,0,1)] sticky top-0 shrink-0 z-40">
      <div className="mb-10">
        <h1 className="font-be text-[24px] font-black text-black uppercase tracking-tighter">Boredom Buster</h1>
        <p className="font-dm text-[12px] font-medium text-[#504348] mt-1">Find your next vibe</p>
      </div>
      <ul className="flex flex-col gap-3 flex-1">
        {tabs.map(t => (
          <li key={t.id}>
            <button
              onClick={() => onTabSwitch(t.id)}
              className={`flex items-center gap-3 px-4 py-3 w-full rounded-full transition-transform active:translate-x-0 active:shadow-none font-nunito font-bold text-[16px] ${
                activeTab === t.id 
                  ? "bg-[#f7b3d2] text-black border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] translate-x-1" 
                  : "text-black hover:bg-white/20 hover:translate-x-2 border-2 border-transparent"
              }`}
            >
              <span className="material-symbols-outlined text-[24px]">{t.icon}</span>
              <span>{t.label}</span>
            </button>
          </li>
        ))}
        <li className="mt-4 border-t-2 border-black/10 pt-4">
          <button
            onClick={() => onTabSwitch('fav')}
            className={`flex items-center gap-3 w-full px-4 py-3 rounded-full transition-transform active:translate-x-0 active:shadow-none font-nunito font-bold text-[16px] ${
              activeTab === 'fav' 
                ? "bg-[#f7b3d2] text-black border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] translate-x-1" 
                : "text-black hover:bg-white/20 hover:translate-x-2 border-2 border-transparent"
            }`}
          >
            <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: activeTab === 'fav' ? '"FILL" 1' : '"FILL" 0' }}>star</span>
            <span>Favs</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}

/* ─── Bottom Nav (Mobile) ───────────────────────────────── */
function BottomNav({ activeTab, onTabSwitch }: { activeTab: string; onTabSwitch: (tab: string) => void }) {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex flex-col items-center pb-6 pt-2 px-4 gap-4 bg-white border-t-2 border-black rounded-t-[32px] shadow-[0px_-4px_0px_0px_rgba(0,0,0,1)]">
      {/* Floating Primary Action */}
      <button
        onClick={() => onTabSwitch('fav')}
        className={`absolute -top-8 border-2 rounded-full px-8 py-3 font-barlow text-[18px] font-bold transition-all uppercase flex items-center gap-2 ${
          activeTab === 'fav'
            ? "bg-[#f7b3d2] text-black border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] scale-110"
            : "text-[#1f1a1c] border-transparent hover:bg-white/20"
        }`}
      >
        <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: activeTab === 'fav' ? '"FILL" 1' : '"FILL" 0' }}>star</span>
        Favs
      </button>
      
      <div className="flex justify-between items-center w-full max-w-sm mt-8 px-2">
        {[
          { id: 'timepass', label: 'Time Pass', icon: 'videogame_asset' },
          { id: 'student', label: 'Student', icon: 'school' },
          { id: 'builder', label: 'Builder', icon: 'handyman' },
        ].map(t => (
          <button 
            key={t.id}
            onClick={() => onTabSwitch(t.id)}
            className={`flex flex-col items-center gap-1 transition-transform cubic-bezier(0.68,-0.6,0.32,1.6) active:scale-95 ${
              activeTab === t.id 
                ? "bg-[#f7b3d2] text-black border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rounded-full px-4 py-2 hover:scale-110" 
                : "text-black opacity-70 p-2 hover:scale-110"
            }`}
          >
            <span className="material-symbols-outlined text-[24px]">{t.icon}</span>
            <span className="font-dm font-bold text-[10px] uppercase">{t.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}


/* ─── Landing Page ──────────────────────────────────────── */
function LandingPage({ onBoredClick, onTitleClick }: { onBoredClick: () => void, onTitleClick: () => void }) {
  return (
    <div className="mesh-bg flex flex-col min-h-screen w-full relative">
      <TopHeader onTitleClick={onTitleClick} />
      <main className="flex-1 flex flex-col items-center justify-center w-full px-6 relative z-10 pt-20 pb-32">
        <div className="text-center max-w-2xl mx-auto flex flex-col items-center gap-6">
          <h2 className="font-barlow text-[48px] md:text-[64px] leading-[1.1] font-bold text-black uppercase text-center drop-shadow-[2px_2px_0px_rgba(0,0,0,0.1)]">
            what should i do?
          </h2>
          <p className="font-nunito text-[18px] text-[#504348] opacity-80 text-center max-w-md">
            click the button. we'll fix that.
          </p>
          <div className="mt-8">
            <button 
              onClick={onBoredClick}
              className="btn-bored btn-bored--lg hard-shadow bouncy-hover"
            >
              <span className="material-symbols-outlined text-[40px]" style={{fontVariationSettings: '"FILL" 1'}}>auto_awesome</span>
              I am bored
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

/* ─── Pick Your Vibe (Category Selection) ───────────────── */
function PickYourVibe({ onSelectTab }: { onSelectTab: (tab: Tab) => void }) {
  const cards = [
    { id: 'timepass', title: 'Time Pass', subtitle: 'just fun. no agenda.', icon: 'shuffle', rotate: -2 },
    { id: 'student', title: 'Student', subtitle: 'get smarter without trying.', icon: 'menu_book', rotate: 1 },
    { id: 'builder', title: 'Builder', subtitle: 'level up your craft.', icon: 'code', rotate: -1 },
  ];

  return (
    <main className="flex-1 w-full max-w-5xl mx-auto px-6 py-10 flex flex-col items-center justify-center pt-24 md:pt-10">
      <div className="text-center mb-10">
        <div
          className="bg-[#844d68] text-white border-2 border-black rounded-full px-10 py-6 font-barlow font-bold text-[36px] md:text-[48px] leading-none uppercase"
        >
          what kind of bored are you?
        </div>
      </div>

      <div className="w-full flex flex-col items-center gap-6">
        <p className="font-dm text-[12px] text-[#827379] font-bold uppercase tracking-wider">pick one of these</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {cards.map((card, i) => (
            <motion.button
              key={card.id}
              onClick={() => onSelectTab(card.id as Tab)}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="group bg-[#f7b3d2] border-2 border-black rounded-[24px] p-8 text-left shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:bg-[#b6e7fd] hover:shadow-[7px_7px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 active:shadow-none active:translate-x-[5px] active:translate-y-[5px] transition-all duration-300 ease-[cubic-bezier(0.68,-0.6,0.32,1.6)] flex flex-col gap-4"
              style={{ transform: `rotate(${card.rotate}deg)` }}
            >
              <div className="w-16 h-16 rounded-full bg-white border-2 border-black flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-[32px] text-[#1f1a1c]">{card.icon}</span>
              </div>
              <h2 className="font-barlow text-[32px] font-bold text-[#1f1a1c] leading-tight m-0">{card.title}</h2>
              <p className="font-nunito text-[16px] text-[#504348] m-0">{card.subtitle}</p>
            </motion.button>
          ))}
        </div>
      </div>
    </main>
  );
}

/* ─── Random Site Picker (no repeats) ───────────────────── */
function getRandomSite(tab: Tab | null, lastDomain: string | null) {
  let pool = sites;
  if (tab) {
    pool = sites.filter((s) => s.tab === tab);
  }
  if (pool.length === 0) return null;
  if (pool.length === 1) return pool[0];

  let pick = pool[Math.floor(Math.random() * pool.length)];
  while (pick.domain === lastDomain) {
    pick = pool[Math.floor(Math.random() * pool.length)];
  }
  return pick;
}

/* ─── Site Card Component ────────────────────────────── */
function SiteCard({ site, isFavorite, onToggleFavorite }: { site: any, isFavorite: boolean, onToggleFavorite: () => void }) {
  return (
    <div className="bg-white border-2 border-black rounded-[24px] p-6 md:p-8 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:scale-[1.01] transition-all duration-300 ease-[cubic-bezier(0.68,-0.6,0.32,1.6)] flex flex-col gap-6 relative group/card">
      <button 
        onClick={(e) => {
          e.stopPropagation();
          onToggleFavorite();
        }}
        className="absolute top-6 right-6 md:top-8 md:right-8 w-12 h-12 flex items-center justify-center rounded-xl transition-colors cursor-pointer group z-10 hover:bg-[#fff8f8] border-2 border-transparent hover:border-black"
        aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
      >
        <span
          className="material-symbols-outlined text-[40px] text-white group-hover:scale-110 transition-transform"
          style={{
            color: isFavorite ? 'yellow' : 'white',
            fontVariationSettings: isFavorite ? '"FILL" 1' : '"FILL" 0',
            textShadow: isFavorite ? '2px 2px 0px #1f1a1c, -1px -1px 0px #1f1a1c, 1px -1px 0px #1f1a1c, -1px 1px 0px #1f1a1c, 1px 1px 0px #1f1a1c' : '1px 1px 0px #1f1a1c, -1px -1px 0px #1f1a1c, 1px -1px 0px #1f1a1c, -1px 1px 0px #1f1a1c, 1px 1px 0px #1f1a1c'
          }}
        >
          star
        </span>
      </button>

      <div className="flex items-start gap-5 md:gap-6 border-b-2 border-black pb-6 pr-14 md:pr-16">
        <div className="w-[64px] h-[64px] md:w-[72px] md:h-[72px] rounded-2xl bg-[#f7b3d2] border-2 border-black flex items-center justify-center shrink-0 p-2 overflow-hidden">
          <img 
            className="w-full h-full object-contain mix-blend-multiply" 
            src={getFaviconUrl(site.domain)} 
            alt={`${site.name} logo`} 
          />
        </div>
        <div className="flex-1 flex flex-col pt-1">
          <h2 className="font-barlow text-[28px] md:text-[32px] font-bold leading-tight m-0 text-[#1f1a1c] mb-1">{site.name}</h2>
          <a className="font-dm text-[14px] font-medium text-[#827379] hover:underline hover:text-black transition-colors inline-block" href={site.url} target="_blank" rel="noopener noreferrer">{site.domain}</a>
          <p className="font-nunito text-[16px] text-[#504348] mt-3 leading-[1.5]">{site.description}</p>
        </div>
      </div>
      <div className="flex justify-start">
        <a 
          className="bg-[#1f1a1c] text-white font-barlow text-[18px] font-bold uppercase rounded-full px-8 py-3 border-2 border-black hover:scale-105 active:scale-95 transition-transform flex items-center gap-2" 
          href={site.url} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Open Site
          <span className="material-symbols-outlined text-[20px]">arrow_outward</span>
        </a>
      </div>
    </div>
  );
}

/* ─── Site Recommendation Canvas ────────────────────────── */
function RecommendationCanvas({ site, onNext, isFavorite, onToggleFavorite }: { site: any, onNext: () => void, isFavorite: boolean, onToggleFavorite: () => void }) {
  if (!site) return null;

  return (
    <main className="flex-1 flex flex-col items-center justify-center p-6 w-full pt-24 md:pt-6">
      <AnimatePresence mode="wait">
        <motion.div
          key={site.domain + site.name}
          className="w-full max-w-[580px] mx-auto mt-8 md:mt-0"
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -16, scale: 0.98 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <SiteCard site={site} isFavorite={isFavorite} onToggleFavorite={onToggleFavorite} />
        </motion.div>
      </AnimatePresence>

      <div className="mt-12 flex justify-center w-full">
        <button 
          onClick={onNext}
          className="bg-[#f7b3d2] text-[#1f1a1c] font-barlow rounded-full border-2 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 active:shadow-none active:translate-x-[5px] active:translate-y-[5px] transition-all duration-300 ease-[cubic-bezier(0.68,-0.6,0.32,1.6)] flex items-center px-12 py-5 text-[28px] font-bold uppercase tracking-wider gap-3"
        >
          Next 
          <span className="material-symbols-outlined text-[32px]">arrow_forward</span>
        </button>
      </div>
    </main>
  );
}

/* ─── Favorites Canvas ──────────────────────────────────── */
function FavoritesCanvas({ favorites, toggleFavorite }: { favorites: string[], toggleFavorite: (domain: string) => void }) {
  const favoriteSites = sites.filter(s => favorites.includes(s.domain));

  if (favoriteSites.length === 0) {
    return (
      <main className="flex-1 flex flex-col items-center justify-center p-6 w-full pt-10">
        <div className="text-center max-w-md mx-auto">
          <div className="w-24 h-24 bg-white border-2 border-black rounded-full mx-auto mb-6 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <span className="material-symbols-outlined text-[48px] text-[#f7b3d2]">star</span>
          </div>
          <h2 className="font-barlow text-[36px] font-bold text-[#1f1a1c] uppercase mb-4 leading-tight">No favorites yet!</h2>
          <p className="font-nunito text-[18px] text-[#504348]">Go explore and star some cool sites to see them here.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-1 w-full max-w-5xl mx-auto px-6 py-10 pt-10 flex flex-col items-center gap-10">
      <div className="text-center">
        <div className="bg-[#f7b3d2] text-[#1f1a1c] border-2 border-black rounded-full px-10 py-4 font-barlow font-bold text-[36px] md:text-[48px] leading-none uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] inline-flex items-center gap-3">
          <span className="material-symbols-outlined text-[36px] md:text-[48px]" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
          Your Favs
        </div>
      </div>
      <div className="w-full flex flex-col gap-8 items-center pb-20">
        <AnimatePresence>
          {favoriteSites.map((site, i) => (
            <motion.div
              key={site.domain}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, height: 0, marginBottom: 0, overflow: 'hidden' }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-[580px]"
            >
              <SiteCard 
                site={site} 
                isFavorite={true} 
                onToggleFavorite={() => toggleFavorite(site.domain)} 
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </main>
  );
}

/* ─── App Root ──────────────────────────────────────────── */
export default function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const { favorites, toggleFavorite, isFavorite } = useFavorites();

  const isLanding = location.pathname === '/' || location.pathname === '/landing';
  let activeTab: string = 'home';
  if (location.pathname.startsWith('/app/')) {
    const tabStr = location.pathname.split('/')[2];
    if (['timepass', 'student', 'builder', 'fav'].includes(tabStr)) {
      activeTab = tabStr;
    }
  } else if (location.pathname === '/app') {
    activeTab = 'home';
  }

  const [lastDomain, setLastDomain] = useState<string | null>(null);
  const [currentSite, setCurrentSite] = useState<any>(null);

  // Generate a random site if accessed directly via URL or category mismatch (e.g. back button)
  useEffect(() => {
    if (!isLanding && activeTab !== 'home' && activeTab !== 'fav') {
      if (!currentSite || currentSite.tab !== activeTab) {
        const next = getRandomSite(activeTab as Tab, null);
        if (next) setCurrentSite(next);
      }
    }
  }, [isLanding, activeTab, currentSite]);

  const handleStart = () => {
    setCurrentSite(null);
    navigate('/app');
  };

  const handleSelectTab = useCallback((tab: string) => {
    if (tab === 'home') {
      setCurrentSite(null);
      navigate('/app');
    } else if (tab === 'fav') {
      navigate('/app/fav');
    } else {
      const next = getRandomSite(tab as Tab, null);
      if (next) {
        setLastDomain(null);
        setCurrentSite(next);
        navigate(`/app/${tab}`);
      }
    }
  }, [navigate]);

  const handleNextSite = useCallback(() => {
    const next = getRandomSite(activeTab === 'home' ? null : activeTab as Tab, lastDomain);
    if (next) {
      setLastDomain(currentSite?.domain ?? null);
      setCurrentSite(next);
      navigate(`/app/${next.tab}`);
    }
  }, [activeTab, lastDomain, currentSite, navigate]);

  return (
    <AnimatePresence mode="wait">
      {isLanding ? (
        <motion.div
          key="landing"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="w-full"
        >
          <LandingPage onBoredClick={handleStart} onTitleClick={() => navigate('/')} />
        </motion.div>
      ) : (
        <motion.div
          key="app"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-animated-gradient min-h-screen text-[#1f1a1c] font-nunito flex overflow-hidden selection:bg-[#f7b3d2] selection:text-[#76425c] w-full"
        >
          {activeTab !== 'home' && (
            <SideNav activeTab={activeTab} onTabSwitch={handleSelectTab} />
          )}
          
          <div className="flex-1 flex flex-col h-screen overflow-y-auto relative pb-32 md:pb-0">
            {activeTab !== 'fav' && (
              <TopHeader 
                title={activeTab === 'home' ? "Boredom Buster" : `Vibe: ${activeTab}`} 
                onTitleClick={() => {
                  setCurrentSite(null);
                  navigate('/');
                }}
              />
            )}
            
            <div className="flex-1 flex flex-col">
              <AnimatePresence mode="wait">
                {activeTab === 'home' || (!currentSite && activeTab !== 'fav') ? (
                  <motion.div
                    key="vibe-picker"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="flex-1 flex flex-col"
                  >
                    <PickYourVibe onSelectTab={handleSelectTab} />
                  </motion.div>
                ) : activeTab === 'fav' ? (
                  <motion.div
                    key="favorites"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="flex-1 flex flex-col"
                  >
                    <FavoritesCanvas favorites={favorites} toggleFavorite={toggleFavorite} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="recommendation"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="flex-1 flex flex-col"
                  >
                    <RecommendationCanvas 
                      site={currentSite} 
                      onNext={handleNextSite} 
                      isFavorite={isFavorite(currentSite.domain)}
                      onToggleFavorite={() => toggleFavorite(currentSite.domain)}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {activeTab !== 'home' && (
            <BottomNav activeTab={activeTab} onTabSwitch={handleSelectTab} />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
