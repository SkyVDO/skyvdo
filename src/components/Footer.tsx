import { CONTACT, FOOTER_LINKS, SECTION_IDS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-subtle)] bg-deep-navy">
      <div className="mx-auto max-w-[var(--grid-content-width)] px-4 py-16 md:px-6">
        {/* Logo + tagline */}
        <div className="mb-8">
          <div className="mb-2 flex flex-col leading-none">
            <span className="font-display text-[1.75rem] leading-[0.9] tracking-[0.02em] text-starlight uppercase">
              SUNDOWN
            </span>
            <span className="text-label text-amber-glow">ENTERTAINMENT</span>
          </div>
          <p className="text-body-md text-moonstone">
            Night screen magic at your doorstep
          </p>
        </div>

        {/* Divider */}
        <div className="mb-8 h-px bg-[var(--border-subtle)]" />

        {/* Link columns */}
        <div className="mb-8 grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Services */}
          <div>
            <h4 className="text-label text-starlight mb-4">Services</h4>
            <ul className="flex flex-col gap-3">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-body-md text-moonstone transition-colors duration-[var(--duration-fast)] hover:text-amber-glow"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-label text-starlight mb-4">Company</h4>
            <ul className="flex flex-col gap-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-body-md text-moonstone transition-colors duration-[var(--duration-fast)] hover:text-amber-glow"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-label text-starlight mb-4">Connect</h4>
            <ul className="flex flex-col gap-3">
              {FOOTER_LINKS.connect.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body-md text-moonstone transition-colors duration-[var(--duration-fast)] hover:text-amber-glow"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Book Now */}
          <div>
            <h4 className="text-label text-starlight mb-4">Book Now</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={`#${SECTION_IDS.enquiry}`}
                  className="text-body-md text-moonstone transition-colors duration-[var(--duration-fast)] hover:text-amber-glow"
                >
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body-md text-amber-glow transition-colors duration-[var(--duration-fast)] hover:text-sunset-orange"
                >
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mb-6 h-px bg-[var(--border-subtle)]" />

        {/* Copyright */}
        <p className="text-body-sm text-dusk">
          &copy; {new Date().getFullYear()} SunDown Entertainment. {CONTACT.locations}.
        </p>
      </div>
    </footer>
  );
}
