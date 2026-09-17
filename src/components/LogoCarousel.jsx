const clients = [
  { name: 'Arnold Sports Festival', src: '/logos/clientes/cliente-01.png' },
  { name: 'Brunx', src: '/logos/clientes/cliente-02.png' },
  { name: 'Deco', src: '/logos/clientes/cliente-03.png' },
  { name: 'Eskala', src: '/logos/clientes/cliente-04.png' },
  { name: 'Farcoo', src: '/logos/clientes/cliente-05.png' },
  { name: 'Hardcore Footwear', src: '/logos/clientes/cliente-06.png' },
  { name: '7 Kings Sneakers', src: '/logos/clientes/cliente-07.png' },
  { name: 'Cliente GOON 08', src: '/logos/clientes/cliente-08.png' },
  { name: 'LM Fashion Lab', src: '/logos/clientes/cliente-09.png', className: 'client-logo-lm' },
  { name: 'Minippy Rio de Janeiro', src: '/logos/clientes/cliente-10.png' },
  { name: 'Ordo', src: '/logos/clientes/cliente-11.png' },
  { name: 'Pangeia', src: '/logos/clientes/cliente-12.png' },
  { name: 'Potere', src: '/logos/clientes/cliente-13.png' },
  { name: 'Rosa Imperial', src: '/logos/clientes/cliente-14.png' },
  { name: 'Cliente GOON 15', src: '/logos/clientes/cliente-15.png' },
  { name: 'SMK Beyond Freedom', src: '/logos/clientes/cliente-16.png' },
  { name: 'Vessel', src: '/logos/clientes/cliente-17.png' },
  { name: 'Zapone', src: '/logos/clientes/cliente-18.png' },
  { name: 'TEE', src: '/logos/clientes/cliente-19.png', compact: true, className: 'client-logo-compact client-logo-tee', width: 139, height: 80 },
  { name: 'Moss Home', src: '/logos/clientes/cliente-20.png', compact: true, width: 120, height: 98 },
  { name: 'Aramodu', src: '/logos/clientes/cliente-21.png', compact: true, width: 232, height: 33 },
  { name: 'Dabeg', src: '/logos/clientes/cliente-22.png', compact: true, width: 221, height: 47 },
  { name: 'Cliente GOON 23', src: '/logos/clientes/cliente-23.png', compact: true, width: 129, height: 129 },
  { name: 'Haya', src: '/logos/clientes/cliente-24.png', compact: true, width: 205, height: 52 },
  { name: 'Define Emborrachados', src: '/logos/clientes/cliente-25.png', compact: true, width: 200, height: 78 },
  { name: 'Cimed', src: '/logos/clientes/cliente-26.png', compact: true, width: 214, height: 70 },
  { name: 'Cliente GOON 27', src: '/logos/clientes/cliente-27.png', compact: true, width: 119, height: 176 },
  { name: 'Audaz', src: '/logos/clientes/cliente-28.png', compact: true, width: 170, height: 69 },
  { name: 'Cliente GOON 29', src: '/logos/clientes/cliente-29.png', compact: true, width: 117, height: 117 },
];

function LogoGroup({ duplicate = false }) {
  return (
    <div className="client-logo-group" aria-hidden={duplicate || undefined}>
      {clients.map((client) => (
        <div className="client-logo-item" key={`${client.src}-${duplicate}`}>
          <img
            src={client.src}
            alt={duplicate ? '' : client.name}
            className={client.className ?? (client.compact ? 'client-logo-compact' : undefined)}
            width={client.width ?? 1920}
            height={client.height ?? 1080}
            loading="lazy"
            decoding="async"
          />
        </div>
      ))}
    </div>
  );
}

export default function LogoCarousel() {
  return (
    <section className="client-logos" aria-labelledby="client-logos-title">
      <div className="client-logos-heading">
        <p id="client-logos-title">Marcas que fazem parte da nossa rede</p>
        <span>CLIENTS / PARTNERS</span>
      </div>
      <div className="client-logo-window">
        <div className="client-logo-track">
          <LogoGroup />
          <LogoGroup duplicate />
        </div>
      </div>
    </section>
  );
}
