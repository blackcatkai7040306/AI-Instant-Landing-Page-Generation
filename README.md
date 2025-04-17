<h1 align="center">B2B sales Platform</h1>

<h2>📌 About The Project</h2>
<p>SalesCred is an AI sales tool designed to build credibility and develop trust in a B2B sales environment. By leveraging advancements in B2B sales intelligence and digital marketing best practices, SalesCred aims to accelerate the process of establishing trust between salespeople and their customers..</p>

<p>Key differentiators include:</p>
<ul>
  <li>Embedded Talent Assistant model for operational scaling</li>
  <li>Multilingual interface with RTL support (Arabic, French, German)</li>
  <li>Automated document generation system (20+ templates)</li>
  <li>Integrated payment processing via Stripe/Razorpay</li>
  <li>Real-time collaboration between traders and talent teams</li>
</ul>

<h3>Architecture Overview</h3>
<img src="https://example.com/ilr-architecture-diagram.png" alt="System Architecture Diagram" width="600">
<em>Simplified system architecture showing core components</em>

<h2>🛠 Technical Implementation</h2>

<h3>Frontend</h3>
<ul>
  <li>React.js/Next.js framework</li>
  <li>Tailwind CSS for utility-first styling</li>
  <li>Formik + Yup for complex form handling</li>
  <li>i18next for multilingual support</li>
</ul>

<h3>Backend</h3>
<ul>
  <li>NestJS (Node.js) for modular architecture</li>
  <li>PostgreSQL with TypeORM</li>
  <li>JWT authentication with role-based access</li>
  <li>AWS S3 for document storage</li>
</ul>

<h3>Key Challenges</h3>
<ul>
  <li><strong>Complex Form States:</strong> Implemented auto-save functionality using debounced API calls and local storage fallback</li>
  <li><strong>Document Generation:</strong> Developed PDF templating system using PDFKit with dynamic layout switching</li>
  <li><strong>RTL Support:</strong> Created CSS flip utility for Arabic interface while maintaining LTR for numerical data</li>
</ul>

<h2>🚀 Features</h2>
<table>
  <tr>
    <th>Module</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>RFQ Management</td>
    <td>End-to-end inquiry processing with vendor matching</td>
  </tr>
  <tr>
    <td>Talent Dashboard</td>
    <td>Delegated access control for operational support</td>
  </tr>
  <tr>
    <td>Admin Console</td>
    <td>Complete system monitoring and user management</td>
  </tr>
</table>

<h2>📦 Installation</h2>
<pre>
git clone https://github.com/ilr-solutions/procurement-platform.git
cd procurement-platform
npm install
cp .env.example .env
npm run dev
</pre>

<h2>📅 Roadmap</h2>
<ul>
  <li>Phase 1: Core procurement workflow (Current)</li>
  <li>Phase 2: Mobile app and client portal</li>
  <li>Phase 3: Advanced analytics engine</li>
</ul>

<h2>📝 License</h2>
<p>Proprietary software © 2023 ILR Solutions</p>
