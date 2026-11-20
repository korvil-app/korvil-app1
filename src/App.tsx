import { useEffect, useRef, useState } from 'react';
import {
  baseGh,
  baseRaw,
  sections,
  central,
  drawerGroups,
  sectionItems,
  kaiReply,
  kaiLogo,
  korvilLogo,
  type SectionItem,
} from './data';

type KaiMsg = { id: number; cls: 'msg-user' | 'msg-kai'; text: string; status?: string; typing?: boolean };

function Card({ item, color }: { item: SectionItem; color?: string }) {
  return (
    <a
      href={baseGh + item.path}
      target="_blank"
      rel="noreferrer"
      className="card-hover"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        background: '#0a0a0a',
        border: '1px solid #1a1a1a',
        borderRadius: 12,
        padding: 14,
        textDecoration: 'none',
        color: '#fff',
        minWidth: 0,
      }}
    >
      <span style={{ fontSize: 24, flexShrink: 0 }}>{item.icon}</span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 14, fontWeight: 600 }}>{item.name}</div>
        <div
          style={{
            fontSize: 10,
            color: '#555',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {item.path}
        </div>
      </div>
      <span style={{ color: color || '#333', fontSize: 18, flexShrink: 0 }}>›</span>
    </a>
  );
}

function Grid({ items, color }: { items: SectionItem[]; color?: string }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
        gap: 12,
        maxWidth: 900,
      }}
    >
      {items.map((i) => (
        <Card key={i.name + i.path} item={i} color={color} />
      ))}
    </div>
  );
}

function SectionHeader({ name, tagline, logo, color }: { name: string; tagline: string; logo: string; color: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
      <img
        src={logo}
        style={{ width: 64, height: 64, objectFit: 'contain', borderRadius: '50%', border: `2px solid ${color}` }}
        onError={(e) => ((e.target as HTMLImageElement).style.display = 'none')}
        alt={name}
      />
      <div>
        <h2 style={{ fontSize: 24, fontWeight: 800 }}>{name}</h2>
        <p style={{ color: '#666', fontSize: 13 }}>{tagline}</p>
      </div>
    </div>
  );
}

function CentralView({ goSection }: { goSection: (id: string) => void }) {
  return (
    <div className="fade-in">
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 28, fontWeight: 800 }}>central korvil</h1>
        <p style={{ color: '#666', fontSize: 14, marginTop: 4 }}>
          sistema operacional korvil - acesso total automatico: github + bolt + app
        </p>
      </div>
      <h3 style={{ fontSize: 16, fontWeight: 'bold', color: '#a855f7', marginBottom: 12 }}>
        1. desenvolvimento humano
      </h3>
      <Grid items={central.desenvolvimentohumano} color="#a855f7" />
      <h3 style={{ fontSize: 16, fontWeight: 'bold', color: '#f59e0b', margin: '24px 0 12px' }}>2. negocios</h3>
      <Grid items={central.negocios} color="#f59e0b" />
      <h3 style={{ fontSize: 16, fontWeight: 'bold', color: '#3b82f6', margin: '24px 0 12px' }}>3. servicos</h3>
      <Grid items={central.servicos} color="#3b82f6" />
      <h3 style={{ fontSize: 16, fontWeight: 'bold', color: '#22c55e', margin: '24px 0 12px' }}>4. k.l korvil-loja</h3>
      <Grid items={central.korvilloja} color="#22c55e" />

      <h3 style={{ fontSize: 16, fontWeight: 'bold', color: '#00d4ff', margin: '32px 0 12px' }}>secoes</h3>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: 12,
          maxWidth: 900,
        }}
      >
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => goSection(s.id)}
            className="card-hover"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 8,
              background: '#0a0a0a',
              border: '1px solid #1a1a1a',
              borderRadius: 12,
              padding: 16,
              cursor: 'pointer',
              color: '#fff',
            }}
          >
            <img
              src={s.logo}
              alt={s.name}
              style={{ width: 56, height: 56, objectFit: 'contain', borderRadius: '50%' }}
              onError={(e) => ((e.target as HTMLImageElement).style.display = 'none')}
            />
            <span style={{ fontWeight: 700 }}>{s.name}</span>
            <span style={{ fontSize: 11, color: '#666' }}>{s.tagline}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function SectionView({ id, back }: { id: string; back: () => void }) {
  const s = sections.find((x) => x.id === id);
  if (!s) return null;
  const items = sectionItems(id);
  return (
    <div className="fade-in">
      <button
        onClick={back}
        style={{ color: '#666', background: 'none', border: 'none', cursor: 'pointer', fontSize: 13, marginBottom: 16 }}
      >
        ← central
      </button>
      <SectionHeader name={s.name} tagline={s.tagline} logo={s.logo} color={s.color} />
      <Grid items={items} color={s.color} />
    </div>
  );
}

function KaiModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [msgs, setMsgs] = useState<KaiMsg[]>([
    {
      id: 1,
      cls: 'msg-kai',
      status: 'k-ai - acesso total verificado',
      text: 'ola! sou a k-ai, inventora do ecossistema korvil. tenho acesso total automatico ao github, bolt e app. posso criar lojas, cursos, servicos, sistemas e muito mais. o que voce quer construir hoje?',
    },
  ]);
  const [input, setInput] = useState('');
  const [showSug, setShowSug] = useState(true);
  const msgId = useRef(2);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [msgs]);

  if (!open) return null;

  function send(text: string) {
    const q = text.trim();
    if (!q) return;
    const userId = msgId.current++;
    setMsgs((m) => [...m, { id: userId, cls: 'msg-user', text: q }]);
    setInput('');
    setShowSug(false);
    const typingId = msgId.current++;
    setMsgs((m) => [
      ...m,
      { id: typingId, cls: 'msg-kai', status: 'k-ai verificando github, bolt e app...', text: '', typing: true },
    ]);
    setTimeout(() => {
      setMsgs((m) =>
        m.map((msg) =>
          msg.id === typingId
            ? { ...msg, status: 'k-ai - acesso total verificado', text: kaiReply(q), typing: false }
            : msg
        )
      );
    }, 800);
  }

  const suggestions = [
    { q: 'cria loja korvil', label: 'cria loja korvil' },
    { q: 'mostra os cursos disponiveis', label: 'mostra os cursos' },
    { q: 'quais servicos o sistema k oferece?', label: 'servicos sistema k' },
    { q: 'o que tem no k-alma?', label: 'k-alma' },
  ];

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,.8)',
        zIndex: 70,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '90%',
          maxWidth: 420,
          height: '80vh',
          maxHeight: 600,
          background: '#0a0a0a',
          border: '1px solid #00d4ff',
          borderRadius: 16,
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '12px 16px',
            background: '#111',
            borderBottom: '1px solid #222',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <img src={kaiLogo} style={{ width: 32, height: 32, objectFit: 'contain', borderRadius: '50%' }} alt="k-ai" />
            <span style={{ fontWeight: 'bold', fontSize: 14 }}>k-ai</span>
            <span style={{ fontSize: 10, color: '#00d4ff' }}>online</span>
          </div>
          <button onClick={onClose} style={{ color: '#888', background: 'none', border: 'none', fontSize: 20, cursor: 'pointer' }}>
            ×
          </button>
        </div>
        <div ref={scrollRef} style={{ flex: 1, overflowY: 'auto', padding: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
          {msgs.map((m) => (
            <div key={m.id} className={m.cls}>
              {m.status && <div className="status">{m.status}</div>}
              {m.typing ? (
                <>
                  <span className="typing" />
                  <span className="typing" />
                  <span className="typing" />
                </>
              ) : (
                m.text
              )}
            </div>
          ))}
        </div>
        {showSug && (
          <div style={{ padding: '0 16px 8px', display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {suggestions.map((s) => (
              <button
                key={s.q}
                onClick={() => send(s.q)}
                style={{
                  background: '#0a0a0a',
                  border: '1px solid #00d4ff',
                  color: '#00d4ff',
                  borderRadius: 20,
                  padding: '6px 12px',
                  fontSize: 11,
                  cursor: 'pointer',
                }}
              >
                {s.label}
              </button>
            ))}
          </div>
        )}
        <div style={{ padding: '12px 16px', borderTop: '1px solid #1a1a1a', display: 'flex', gap: 8, background: '#0a0a0a' }}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && send(input)}
            style={{
              flex: 1,
              background: '#000',
              border: '1px solid #222',
              borderRadius: 12,
              padding: '12px 14px',
              color: '#fff',
              fontSize: 14,
              outline: 'none',
            }}
            placeholder="fale com a k-ai..."
          />
          <button
            onClick={() => send(input)}
            style={{ background: '#00d4ff', color: '#000', border: 'none', borderRadius: 12, padding: '0 20px', fontWeight: 'bold', cursor: 'pointer' }}
          >
            enviar
          </button>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [view, setView] = useState<{ type: 'central' } | { type: 'section'; id: string }>({ type: 'central' });
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [kaiOpen, setKaiOpen] = useState(false);
  const [installVisible, setInstallVisible] = useState(false);
  const deferredPrompt = useRef<any>(null);
  const bubbleRef = useRef<HTMLDivElement>(null);
  const drag = useRef<{ startX: number; startY: number; offsetX: number; offsetY: number; pressTime: number; hasMoved: boolean; isDragging: boolean } | null>(null);

  useEffect(() => {
    const onBIP = (e: any) => {
      e.preventDefault();
      deferredPrompt.current = e;
      setInstallVisible(true);
    };
    window.addEventListener('beforeinstallprompt', onBIP);
    return () => window.removeEventListener('beforeinstallprompt', onBIP);
  }, []);

  useEffect(() => {
    const d = new Date();
    const dateEl = document.getElementById('sok-date');
    if (dateEl) {
      dateEl.textContent = d.getDate() + '/' + (d.getMonth() + 1) + ' ' + d.toLocaleDateString('pt-BR', { weekday: 'short' });
    }
  }, []);

  function startDrag(x: number, y: number) {
    const el = bubbleRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    drag.current = { startX: x, startY: y, offsetX: x - rect.left, offsetY: y - rect.top, pressTime: Date.now(), hasMoved: false, isDragging: false };
  }
  function moveDrag(x: number, y: number) {
    const dg = drag.current;
    const el = bubbleRef.current;
    if (!dg || !el) return;
    if (Math.abs(x - dg.startX) > 5 || Math.abs(y - dg.startY) > 5) dg.hasMoved = true;
    if (dg.hasMoved) {
      dg.isDragging = true;
      el.style.animation = 'none';
      const nx = Math.max(16, Math.min(window.innerWidth - 92 - 16, x - dg.offsetX));
      const ny = Math.max(80, Math.min(window.innerHeight - 92 - 16, y - dg.offsetY));
      el.style.left = nx + 'px';
      el.style.top = ny + 'px';
      el.style.right = 'auto';
      el.style.bottom = 'auto';
    }
  }
  function endDrag() {
    const dg = drag.current;
    const el = bubbleRef.current;
    if (!dg || !el) return;
    const elapsed = Date.now() - dg.pressTime;
    if (!dg.hasMoved && elapsed < 2000) setKaiOpen(true);
    if (dg.isDragging) {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + 46;
      const snapX = cx < window.innerWidth / 2 ? 24 : window.innerWidth - 92 - 24;
      const snapY = Math.max(80, Math.min(window.innerHeight - 92 - 24, rect.top + 46));
      el.style.left = snapX + 'px';
      el.style.top = snapY + 'px';
      el.style.animation = 'kaiPulse 2s ease-in-out infinite';
    }
    drag.current = null;
  }

  useEffect(() => {
    const mm = (e: MouseEvent) => drag.current && moveDrag(e.clientX, e.clientY);
    const mu = () => drag.current && endDrag();
    const tm = (e: TouchEvent) => {
      if (drag.current && e.touches[0]) moveDrag(e.touches[0].clientX, e.touches[0].clientY);
    };
    const te = () => drag.current && endDrag();
    document.addEventListener('mousemove', mm);
    document.addEventListener('mouseup', mu);
    document.addEventListener('touchmove', tm, { passive: true });
    document.addEventListener('touchend', te);
    return () => {
      document.removeEventListener('mousemove', mm);
      document.removeEventListener('mouseup', mu);
      document.removeEventListener('touchmove', tm);
      document.removeEventListener('touchend', te);
    };
  }, []);

  async function doInstall() {
    if (!deferredPrompt.current) return;
    deferredPrompt.current.prompt();
    await deferredPrompt.current.userChoice;
    deferredPrompt.current = null;
    setInstallVisible(false);
  }

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 64,
          background: '#000',
          borderBottom: '1px solid #222',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 16px',
          zIndex: 50,
        }}
      >
        <button
          onClick={() => setDrawerOpen(true)}
          style={{ width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#888', background: 'none', border: 'none', cursor: 'pointer', fontSize: 22 }}
          aria-label="menu"
        >
          ☰
        </button>
        <img src={korvilLogo} alt="korvil" style={{ width: 180, height: 48, objectFit: 'contain', display: 'block' }} />
        <div
          style={{ width: 36, height: 36, borderRadius: '50%', background: '#00d4ff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
          aria-label="usuario"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2">
            <circle cx="12" cy="8" r="4" />
            <path d="M4 22c0-4 4-7 8-7s8 3 8 7" />
          </svg>
        </div>
      </header>

      <aside
        style={{
          position: 'fixed',
          left: 0,
          top: 64,
          bottom: 0,
          width: 90,
          background: '#0a0a0a',
          borderRight: '1px solid #1a1a1a',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '16px 0',
          gap: 18,
          zIndex: 40,
          overflowY: 'auto',
        }}
      >
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => setView({ type: 'section', id: s.id })}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, cursor: 'pointer', background: 'none', border: 'none' }}
          >
            <div
              className={s.neon ? 'ktp-neon' : ''}
              style={{
                width: 64,
                height: 64,
                borderRadius: '50%',
                background: '#111',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid #222',
              }}
            >
              <img
                src={s.logo}
                alt={s.name}
                style={{ width: 56, height: 56, objectFit: 'contain', borderRadius: '50%' }}
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
            <span style={{ fontSize: 9, color: '#aaa', textAlign: 'center' }}>{s.name}</span>
          </button>
        ))}
        <div style={{ marginTop: 'auto', marginBottom: 12, textAlign: 'center', width: '100%' }}>
          <div style={{ fontSize: 10, color: '#aaa', fontWeight: 'bold' }}>v-2026</div>
          <div id="sok-date" style={{ fontSize: 10, color: '#666' }} />
        </div>
      </aside>

      <div
        style={{
          position: 'fixed',
          top: 0,
          left: drawerOpen ? 0 : -300,
          width: 280,
          height: '100vh',
          background: '#0a0a0a',
          borderRight: '1px solid #222',
          zIndex: 60,
          transition: 'left .3s',
          overflowY: 'auto',
          paddingTop: 64,
        }}
      >
        <div style={{ padding: 16, borderBottom: '1px solid #222' }}>
          <img src={korvilLogo} style={{ width: 140, height: 38, objectFit: 'contain', display: 'block' }} alt="korvil" />
        </div>
        <div style={{ padding: '8px 0' }}>
          {drawerGroups.map((g) => (
            <div key={g.title}>
              <div
                style={{
                  padding: '8px 16px',
                  fontSize: 10,
                  color: '#555',
                  textTransform: 'uppercase',
                  fontWeight: 'bold',
                  letterSpacing: 1,
                }}
              >
                {g.title}
              </div>
              {g.items.map((item) => (
                <a
                  key={item.name + item.path}
                  href={baseGh + item.path}
                  target="_blank"
                  rel="noreferrer"
                  className="drawer-link"
                  style={{ display: 'block', padding: '10px 16px', color: '#ccc', fontSize: 13, textDecoration: 'none' }}
                >
                  {item.icon} {item.name}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
      {drawerOpen && (
        <div
          onClick={() => setDrawerOpen(false)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,.6)', zIndex: 55 }}
        />
      )}

      <main
        style={{
          marginLeft: 90,
          marginTop: 64,
          minHeight: 'calc(100vh - 64px)',
          background: '#000',
          padding: 24,
          overflowY: 'auto',
          height: 'calc(100vh - 64px)',
        }}
      >
        {view.type === 'central' ? (
          <CentralView goSection={(id) => setView({ type: 'section', id })} />
        ) : (
          <SectionView id={view.id} back={() => setView({ type: 'central' })} />
        )}
      </main>

      <div
        ref={bubbleRef}
        onMouseDown={(e) => startDrag(e.clientX, e.clientY)}
        onTouchStart={(e) => {
          if (e.touches[0]) startDrag(e.touches[0].clientX, e.touches[0].clientY);
          e.preventDefault();
        }}
        id="kaiBubble"
        style={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          width: 92,
          height: 92,
          borderRadius: '50%',
          background: 'radial-gradient(circle,#00d4ff 0%,#0891b2 70%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'grab',
          zIndex: 55,
          touchAction: 'none',
        }}
      >
        <span
          style={{
            position: 'absolute',
            top: -18,
            left: '50%',
            transform: 'translateX(-50%)',
            color: '#00d4ff',
            fontSize: 11,
            fontWeight: 'bold',
            whiteSpace: 'nowrap',
            textShadow: '0 0 4px rgba(0,212,255,.8)',
          }}
        >
          k-ai
        </span>
        <img src={kaiLogo} style={{ width: 92, height: 92, objectFit: 'contain', borderRadius: '50%', display: 'block', padding: 8 }} alt="k-ai" />
      </div>

      <KaiModal open={kaiOpen} onClose={() => setKaiOpen(false)} />

      {installVisible && (
        <button
          onClick={doInstall}
          style={{
            position: 'fixed',
            bottom: 20,
            right: 20,
            zIndex: 99999,
            background: '#00d4ff',
            color: '#000',
            padding: '14px 22px',
            border: 'none',
            borderRadius: 12,
            fontWeight: 'bold',
            boxShadow: '0 4px 15px rgba(0,212,255,0.5)',
          }}
        >
          INSTALAR APP
        </button>
      )}
    </>
  );
}
