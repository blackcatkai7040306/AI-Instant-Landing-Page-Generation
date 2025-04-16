<h1 align="center"Travel Buddy AI</h1>

<h2>✨ About The Project</h2>
<p>Travel Buddy AI is a tool designed to assist with travel planning. This tool uses AI technology to provide information on a wide range of travel aspects.</p>

<h3>Key Technical Components:</h3>
<ul>
  <li><strong>AI Integration:</strong> GPT-4 API with custom prompt engineering for itinerary generation</li>
  <li><strong>Multilingual Architecture:</strong> i18n framework implementation with language switching logic</li>
  <li><strong>Data Modeling:</strong> MongoDB/PostgreSQL schema for user profiles and travel plans</li>
  <li><strong>Responsive Design:</strong> Mobile-first approach with Tailwind CSS</li>
</ul>

<h3>System Architecture Diagram</h3>
<pre>
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   Client    │ →  │   Server    │ →  │    GPT-4    │
│ (Next.js)   │ ←  │ (Node.js)   │ ←  │    API      │
└─────────────┘    └─────────────┘    └─────────────┘
      ↑                   ↑
      │                   │
┌─────▼───────┐    ┌─────▼───────┐
│ Tailwind CSS│    │  Database   │
│ Components  │    │ (MongoDB)   │
└─────────────┘    └─────────────┘
</pre>

<h2>🚀 Implementation Approach</h2>
<h3>Milestone Breakdown</h3>

<h3>Technical Challenges</h3>
<ul>
  <li><strong>Prompt Engineering:</strong> Required multiple iterations to achieve consistent GPT-4 output format</li>
  <li><strong>State Management:</strong> Complex form state handling for multi-step itinerary configuration</li>
  <li><strong>Performance:</strong> Optimized API calls to reduce latency in itinerary generation</li>
</ul>

<h2>🛠 Tech Stack</h2>
<ul>
  <li><strong>Frontend:</strong> Next.js (React), Tailwind CSS</li>
  <li><strong>Backend:</strong> Node.js, Express.js</li>
  <li><strong>Database:</strong> MongoDB (Mongoose ODM)</li>
  <li><strong>AI:</strong> OpenAI GPT-4 API</li>
  <li><strong>i18n:</strong> i18next framework</li>
</ul>

<h2>📌 Key Features</h2>
<ul>
  <li>AI-generated day-by-day itineraries</li>
  <li>Budget-based activity filtering</li>
  <li>Multi-language support</li>
  <li>Editable travel plans</li>
  <li>Shareable itinerary links</li>
</ul>
