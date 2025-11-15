import { useMemo } from 'react'
import { ArrowRight, Mail, Github, Linkedin, Terminal, Cog, Rocket, Workflow, BookOpen } from 'lucide-react'

function Stat({ label, value }) {
  return (
    <div className="text-center">
      <div className="text-3xl font-semibold text-gray-900">{value}</div>
      <div className="text-xs uppercase tracking-wider text-gray-500">{label}</div>
    </div>
  )
}

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-gray-200 bg-white/70 px-3 py-1 text-xs text-gray-700 backdrop-blur-sm">
      {children}
    </span>
  )
}

function SectionTitle({ kicker, title, subtitle }) {
  return (
    <div className="max-w-3xl mx-auto text-center mb-12">
      {kicker && (
        <div className="inline-block rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-xs font-medium tracking-wide mb-4">
          {kicker}
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-gray-600 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )}

export default function App() {
  const tools = useMemo(() => [
    'Next.js', 'Python', 'Go', 'Flutter', 'n8n', 'TypeScript', 'PostgreSQL', 'MongoDB', 'CI/CD', 'Docker'
  ], [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 text-gray-900">
      {/* Navigation */}
      <header className="sticky top-0 z-40 border-b border-slate-200/60 bg-white/80 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-blue-600" />
            <span className="font-medium tracking-tight">Dan Habib</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
            <a href="#apropos" className="hover:text-gray-900 transition-colors">Présentation</a>
            <a href="#expertise" className="hover:text-gray-900 transition-colors">Expertise</a>
            <a href="#projets" className="hover:text-gray-900 transition-colors">Études de cas</a>
            <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
          </nav>
          <a href="#contact" className="inline-flex items-center gap-2 text-sm font-medium text-white bg-gray-900 hover:bg-black px-4 py-2 rounded-md transition-colors">
            Me contacter <ArrowRight size={16} />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="apropos" className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute -top-32 -right-24 h-80 w-80 rounded-full bg-blue-100 blur-3xl opacity-70" />
          <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-indigo-100 blur-3xl opacity-70" />
        </div>
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs font-medium text-blue-700 bg-blue-50 rounded-full px-3 py-1 mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
              Ingénieur logiciel polyvalent
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] tracking-[-0.02em] text-gray-900">
              Des systèmes sobres, fiables et efficients — de la conception au déploiement
            </h1>
            <p className="mt-5 text-lg text-gray-600 leading-relaxed">
              Je conçois et réalise des logiciels robustes, mesurables et évolutifs. Maîtrise de Next.js, Python, Go et Flutter, complétée par l’orchestration d’automatisations avancées via n8n. Une approche guidée par la clarté, la rigueur et la valeur métier.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Pill>Architecture bout-en-bout</Pill>
              <Pill>API et intégrations</Pill>
              <Pill>Observabilité</Pill>
              <Pill>CI/CD</Pill>
              <Pill>Sécurité pragmatique</Pill>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#contact" className="inline-flex items-center gap-2 bg-gray-900 hover:bg-black text-white px-5 py-3 rounded-md text-sm font-medium transition-colors">
                Discuter d’un projet
                <ArrowRight size={16} />
              </a>
              <div className="flex items-center gap-3">
                <a className="p-2 rounded-md border border-gray-200 hover:bg-gray-50" href="#" aria-label="LinkedIn"><Linkedin size={18} /></a>
                <a className="p-2 rounded-md border border-gray-200 hover:bg-gray-50" href="#" aria-label="GitHub"><Github size={18} /></a>
                <a className="p-2 rounded-md border border-gray-200 hover:bg-gray-50" href="#" aria-label="E-mail"><Mail size={18} /></a>
              </div>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="grid grid-cols-3 gap-6">
                <Stat label="Projets supervisés" value="20+" />
                <Stat label="Automatisations" value="50+" />
                <Stat label="Technologies" value="10+" />
              </div>
              <div className="mt-6 text-sm text-gray-600 leading-relaxed">
                « Chercher la justesse avant la brillance, la preuve avant l’opinion. »
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section id="expertise" className="py-20 border-t border-slate-200/60">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle
            kicker="Expertise"
            title="Intervenir sur toute la chaîne logicielle"
            subtitle="Conception, développement, intégration, optimisation et déploiement — une même exigence de fiabilité et de clarté."
          />

          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3 text-gray-900">
                <Terminal size={18} />
                <h3 className="font-semibold">Conception & Développement</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Modélisation sobre des domaines, choix d’architectures explicables, implémentations testables et documentées. Maîtrise de Next.js, Python, Go et Flutter au service de produits utiles et durables.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3 text-gray-900">
                <Workflow size={18} />
                <h3 className="font-semibold">Intégration & Automatisation n8n</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Flux idempotents, observables et gouvernés: webhooks, intégrations multi-API, files logiques, reprises sur incident. Automatisations qui réduisent la charge manuelle tout en augmentant la qualité.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3 text-gray-900">
                <Cog size={18} />
                <h3 className="font-semibold">Opérations & Performance</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                CI/CD fiable, monitoring utile, sécurité pragmatique, contrôle des coûts et optimisation guidée par la donnée. Déploiements reproductibles et réversibles.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {tools.map(t => (
              <span key={t} className="text-xs px-3 py-1 rounded-full border border-gray-200 bg-white text-gray-700">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section id="projets" className="py-20 border-t border-slate-200/60">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle
            kicker="Études de cas"
            title="Automatisations à fort impact"
            subtitle="Des systèmes conçus pour absorber la complexité réelle: contraintes réglementaires, hétérogénéité des plateformes, exigences de fiabilité."
          />

          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-700 bg-blue-50 w-fit px-3 py-1 rounded-full text-xs font-medium mb-3">Covid-19</div>
              <h3 className="text-xl font-semibold text-gray-900">Gestion automatisée des tests de dépistage pour un réseau d’une vingtaine de pharmacies</h3>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                Conçu en pleine pandémie: orchestration n8n de la planification, confirmations, rappels et rapports. Normalisation stricte des données, contrôles d’unicité, webhooks déclencheurs et reprises automatiques.
              </p>
              <ul className="mt-4 text-sm text-gray-700 space-y-2 list-disc list-inside">
                <li>Absorption des pics de demande et réduction des doublons</li>
                <li>Conformité et traçabilité des opérations</li>
                <li>Tableaux de bord de volumétrie et no-show</li>
              </ul>
              <div className="mt-4 text-sm text-gray-900 font-medium">Valeur: charge administrative réduite, fiabilité accrue, adaptation rapide aux règles changeantes.</div>
            </article>

            <article className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 text-indigo-700 bg-indigo-50 w-fit px-3 py-1 rounded-full text-xs font-medium mb-3">Immobilier</div>
              <h3 className="text-xl font-semibold text-gray-900">Automatisation du postage et de la publication d’annonces pour BLG Immobilier</h3>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                Normalisation des contenus, génération de variantes conformes aux plateformes, publication séquencée et idempotente avec gestion des quotas et reprises.
              </p>
              <ul className="mt-4 text-sm text-gray-700 space-y-2 list-disc list-inside">
                <li>Hétérogénéité des formats et politiques absorbée</li>
                <li>Contrôle qualité des médias et métadonnées</li>
                <li>Consolidation des retours et mesures de performance</li>
              </ul>
              <div className="mt-4 text-sm text-gray-900 font-medium">Valeur: time-to-market accéléré, homogénéité des contenus, réduction des tâches répétitives.</div>
            </article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-xl border border-gray-200 bg-gradient-to-r from-slate-900 to-black text-white p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-semibold">Ouvert aux opportunités</h3>
              <p className="mt-2 text-white/80 max-w-2xl">
                Développement web et logiciel, ingénierie produit, automatisation et intégration IA. Conception de solutions rationnelles, fiables et efficientes, au service d’objectifs mesurables.
              </p>
            </div>
            <a href="#contact" className="inline-flex items-center gap-2 bg-white text-gray-900 hover:bg-gray-100 px-5 py-3 rounded-md text-sm font-medium transition-colors">
              Entrer en contact <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 border-t border-slate-200/60">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle
            kicker="Contact"
            title="Discutons de vos besoins"
            subtitle="Une intervention commence par un diagnostic précis, un plan réaliste et des critères de réussite mesurables."
          />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-2">Me laisser un message</h4>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
                <input className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Nom" />
                <input className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Email" type="email" />
                <textarea className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm h-28 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Votre message" />
                <button className="inline-flex items-center gap-2 bg-gray-900 hover:bg-black text-white px-4 py-2 rounded-md text-sm font-medium">
                  Envoyer <ArrowRight size={16} />
                </button>
              </form>
              <p className="text-xs text-gray-500 mt-3">Formulaire démonstratif.</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-3">Coordonnées</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2"><Mail size={16} /> contact@dan-habib.dev</li>
                <li className="flex items-center gap-2"><Linkedin size={16} /> linkedin.com/in/dan-habib</li>
                <li className="flex items-center gap-2"><Github size={16} /> github.com/danhabib</li>
              </ul>
              <div className="mt-6">
                <h5 className="font-medium text-gray-900 mb-2">Documents</h5>
                <div className="flex flex-wrap gap-2">
                  <a className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-md border border-gray-200 hover:bg-gray-50" href="#"><BookOpen size={16} /> CV sur demande</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-10 border-t border-slate-200/60">
        <div className="max-w-6xl mx-auto px-6 text-sm text-gray-600 flex items-center justify-between">
          <span>© {new Date().getFullYear()} Dan Habib — Tous droits réservés</span>
          <a href="/test" className="text-gray-500 hover:text-gray-900">Diagnostic système</a>
        </div>
      </footer>
    </div>
  )
}
