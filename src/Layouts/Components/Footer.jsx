import React, { useCallback } from 'react'

const SOCIAL_LINKS = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/ig__abhirup/',
    external: true,
  },
  {
    label: 'Twitter (X)',
    href: 'https://twitter.com',
    external: true,
  },
]

const CONTACT_LINKS = [
  {
    label: 'Email',
    href: 'mailto:rabhirup605@gmail.com',
    external: false,
  },
  {
    label: '+91 9851253334',
    href: 'tel:+919851253334',
    external: false,
  },
]

const LEGAL_LINKS = [
  { label: 'Terms of Service', href: '#' },
  { label: 'Privacy Policy', href: '#' },
]

function LinkItem({ href, label, external }) {
  return (
    <a
      href={href}
      className="block text-white/50 hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:text-white"
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {label}
    </a>
  )
}

function FooterLinkGroup({ title, links }) {
  return (
    <div className="flex flex-col gap-1">
      <h3 className="text-xl font-bold mb-1 text-white">{title}</h3>
      {links.map((link) => (
        <LinkItem key={link.label} {...link} />
      ))}
    </div>
  )
}

export default function Footer() {
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <footer className="bg-black w-full p-6 sm:p-10">
      <div className="max-w-screen">
        {/* Top row */}
        <div className="flex flex-col sm:flex-row justify-between gap-6 sm:gap-0">
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="text-3xl sm:text-5xl text-white font-semibold text-left bg-transparent border-none cursor-pointer p-0 hover:opacity-80 transition-opacity duration-200 focus-visible:outline-none focus-visible:opacity-80"
          >
            StarProMart
          </button>

          <nav
            aria-label="Footer navigation"
            className="flex text-white gap-10"
          >
            <FooterLinkGroup title="Connect" links={SOCIAL_LINKS} />
            <FooterLinkGroup title="Contact" links={CONTACT_LINKS} />
          </nav>
        </div>

        {/* Bottom row */}
        <div className="border-t border-white flex flex-col sm:flex-row justify-between items-center text-gray-100 pt-2 mt-4 gap-2 sm:gap-0">
          <p className="tracking-wider text-slate-100 text-sm text-center sm:text-start">
            &copy; {new Date().getFullYear()} Abhirup Roy
          </p>

          <nav
            aria-label="Legal"
            className="flex gap-2 sm:gap-4 justify-center"
          >
            {LEGAL_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-sm text-gray-100 hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:text-white"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}