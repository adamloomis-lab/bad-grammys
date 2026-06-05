import { company } from '../data/site'
import LegalShell from '../components/LegalShell'

export default function Accessibility() {
  return (
    <LegalShell title="Accessibility Statement" updated="June 2026">
      <p>
        {company.name} is committed to making our website accessible to everyone, including people with
        disabilities. We want every visitor to be able to learn about our creations and reach us easily.
      </p>

      <h2>What we do</h2>
      <ul>
        <li>We aim to follow the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA.</li>
        <li>We use descriptive alt text on our product photos so they're meaningful to screen readers.</li>
        <li>We design for readable color contrast, clear focus styles, and keyboard navigation.</li>
        <li>Our pages are built to work on phones, tablets, and desktop computers.</li>
      </ul>

      <h2>Ongoing effort</h2>
      <p>
        Accessibility is an ongoing process, and we're always working to improve. If you come across
        any part of our site that's difficult to use, we'd genuinely like to know so we can fix it.
      </p>

      <h2>Let us know</h2>
      <p>
        If you have trouble using this website or need information in a different format, please call us
        at {company.phone} or message us on{' '}
        <a href={company.social.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>, and
        we'll be happy to help.
      </p>
    </LegalShell>
  )
}
