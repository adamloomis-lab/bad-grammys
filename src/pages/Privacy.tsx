import { company } from '../data/site'
import LegalShell from '../components/LegalShell'

export default function Privacy() {
  return (
    <LegalShell title="Privacy Policy" updated="June 2026">
      <p>
        {company.name} ("we," "us," or "our") respects your privacy. This policy explains what
        information we collect through this website and how we use it.
      </p>

      <h2>Information we collect</h2>
      <p>
        This is a simple informational website with no online checkout or account system. We do not
        ask you to enter personal information on this site. If you choose to contact us by phone or
        through our Facebook page, we will receive whatever information you share with us directly,
        such as your name, contact details, and the details of your custom order.
      </p>

      <h2>Cookies and analytics</h2>
      <p>
        We may use basic cookies and privacy-respecting analytics to understand how visitors use the
        site so we can improve it. You can disable cookies in your browser settings at any time. A
        consent notice is shown on your first visit.
      </p>

      <h2>How we use your information</h2>
      <p>
        We use the information you share only to respond to your questions, prepare and fulfill your
        custom orders, and communicate with you about your project. We do not sell, rent, or trade
        your personal information.
      </p>

      <h2>Third-party links</h2>
      <p>
        Our site links to Facebook. Those services have their own privacy policies, and we encourage
        you to review them. We are not responsible for the practices of third-party sites.
      </p>

      <h2>Children's privacy</h2>
      <p>
        This site is not directed to children under 13, and we do not knowingly collect information
        from children.
      </p>

      <h2>Contact us</h2>
      <p>
        If you have any questions about this Privacy Policy, please call us at {company.phone} or
        reach out on <a href={company.social.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>.
      </p>
    </LegalShell>
  )
}
