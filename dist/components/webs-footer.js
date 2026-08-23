/**
 * <webs-footer> Web Component
 * Standard KGEC institutional footer with CSE maintenance credit.
 *
 * Usage:
 * <webs-footer main-domain="https://website.kgec.edu.in"></webs-footer>
 */
class WebsFooter extends HTMLElement {
  connectedCallback() {
    const mainDomain = this.getAttribute('main-domain') || 'https://website.kgec.edu.in';
    const year = new Date().getFullYear();

    this.innerHTML = `
      <footer class="webs-footer">
        <div class="webs-container">
          <div class="webs-footer-grid">
            
            <!-- Col 1: Institute Info -->
            <div class="webs-footer-col">
              <h3>Kalyani Govt. Engg. College</h3>
              <p style="font-size: 0.85rem; color: #94A3B8; line-height: 1.6; margin-bottom: 14px;">
                Kalyani, Nadia, West Bengal - 741235, India.<br />
                Autonomous Engineering College established by the Government of West Bengal in 1995.
              </p>
              <div style="font-size: 0.82rem; color: #CBD5E1;">
                <strong>Phone:</strong> +91 (033) 2582 1309<br />
                <strong>Email:</strong> principal@kgec.edu.in
              </div>
            </div>

            <!-- Col 2: Academic Departments -->
            <div class="webs-footer-col">
              <h4>Academic Departments</h4>
              <ul class="webs-footer-links">
                <li><a href="${mainDomain}/departments/cse">Computer Science &amp; Engg.</a></li>
                <li><a href="${mainDomain}/departments/it">Information Technology</a></li>
                <li><a href="${mainDomain}/departments/ece">Electronics &amp; Communication</a></li>
                <li><a href="${mainDomain}/departments/ee">Electrical Engineering</a></li>
                <li><a href="${mainDomain}/departments/me">Mechanical Engineering</a></li>
                <li><a href="${mainDomain}/departments/ca">Master of Computer App (MCA)</a></li>
              </ul>
            </div>

            <!-- Col 3: Governance & Links -->
            <div class="webs-footer-col">
              <h4>Governance &amp; Links</h4>
              <ul class="webs-footer-links">
                <li><a href="${mainDomain}/about">Board of Governors</a></li>
                <li><a href="${mainDomain}/notices">Official Circulars</a></li>
                <li><a href="${mainDomain}/tenders">E-Procurement &amp; Tenders</a></li>
                <li><a href="${mainDomain}/placements">Placement Cell</a></li>
                <li><a href="https://blog.kgec.edu.in" target="_blank" style="color: var(--webs-accent);">KGEC Blog</a></li>
                <li><a href="${mainDomain}/admin/login">Backoffice Login</a></li>
              </ul>
            </div>

            <!-- Col 4: Accreditation & Compliance -->
            <div class="webs-footer-col">
              <h4>Accreditation &amp; Disclosures</h4>
              <ul class="webs-footer-links">
                <li><a href="https://makautwb.ac.in" target="_blank">MAKAUT Portal</a></li>
                <li><a href="https://www.aicte-india.org" target="_blank">AICTE Disclosures</a></li>
                <li><a href="${mainDomain}/about">NIRF Reports</a></li>
                <li><a href="${mainDomain}/about">NAAC / IQAC Cell</a></li>
                <li><a href="${mainDomain}/about">Right to Information (RTI)</a></li>
                <li><a href="${mainDomain}/about">Anti-Ragging Cell</a></li>
              </ul>
            </div>

          </div>

          <!-- Bottom Copyright Strip -->
          <div class="webs-footer-bottom">
            <div>
              &copy; ${year} Kalyani Government Engineering College. All rights reserved.
            </div>
            <div style="color: #CBD5E1;">
              Website maintained by Department of Computer Science &amp; Engineering
            </div>
          </div>
        </div>
      </footer>
    `;
  }
}

if (!customElements.get('webs-footer')) {
  customElements.define('webs-footer', WebsFooter);
}
