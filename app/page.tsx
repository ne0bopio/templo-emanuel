import { Phone, MapPin, Clock, MessageCircle, Music, Users, Baby, HandHeart } from "lucide-react";

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.5-3.91 3.78-3.91 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.57v1.88h2.78l-.45 2.9h-2.33V22c4.78-.76 8.43-4.92 8.43-9.94Z" />
    </svg>
  );
}
import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import { PaletteSwitcher } from "@/components/PaletteSwitcher";
import { Photo, FlagRibbon } from "@/components/Photo";

const ADDRESS = "1001 82nd St, North Bergen, NJ 07047";
const PHONE = "(201) 590-9800";
const PHONE_INTL = "12015909800";
const FACEBOOK = "https://www.facebook.com/temploemanuelnbnj";

// TODO(Juan): confirmar horarios reales con la iglesia en la visita
const HORARIOS = [
  { dia: "Domingo", nombre: "Culto de Adoración", hora: "11:00 AM" },
  { dia: "Miércoles", nombre: "Estudio Bíblico y Oración", hora: "7:30 PM" },
  { dia: "Viernes", nombre: "Culto de Jóvenes", hora: "7:30 PM" },
];

const MINISTERIOS = [
  { icon: Music, nombre: "Alabanza", desc: "Adoración que une voces de todo un continente." },
  { icon: Users, nombre: "Jóvenes", desc: "Una nueva generación creciendo en fe y propósito." },
  { icon: Baby, nombre: "Niños", desc: "Los más pequeños aprenden de Dios a su manera." },
  { icon: HandHeart, nombre: "Intercesión", desc: "Oramos unos por otros, como una sola familia." },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* ── HERO ── */}
        <section id="inicio" className="relative overflow-hidden">
          <div
            className="absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% -10%, var(--accent-soft), transparent 70%)",
            }}
          />
          <div className="max-w-5xl mx-auto px-6 pt-40 pb-16 sm:pt-48 sm:pb-24 text-center">
            <Reveal>
              <p className="text-[13px] font-bold tracking-[0.2em] uppercase text-accent mb-6">
                Iglesia del Nazareno · North Bergen, NJ
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="font-display font-semibold text-5xl sm:text-7xl tracking-tight text-ink leading-[1.05]">
                Templo Emanuel
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-lg sm:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
                Una casa para todas las naciones. Somos una familia hispana que
                adora a Dios en español, con las puertas abiertas para ti y los
                tuyos.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="#horarios"
                  className="px-7 py-3.5 rounded-xl font-bold text-on-accent bg-gradient-to-r from-accent to-accent-deep hover:shadow-[0_8px_24px_rgba(0,0,0,0.2)] hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  Ver horarios
                </a>
                <a
                  href="#ubicacion"
                  className="px-7 py-3.5 rounded-xl font-bold text-ink bg-surface border border-accent-soft hover:border-accent transition-all"
                >
                  Cómo llegar
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.4}>
            <div className="max-w-5xl mx-auto px-6 pb-20">
              <Photo
                name="hero.jpg"
                alt="Congregación de Templo Emanuel durante el culto, con banderas de países latinoamericanos"
                className="rounded-3xl h-64 sm:h-96 w-full"
                label="foto · hero.jpg (santuario con banderas)"
              />
            </div>
          </Reveal>
        </section>

        <FlagRibbon />

        {/* ── HORARIOS ── */}
        <section id="horarios" className="bg-surface">
          <div className="max-w-5xl mx-auto px-6 py-20 sm:py-28">
            <Reveal>
              <h2 className="font-display font-semibold text-3xl sm:text-5xl text-ink tracking-tight">
                Horarios de servicio
              </h2>
              <p className="mt-4 text-muted text-lg">
                Ven como estés — aquí siempre hay un lugar para ti.
              </p>
            </Reveal>
            <div className="mt-12 grid sm:grid-cols-3 gap-4">
              {HORARIOS.map((h, i) => (
                <Reveal key={h.dia} delay={i * 0.1}>
                  <div className="rounded-2xl bg-bg border border-accent-soft p-7 h-full hover:border-accent transition-colors">
                    <Clock className="text-accent mb-5" size={22} aria-hidden="true" />
                    <p className="font-display font-semibold text-2xl text-ink">{h.dia}</p>
                    <p className="mt-1 text-muted font-medium">{h.nombre}</p>
                    <p className="mt-4 text-accent font-bold text-lg">{h.hora}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.3}>
              <p className="mt-6 text-sm text-muted">
                * Horarios por confirmar — llámanos al{" "}
                <a href={`tel:+${PHONE_INTL}`} className="font-semibold text-accent underline underline-offset-2">
                  {PHONE}
                </a>{" "}
                antes de tu primera visita.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── NOSOTROS ── */}
        <section id="nosotros">
          <div className="max-w-5xl mx-auto px-6 py-20 sm:py-28">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <Reveal>
                <div>
                  <h2 className="font-display font-semibold text-3xl sm:text-5xl text-ink tracking-tight">
                    Una iglesia de todas las naciones
                  </h2>
                  <p className="mt-6 text-muted text-lg leading-relaxed">
                    En nuestro santuario ondean las banderas de los países de
                    donde venimos: México, El Salvador, Colombia, Perú,
                    Guatemala, Puerto Rico y muchos más. Distintos acentos, una
                    misma fe.
                  </p>
                  <p className="mt-4 text-muted text-lg leading-relaxed">
                    Somos parte de la Iglesia del Nazareno, y creemos que la
                    iglesia es una familia: un lugar donde se te conoce por tu
                    nombre y se te recibe con un abrazo.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.15}>
                <Photo
                  name="congregacion.jpg"
                  alt="Miembros de la congregación en oración"
                  className="rounded-3xl h-72 sm:h-96 w-full"
                  label="foto · congregacion.jpg"
                />
              </Reveal>
            </div>

            <Reveal delay={0.2}>
              <blockquote className="mt-20 text-center max-w-3xl mx-auto">
                <p className="font-display text-2xl sm:text-4xl text-ink italic leading-snug">
                  “Jehová dará poder a su pueblo; Jehová bendecirá a su pueblo
                  con paz.”
                </p>
                <cite className="mt-5 block text-accent font-bold tracking-[0.15em] uppercase text-sm not-italic">
                  Salmo 29:11
                </cite>
              </blockquote>
            </Reveal>
          </div>
        </section>

        {/* ── MINISTERIOS ── */}
        <section id="ministerios" className="bg-surface">
          <div className="max-w-5xl mx-auto px-6 py-20 sm:py-28">
            <Reveal>
              <h2 className="font-display font-semibold text-3xl sm:text-5xl text-ink tracking-tight">
                Ministerios
              </h2>
              <p className="mt-4 text-muted text-lg">
                Hay un lugar para servir y crecer, a cualquier edad.
              </p>
            </Reveal>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {MINISTERIOS.map((m, i) => (
                <Reveal key={m.nombre} delay={i * 0.08}>
                  <div className="rounded-2xl bg-bg border border-accent-soft p-6 h-full">
                    <m.icon className="text-accent mb-4" size={24} aria-hidden="true" />
                    <p className="font-display font-semibold text-xl text-ink">{m.nombre}</p>
                    <p className="mt-2 text-muted leading-relaxed text-[15px]">{m.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── UBICACIÓN ── */}
        <section id="ubicacion">
          <div className="max-w-5xl mx-auto px-6 py-20 sm:py-28">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <Reveal>
                <div>
                  <h2 className="font-display font-semibold text-3xl sm:text-5xl text-ink tracking-tight">
                    Visítanos
                  </h2>
                  <div className="mt-8 space-y-5">
                    <div className="flex items-start gap-4">
                      <MapPin className="text-accent mt-1 shrink-0" size={22} aria-hidden="true" />
                      <div>
                        <p className="font-bold text-ink">{ADDRESS}</p>
                        <p className="text-muted text-[15px] mt-0.5">
                          Cerca de la esquina de 82nd St y 5th Ave
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Phone className="text-accent mt-1 shrink-0" size={22} aria-hidden="true" />
                      <a href={`tel:+${PHONE_INTL}`} className="font-bold text-ink hover:text-accent transition-colors">
                        {PHONE}
                      </a>
                    </div>
                  </div>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(ADDRESS)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-block px-7 py-3.5 rounded-xl font-bold text-on-accent bg-gradient-to-r from-accent to-accent-deep hover:shadow-[0_8px_24px_rgba(0,0,0,0.2)] hover:scale-[1.02] transition-all"
                  >
                    Abrir en Google Maps
                  </a>
                </div>
              </Reveal>
              <Reveal delay={0.15}>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(ADDRESS)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ver mapa de 1001 82nd St en Google Maps"
                  className="block rounded-3xl overflow-hidden border border-accent-soft h-72 sm:h-96 relative group"
                >
                  {/* Stylized street map of the 82nd St / 5th Ave corner */}
                  <svg
                    viewBox="0 0 400 300"
                    className="w-full h-full"
                    preserveAspectRatio="xMidYMid slice"
                    aria-hidden="true"
                  >
                    <rect width="400" height="300" fill="var(--surface)" />
                    {/* street grid */}
                    <g stroke="var(--bg)" strokeWidth="14">
                      <line x1="0" y1="60" x2="400" y2="52" />
                      <line x1="0" y1="150" x2="400" y2="142" />
                      <line x1="0" y1="240" x2="400" y2="232" />
                      <line x1="80" y1="0" x2="88" y2="300" />
                      <line x1="200" y1="0" x2="208" y2="300" />
                      <line x1="320" y1="0" x2="328" y2="300" />
                    </g>
                    <g stroke="var(--accent-soft)" strokeWidth="1.5" opacity="0.9">
                      <line x1="0" y1="60" x2="400" y2="52" />
                      <line x1="0" y1="150" x2="400" y2="142" />
                      <line x1="0" y1="240" x2="400" y2="232" />
                      <line x1="80" y1="0" x2="88" y2="300" />
                      <line x1="200" y1="0" x2="208" y2="300" />
                      <line x1="320" y1="0" x2="328" y2="300" />
                    </g>
                    {/* street labels */}
                    <text x="16" y="140" fontSize="11" fill="var(--muted)" fontFamily="var(--font-albert)" fontWeight="600">82nd St</text>
                    <text x="214" y="20" fontSize="11" fill="var(--muted)" fontFamily="var(--font-albert)" fontWeight="600">5th Ave</text>
                    {/* church block */}
                    <rect x="212" y="98" width="42" height="34" rx="4" fill="var(--accent-soft)" />
                    {/* pin */}
                    <g transform="translate(233, 96)">
                      <path
                        d="M0 -34 C -13 -34 -22 -25 -22 -13 C -22 -2 0 14 0 14 C 0 14 22 -2 22 -13 C 22 -25 13 -34 0 -34 Z"
                        fill="var(--accent)"
                      />
                      <circle cx="0" cy="-14" r="8" fill="var(--on-accent)" />
                      <path
                        d="M-4 -11 L-4 -16 L0 -19.5 L4 -16 L4 -11 Z"
                        fill="var(--accent)"
                      />
                    </g>
                  </svg>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl bg-capsule/90 backdrop-blur px-5 py-3.5">
                    <div>
                      <p className="text-white font-bold text-sm">Templo Emanuel</p>
                      <p className="text-white/60 text-xs mt-0.5">{ADDRESS}</p>
                    </div>
                    <span className="text-white/80 text-xs font-bold group-hover:text-white transition-colors shrink-0">
                      Ver mapa →
                    </span>
                  </div>
                </a>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── CONTACTO / FOOTER ── */}
        <footer id="contacto" className="bg-capsule text-white">
          <FlagRibbon />
          <div className="max-w-5xl mx-auto px-6 py-16 sm:py-20">
            <div className="text-center">
              <h2 className="font-display font-semibold text-3xl sm:text-4xl tracking-tight">
                Te esperamos este domingo
              </h2>
              <p className="mt-4 text-white/60 text-lg max-w-xl mx-auto">
                ¿Tienes preguntas o una petición de oración? Escríbenos — nos
                encantará conocerte.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/${PHONE_INTL}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-on-accent bg-gradient-to-r from-accent to-accent-deep hover:scale-[1.02] transition-all"
                >
                  <MessageCircle size={18} aria-hidden="true" /> WhatsApp
                </a>
                <a
                  href={FACEBOOK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-white/[0.08] border border-white/[0.12] hover:bg-white/[0.14] transition-all"
                >
                  <FacebookIcon /> Facebook
                </a>
                <a
                  href={`tel:+${PHONE_INTL}`}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-white/[0.08] border border-white/[0.12] hover:bg-white/[0.14] transition-all"
                >
                  <Phone size={18} aria-hidden="true" /> {PHONE}
                </a>
              </div>
            </div>
            <div className="mt-14 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/40">
              <p>© {new Date().getFullYear()} Templo Emanuel · Iglesia del Nazareno · North Bergen, NJ</p>
              <p>
                Sitio hecho con ♥ para la comunidad por{" "}
                <a
                  href="https://neobop.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white font-semibold transition-colors"
                >
                  neobop
                </a>
              </p>
            </div>
          </div>
        </footer>
      </main>
      <PaletteSwitcher />
    </>
  );
}
