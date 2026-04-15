import { Monitor, Clock, ArrowRight, Star, Shield, Zap } from 'lucide-react';

function App() {
  const handleCheckout = () => {
    window.open('https://seguro.compragarantidas.shop/api/public/shopify?product=2989189174421&store=29891', '_blank');
  };

  return (
    <div className="min-h-screen bg-[#111111] overflow-hidden relative">
      {/* Background image */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/3434511_1_17647958816930a5e92be17.webp"
          alt=""
          className="w-full h-full object-cover object-left"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, transparent 30%, rgba(17,17,17,0.5) 55%, rgba(17,17,17,0.92) 75%, #111111 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-16">
          <div className="flex justify-end">
            <div className="w-full max-w-xl">
              {/* Logo */}
              <div className="mb-8">
                <img
                  src="/3434511_1_17647958816930a5e92c116538220758.png"
                  alt="Intra - Antes do Leilão"
                  className="h-14 w-auto"
                />
              </div>

              {/* Headline */}
              <h1 className="text-white font-black text-4xl lg:text-5xl leading-[1.1] mb-6">
                Aprenda a comprar carros{' '}
                <span className="text-[#C9933A]">antes do leilão</span>{' '}
                pagando de 15% a 30% da FIPE.
              </h1>

              {/* Badges */}
              <div className="flex flex-wrap items-center gap-3 mb-10">
                <div className="flex items-center gap-2 text-white text-sm font-medium">
                  <Clock className="w-4 h-4 text-white opacity-80" />
                  <span>Próxima Segunda</span>
                </div>
                <div className="flex items-center gap-2 bg-blue-600 text-white text-sm font-semibold px-4 py-1.5 rounded">
                  <Monitor className="w-4 h-4" />
                  <span>As 20h ao vivo/online</span>
                </div>
              </div>

              {/* Price & CTA Block */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-7 backdrop-blur-sm">
                <div className="mb-2 text-white/60 text-sm font-medium uppercase tracking-widest">
                  Acesso completo ao curso
                </div>

                <div className="flex items-end gap-2 mb-1">
                  <span className="text-white/50 text-lg line-through">R$ 197,00</span>
                  <span className="text-[#C9933A] text-xs font-bold bg-[#C9933A]/10 px-2 py-0.5 rounded-full border border-[#C9933A]/30 mb-1">
                    59% OFF
                  </span>
                </div>

                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-white text-xl font-semibold">por apenas</span>
                  <span className="text-white font-black text-5xl ml-2">
                    R${' '}
                    <span className="text-[#C9933A]">59</span>
                    <span className="text-white text-3xl">,90</span>
                  </span>
                </div>

                <button
                  onClick={handleCheckout}
                  className="w-full bg-[#C9933A] hover:bg-[#b8832e] active:bg-[#a6751f] text-black font-black text-lg uppercase tracking-wider py-4 px-8 rounded-xl transition-all duration-200 flex items-center justify-center gap-3 shadow-lg shadow-[#C9933A]/20 hover:shadow-[#C9933A]/40 hover:scale-[1.02]"
                >
                  QUERO MEU ACESSO AGORA
                  <ArrowRight className="w-5 h-5" />
                </button>

                <p className="text-center text-white/40 text-xs mt-3 flex items-center justify-center gap-1">
                  <Shield className="w-3 h-3" />
                  Pagamento 100% seguro &bull; Acesso imediato
                </p>
              </div>

              {/* Trust signals */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                {[
                  { icon: Star, label: '4.9 de avaliação', sub: 'Mais de 2.000 alunos' },
                  { icon: Zap, label: 'Acesso imediato', sub: 'Após confirmação' },
                  { icon: Shield, label: 'Garantia 7 dias', sub: 'Devolução total' },
                ].map(({ icon: Icon, label, sub }) => (
                  <div key={label} className="flex flex-col items-center text-center gap-1">
                    <Icon className="w-5 h-5 text-[#C9933A]" />
                    <span className="text-white text-xs font-semibold leading-tight">{label}</span>
                    <span className="text-white/40 text-[10px]">{sub}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
