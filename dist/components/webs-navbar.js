/**
 * <webs-navbar> Web Component
 * Official KGEC institutional full mega menu navbar.
 *
 * Usage:
 * <webs-navbar active="departments" main-domain="https://website.kgec.edu.in"></webs-navbar>
 */
class WebsNavbar extends HTMLElement {
  connectedCallback() {
    const mainDomain = this.getAttribute('main-domain') || 'https://website.kgec.edu.in';
    const active = this.getAttribute('active') || '';

    this.innerHTML = `
      <nav class="webs-nav">
        <div class="webs-container webs-nav-inner">
          <ul class="webs-nav-list">
            <!-- Home -->
            <li class="webs-nav-item">
              <a href="${mainDomain}" class="webs-nav-link" style="background-color: var(--webs-primary-deep);">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              </a>
            </li>

            <!-- About Mega Menu -->
            <li class="webs-nav-item">
              <a href="${mainDomain}/about" class="webs-nav-link">
                About ▾
              </a>
              <div class="webs-megamenu">
                <div>
                  <div class="webs-megamenu-title">The Institute</div>
                  <a href="${mainDomain}/about" class="webs-megamenu-link">About Us &amp; Heritage</a>
                  <a href="${mainDomain}/about#vision" class="webs-megamenu-link">Vision &amp; Mission</a>
                  <a href="${mainDomain}/about#leadership" class="webs-megamenu-link">Principal's Desk</a>
                  <a href="${mainDomain}/about#campus" class="webs-megamenu-link">SNB Campus</a>
                </div>
                <div>
                  <div class="webs-megamenu-title">Governance &amp; Quality</div>
                  <a href="${mainDomain}/about#governance" class="webs-megamenu-link">Board of Governors</a>
                  <a href="${mainDomain}/about#naac" class="webs-megamenu-link">NAAC / IQAC</a>
                  <a href="${mainDomain}/about#nirf" class="webs-megamenu-link">NIRF Data</a>
                  <a href="${mainDomain}/about#grievance" class="webs-megamenu-link">RTI &amp; Anti-Ragging</a>
                </div>
              </div>
            </li>

            <!-- Academics -->
            <li class="webs-nav-item">
              <a href="${mainDomain}/academics" class="webs-nav-link">
                Academics ▾
              </a>
              <div class="webs-megamenu">
                <div>
                  <div class="webs-megamenu-title">Programmes</div>
                  <a href="${mainDomain}/academics#btech" class="webs-megamenu-link">B.Tech Degree</a>
                  <a href="${mainDomain}/academics#mtech" class="webs-megamenu-link">M.Tech Degree</a>
                  <a href="${mainDomain}/academics#mca" class="webs-megamenu-link">MCA Programme</a>
                </div>
                <div>
                  <div class="webs-megamenu-title">Resources</div>
                  <a href="${mainDomain}/academics#calendar" class="webs-megamenu-link">Academic Calendar</a>
                  <a href="${mainDomain}/academics#curriculum" class="webs-megamenu-link">Syllabus &amp; Curricula</a>
                  <a href="${mainDomain}/academics#library" class="webs-megamenu-link">Central Library</a>
                </div>
              </div>
            </li>

            <!-- Admissions -->
            <li class="webs-nav-item">
              <a href="${mainDomain}/admissions" class="webs-nav-link">
                Admissions ▾
              </a>
              <div class="webs-megamenu">
                <div>
                  <div class="webs-megamenu-title">Channels</div>
                  <a href="${mainDomain}/admissions#wbjee" class="webs-megamenu-link">WBJEE B.Tech</a>
                  <a href="${mainDomain}/admissions#jeca" class="webs-megamenu-link">WB-JECA MCA</a>
                  <a href="${mainDomain}/admissions#gate" class="webs-megamenu-link">GATE M.Tech</a>
                </div>
                <div>
                  <div class="webs-megamenu-title">Information</div>
                  <a href="${mainDomain}/admissions#fees" class="webs-megamenu-link">Fee Structure</a>
                  <a href="${mainDomain}/admissions#seats" class="webs-megamenu-link">Seat Matrix</a>
                  <a href="${mainDomain}/admissions#scholarships" class="webs-megamenu-link">Scholarships</a>
                </div>
              </div>
            </li>

            <!-- Departments -->
            <li class="webs-nav-item">
              <a href="${mainDomain}/departments" class="webs-nav-link">
                Departments ▾
              </a>
              <div class="webs-megamenu" style="width: 520px;">
                <div>
                  <div class="webs-megamenu-title">Engineering</div>
                  <a href="${mainDomain}/departments/cse" class="webs-megamenu-link">Computer Science &amp; Engg.</a>
                  <a href="${mainDomain}/departments/it" class="webs-megamenu-link">Information Technology</a>
                  <a href="${mainDomain}/departments/ece" class="webs-megamenu-link">Electronics &amp; Comm.</a>
                  <a href="${mainDomain}/departments/ee" class="webs-megamenu-link">Electrical Engineering</a>
                  <a href="${mainDomain}/departments/me" class="webs-megamenu-link">Mechanical Engineering</a>
                </div>
                <div>
                  <div class="webs-megamenu-title">Sciences &amp; PG</div>
                  <a href="${mainDomain}/departments/ca" class="webs-megamenu-link">Computer Applications (MCA)</a>
                  <a href="${mainDomain}/departments/ph" class="webs-megamenu-link">Physics</a>
                  <a href="${mainDomain}/departments/ch" class="webs-megamenu-link">Chemistry</a>
                  <a href="${mainDomain}/departments/math" class="webs-megamenu-link">Mathematics</a>
                  <a href="${mainDomain}/departments/hmnt" class="webs-megamenu-link">Humanities &amp; Mgmt.</a>
                </div>
              </div>
            </li>

            <!-- Research -->
            <li class="webs-nav-item">
              <a href="${mainDomain}/research" class="webs-nav-link">Research</a>
            </li>

            <!-- Placements -->
            <li class="webs-nav-item">
              <a href="${mainDomain}/placements" class="webs-nav-link">Placements</a>
            </li>

            <!-- Notices -->
            <li class="webs-nav-item">
              <a href="${mainDomain}/notices" class="webs-nav-link">Notices</a>
            </li>

            <!-- Tenders -->
            <li class="webs-nav-item">
              <a href="${mainDomain}/tenders" class="webs-nav-link">Tenders</a>
            </li>

            <!-- Contact -->
            <li class="webs-nav-item">
              <a href="${mainDomain}/contact" class="webs-nav-link">Contact</a>
            </li>
          </ul>

          <!-- Apply Now CTA -->
          <div>
            <a href="${mainDomain}/admissions" class="webs-btn webs-btn-accent" style="padding: 6px 14px; font-size: 0.78rem;">
              Apply Now
            </a>
          </div>
        </div>
      </nav>
    `;
  }
}

if (!customElements.get('webs-navbar')) {
  customElements.define('webs-navbar', WebsNavbar);
}
