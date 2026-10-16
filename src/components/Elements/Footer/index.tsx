'use client';

import { versions } from '@/data/version';
import Image from 'next/image';
import Link from 'next/link';

const currentYear = new Date().getFullYear();

const footerLinks = [
  {
    title: 'Follow Us',
    links: [
      { name: 'Instagram', href: 'https://instagram.com' },
      { name: 'Facebook', href: 'https://facebook.com' },
      { name: 'X', href: 'https://x.com' },
    ],
  },
  {
    title: 'Navigation',
    links: [
      { name: 'Services', href: '/services' },
      { name: 'About Us', href: '/about-us' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'Apply For Loan', href: '/apply-now' },
    ],
  },
];

const latestVersion =
  versions[versions.length - 1]?.newVersion?.replace(/\s+(Final|Pro.*)$/i, '') || '';

export default function Footer() {
  return (
    <footer
      className="relative rounded-t-2xl px-4 sm:px-6 md:px-8 py-12 md:py-16 bg-gradient-to-t from-pink-100 via-pink-50 to-white text-gray-800"
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto">
        <nav
          className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-16 mb-8 md:mb-0"
          aria-label="Footer navigation"
        >
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 md:gap-16 w-full md:w-auto">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h3 className="text-[#333333] font-semibold text-fluid-lg uppercase mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-2" role="list">
                  {section.links.map((link) => {
                    const isExternal = link.href.startsWith('http');
                    return (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="text-fluid-base md:text-fluid-lg hover:text-[#007BFF] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:rounded"
                          {...(isExternal
                            ? { target: '_blank', rel: 'noopener noreferrer' }
                            : {})}
                        >
                          {link.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </nav>

        <div className="w-full h-px mt-6 bg-gray-200/80" aria-hidden />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-6 text-fluid-sm text-gray-600 uppercase">
          <Link
            href="/version"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#007BFF] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:rounded"
          >
            {latestVersion}
          </Link>

          <p>© {currentYear} CASHNET USA. All rights reserved.</p>

          <p className="text-fluid-base md:text-fluid-lg">Based in USA</p>
        </div>

        {/* Security Badges */}

        <div className="mt-8 flex flex-wrap justify-center items-center gap-6">
          <Image
            src="/images/icons/badges/Norton-Security-logo.png"
            alt="Norton Security"
            width={120}
            height={60}
          />

          <Image
            src="/images/icons/badges/BBB-logo.png"
            alt="BBB Accredited Business"
            width={120}
            height={60}
          />

          {/* <Image
            src="/icons/badges/bbb-a-plus.png"
            alt="BBB Rating A+"
            width={120}
            height={60}
          /> */}
        </div>

        {/* Legal Text */}

        <div className="mt-6 text-center text-sm text-gray-600 space-y-2 max-w-4xl mx-auto">
          <p>
            EHL Truist Bank is an Equal Housing Lender. © {currentYear} Truist Financial Corporation.
          </p>

          <p>
            TRUIST, CASHNET USA, and the CASHNET USA logos are service marks of Truist Financial
            Corporation. All rights reserved.
          </p>

          <p>
            All other trademarks are the property of their respective owners. Lending services
            provided by Truist Bank.
          </p>
        </div>
      </div>
    </footer>
  );
}
