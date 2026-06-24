import { useEffect } from "react";

interface SeoProps {
  /**
   * ── SEO PAGE TITLE ──────────────────────────────────────────────────────────
   * This appears in the browser tab and as the blue headline in Google results.
   * Best practice: "[Page Topic] | [Practice Name]", under 60 characters.
   * Example: "Dental Implants | Bright Smiles Family Dentistry"
   */
  title: string;

  /**
   * ── META DESCRIPTION ────────────────────────────────────────────────────────
   * This is the grey paragraph Google shows under your page title in search.
   * Best practice: 1–2 sentences, include your city + key service, 120–155 chars.
   * Example: "Expert dental implants in Austin, TX. Natural-looking, permanent
   * tooth replacement. Call Bright Smiles to schedule a free consultation."
   */
  description: string;

  /**
   * ── OPEN GRAPH IMAGE (optional) ─────────────────────────────────────────────
   * The image that appears when someone shares this page link on social media.
   * Should be 1200×630px. Leave blank to use the site-wide default (opengraph.jpg).
   */
  ogImage?: string;
}

/**
 * Drop this component at the top of any page to set per-page SEO.
 * Fill in the title and description props with your content.
 *
 * Example usage:
 *   <Seo
 *     title="Dental Implants | Bright Smiles Family Dentistry"
 *     description="Permanent tooth replacement with same-day implants in Austin, TX. Board-certified implant dentist with 15+ years experience."
 *   />
 */
export function Seo({ title, description, ogImage }: SeoProps) {
  useEffect(() => {
    const prev = document.title;

    document.title = title;

    const setMeta = (selector: string, attr: string, value: string) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute(attr, value);
    };

    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);

    if (ogImage) {
      setMeta('meta[property="og:image"]', "content", ogImage);
      setMeta('meta[name="twitter:image"]', "content", ogImage);
    }

    return () => {
      document.title = prev;
    };
  }, [title, description, ogImage]);

  return null;
}
