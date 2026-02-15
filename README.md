<h1 align="left">My Portfolio</h1>

<p align="left">
  Welcome to my personal portfolio! This project showcases my skills, experience, and projects in an elegant and responsive web design.
</p>

<h2>🌟 Features</h2>
<ul>
  <li><strong>Modern Design:</strong> A sleek and intuitive user interface.</li>
  <li><strong>Responsive Layout:</strong> Fully optimized for desktop, tablet, and mobile devices.</li>
  <li><strong>Projects Showcase:</strong> Highlights my best work with detailed descriptions and links.</li>
  <li><strong>Contact Form:</strong> Easily get in touch with me directly from the site.</li>
  <li><strong>Optimized Performance:</strong> Fast loading speeds with modern web optimization techniques.</li>
</ul>

<h2>🚀 Technologies Used</h2>
<ul>
  <li><strong>Framework:</strong> <a href="https://nextjs.org/">Next.js</a></li>
  <li><strong>Styling:</strong> Tailwind CSS</li>
  <li><strong>Deployment:</strong> <a href="https://vercel.com/">Vercel</a></li>
  <li><strong>Other Tools:</strong>
    <ul>
      <li>React Icons</li>
      <li>Aceternity UI</li>
    </ul>
  </li>
</ul>

<h2>📂 Project Structure</h2>
<pre>
portfolio-v2/
├── public/            # Static files (images, favicon, etc.)
├── src/
│   ├── components/    # Reusable React components
│   ├── pages/         # Next.js pages
│   ├── styles/        # Global styles
│   ├── utils/         # Helper functions
├── package.json       # Project dependencies
├── tailwind.config.js # Tailwind CSS configuration
└── README.md          # Project documentation
</pre>

<h2>📸 Screenshots</h2>
<p>
  <strong>Home Page</strong><br>
  <img src="https://github.com/user-attachments/assets/046ceea5-ed8a-4695-abfc-c7763b6b2693" alt="Home Page Screenshot" width="600">
</p>
<p>
  <strong>Projects Page</strong><br>
  <img src="https://github.com/user-attachments/assets/757deab0-5420-442c-978c-8d893e4a38a7" alt="Projects Page Screenshot" width="600">
</p>

<h2>🛠️ Installation & Development</h2>
<ol>
  <li><strong>Clone the repository:</strong>
    <pre>
git clone https://github.com/itsyaba/portfolio-v2.git
cd portfolio-v2
    </pre>
  </li>
  <li><strong>Install dependencies:</strong>
    <pre>
npm install
    </pre>
  </li>
  <li><strong>Run the development server:</strong>
    <pre>
npm run dev
    </pre>
  </li>
  <li>Open your browser and navigate to <a href="http://localhost:3000">http://localhost:3000</a>.</li>
</ol>

<h2>🤖 Telegram Visitor Notifications</h2>
<p>
  This project can send a Telegram message when someone visits the site.
</p>
<ol>
  <li>Create a bot with <strong>@BotFather</strong> and copy your bot token.</li>
  <li>Open your bot chat, send any message, then open:<br />
    <code>https://api.telegram.org/bot&lt;YOUR_BOT_TOKEN&gt;/getUpdates</code><br />
    Copy <code>message.chat.id</code> as your <code>TELEGRAM_CHAT_ID</code>.
  </li>
  <li>Create a <code>.env.local</code> file with:</li>
</ol>
<pre>
TELEGRAM_BOT_TOKEN=your_bot_token
TELEGRAM_CHAT_ID=your_chat_id
VISIT_NOTIFY_ENABLED=true
</pre>
<p>
  Country resolution strategy:
  <strong>x-vercel-ip-country</strong> first (Vercel), then fallback to FreeIPAPI if missing.
</p>

<h2>🌍 Live Demo</h2>
<p>
  Check out the live version of my portfolio: <a href="https://yeab.works/">Yeabsira Portfolio</a>
</p>

<h2>📧 Contact</h2>
<ul>
  <li><strong>Email:</strong> yabahane@gmai.com</li>
  <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/itsyaba">Yeabsira's LinkedIn</a></li>
</ul>
