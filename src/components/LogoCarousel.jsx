const clients = [
  { name: 'Arnold Sports Festival', src: '/logos/clientes/cliente-01.png' },
  { name: 'Brunx', src: '/logos/clientes/cliente-02.png' },
  { name: 'Deco', src: '/logos/clientes/cliente-03.png' },
  { name: 'Eskala', src: '/logos/clientes/cliente-04.png' },
  { name: 'Farcoo', src: '/logos/clientes/cliente-05.png' },
  { name: 'Hardcore Footwear', src: '/logos/clientes/cliente-06.png' },
  { name: '7 Kings Sneakers', src: '/logos/clientes/cliente-07.png' },
  { name: 'Cliente GOON 08', src: '/logos/clientes/cliente-08.png' },
  { name: 'Cliente GOON 09', src: '/logos/clientes/cliente-09.png' },
  { name: 'Minippy Rio de Janeiro', src: '/logos/clientes/cliente-10.png' },
  { name: 'Ordo', src: '/logos/clientes/cliente-11.png' },
  { name: 'Pangeia', src: '/logos/clientes/cliente-12.png' },
  { name: 'Potere', src: '/logos/clientes/cliente-13.png' },
  { name: 'Rosa Imperial', src: '/logos/clientes/cliente-14.png' },
  { name: 'Cliente GOON 15', src: '/logos/clientes/cliente-15.png' },
  { name: 'SMK Beyond Freedom', src: '/logos/clientes/cliente-16.png' },
  { name: 'Vessel', src: '/logos/clientes/cliente-17.png' },
  { name: 'Zapone', src: '/logos/clientes/cliente-18.png' },
];

function LogoGroup({ duplicate = false }) {
  return (
    <div className="client-logo-group" aria-hidden={duplicate || undefined}>
      {clients.map((client) => (
        <div className="client-logo-item" key={`${client.src}-${duplicate}`}>
          <img
            src={client.src}
            alt={duplicate ? '' : client.name}
            width="1920"
            height="1080"
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
