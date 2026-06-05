import { company } from '../data/site'
import LegalShell from '../components/LegalShell'

export default function Terms() {
  return (
    <LegalShell title="Terms of Service" updated="June 2026">
      <p>
        Welcome to the {company.name} website. By using this site, you agree to these terms. Please
        read them carefully.
      </p>

      <h2>About this website</h2>
      <p>
        This website provides information about our custom embroidery and personalized gift creations.
        It does not process payments or orders online. All orders are arranged directly with us by
        phone or through Facebook.
      </p>

      <h2>Custom orders</h2>
      <p>
        Because every item is handmade and personalized, custom pieces are made specifically for you.
        Details such as pricing, timing, materials, and any deposit are agreed upon directly between
        you and us before work begins. Personalized and custom items generally cannot be returned or
        resold, so we'll confirm spelling, dates, and design details with you before stitching.
      </p>

      <h2>Product images</h2>
      <p>
        Photos on this site show past creations. Because each piece is one-of-a-kind and made from
        different materials (including customer-provided clothing for memory keepsakes), your finished
        item may vary in appearance.
      </p>

      <h2>Intellectual property</h2>
      <p>
        The content, images, and design of this website are the property of {company.name} and may not
        be copied or reused without permission.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        This website is provided "as is." We are not liable for any damages arising from your use of
        the site. Nothing in these terms limits rights you may have under applicable law.
      </p>

      <h2>Contact us</h2>
      <p>
        Questions about these terms? Call {company.phone} or message us on{' '}
        <a href={company.social.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>.
      </p>
    </LegalShell>
  )
}
