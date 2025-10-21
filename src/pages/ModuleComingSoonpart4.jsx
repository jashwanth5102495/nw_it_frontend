import React from 'react';

export function Module3Topic9Lesson() {
  return (
    <div className="space-y-6 text-sm">
      <h2 className="text-xl font-semibold">🧠 Topic 9: AI Assistance — Accelerating Web Development with GPT & Claude</h2>

      <div>
        <h3 className="text-base font-semibold">Lesson</h3>
        <p className="text-gray-700 dark:text-gray-300">AI assistants like ChatGPT (OpenAI) and Claude (Anthropic) can act as pair programmers, code generators, and architecture advisors. Use them to speed up full‑stack development — designing APIs, styling React components, and debugging — with human oversight.</p>
      </div>

      <div>
        <h3 className="text-base font-semibold">🧩 Why AI Assistance Matters</h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
          <li>Reduce boilerplate coding time</li>
          <li>Explain errors and suggest fixes</li>
          <li>Optimize logic for readability/performance</li>
          <li>Convert ideas → structured code</li>
          <li>Generate docs and learning guides</li>
        </ul>
        <p className="text-gray-700 dark:text-gray-300"><strong>Pro Tip:</strong> Developers who prompt efficiently code 2–3× faster with fewer errors.</p>
      </div>

      <div>
        <h3 className="text-base font-semibold">🧠 GPT vs Claude — When to Use What</h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
          <li><strong>ChatGPT:</strong> Great for code generation, debugging, UI/UX scaffolding (React, JS, Django, Tailwind)</li>
          <li><strong>Claude:</strong> Strong in long‑context reasoning, documentation, architectural advice, data models</li>
        </ul>
      </div>

      <div>
        <h3 className="text-base font-semibold">🎯 Prompt Engineering</h3>
        <p className="text-gray-700 dark:text-gray-300">AI output quality = Prompt clarity × Context provided</p>
        <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
          <li>Specify role — “Act as a senior Django developer.”</li>
          <li>Define goal — “Build REST API for products with MongoDB.”</li>
          <li>Give structure — “Output tabs: Lesson, Syntax, Live Code.”</li>
          <li>Limit scope — “Write model and view only, no CSS.”</li>
        </ul>
      </div>

      <div>
        <h3 className="text-base font-semibold">⚙️ Using AI in Your Workflow</h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
          <li><strong>Frontend (React + Tailwind):</strong> Generate components, optimize props/state, refactor for performance</li>
          <li><strong>Backend (Django):</strong> Auto‑generate serializers/views/urls, migrations, auth setup, tests</li>
          <li><strong>Debugging:</strong> Paste traceback — “Explain this error and suggest a fix.”</li>
          <li><strong>Documentation:</strong> “Add docstrings and comments for models/views.”</li>
        </ul>
      </div>

      <div>
        <h3 className="text-base font-semibold">💡 Best Practices</h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
          <li>Read generated code carefully</li>
          <li>Test locally; validate behavior</li>
          <li>Adapt to your project structure</li>
          <li>Never paste production credentials or .env content</li>
        </ul>
      </div>
    </div>
  );
}

export function Module3Topic9Syntax() {
  return (
    <div className="space-y-6 text-sm">
      <h3 className="text-base font-semibold">Sample AI Prompt Templates for Module 3 Development</h3>

      <div>
        <p className="text-gray-700 dark:text-gray-300">Prompt 1 — Django Backend Setup</p>
        <pre className="rounded bg-gray-900 text-gray-100 p-4 overflow-auto">{`Act as a Django backend expert.
Create a Django project named 'product_api' with REST API endpoints for CRUD operations using Djongo.
Include model, serializer, and viewset code with proper URL routing.`}</pre>
      </div>

      <div>
        <p className="text-gray-700 dark:text-gray-300">Prompt 2 — React Frontend Connection</p>
        <pre className="rounded bg-gray-900 text-gray-100 p-4 overflow-auto">{`Act as a React developer.
Write a functional React component that fetches data from 'http://localhost:8000/products' using useEffect and displays it in a styled card layout.`}</pre>
      </div>

      <div>
        <p className="text-gray-700 dark:text-gray-300">Prompt 3 — Debugging Help (CORS)</p>
        <pre className="rounded bg-gray-900 text-gray-100 p-4 overflow-auto">{`I'm getting a 'CORS policy' error when fetching data from my Django backend to React.
Explain why this happens and give me a working solution using django-cors-headers.`}</pre>
      </div>

      <div>
        <p className="text-gray-700 dark:text-gray-300">Prompt 4 — Documentation</p>
        <pre className="rounded bg-gray-900 text-gray-100 p-4 overflow-auto">{`Generate docstrings for my Django ProductViewSet and Serializer class, explaining each method briefly.`}</pre>
      </div>

      <div>
        <p className="text-gray-700 dark:text-gray-300">Claude (Long Context) Example</p>
        <pre className="rounded bg-gray-900 text-gray-100 p-4 overflow-auto">{`You are an AI coding partner. I'm building a full‑stack app using Django and React.
Below is my folder structure and partial code for the Product model, serializer, and API view.
Please review it, suggest improvements for efficiency, and explain any security risks.

[Paste relevant code here...]`}</pre>
      </div>
    </div>
  );
}

export function buildModule3Topic9LiveFiles() {
  return {
    'index.html': `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8" />\n  <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n  <title>Topic 9 — AI‑Assisted Development</title>\n  <link rel="stylesheet" href="styles.css" />\n  <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>\n  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>\n  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>\n</head>\n<body>\n  <main class="container">\n    <h1>AI‑Assisted Development — Prompt Explorer</h1>\n    <div id="root"></div>\n  </main>\n  <script type="text/babel" src="frontend/App.js"></script>\n</body>\n</html>`,

    'styles.css': `body{font-family:system-ui,sans-serif;background:#f8fafc;color:#111827;margin:0;padding:24px}.container{max-width:900px;margin:0 auto}.card{border:1px solid #e5e7eb;border-radius:8px;background:#fff;padding:12px;margin-top:12px}`,

    // Prompt files (shortened)
    'ai_assisted_dev/prompts/backend_prompt.txt': `Act as a Django REST API expert.\nGenerate a Django model, serializer, and viewset for Product management.\nFields: name (string), price (float), description (text), stock (integer).\nUse Djongo for MongoDB connection.`,
    'ai_assisted_dev/prompts/frontend_prompt.txt': `Act as a React developer.\nCreate ProductList that fetches from a Django REST endpoint and displays products in a responsive grid using Tailwind CSS.`,

    // Example outputs
    'ai_assisted_dev/product_app/models.py': `from django.db import models\n\nclass Product(models.Model):\n    name = models.CharField(max_length=100)\n    price = models.FloatField()\n    description = models.TextField()\n    stock = models.IntegerField()\n\n    def __str__(self):\n        return self.name`,

    'ai_assisted_dev/react_app/src/ProductCard.js': `import React from 'react';\n\nfunction ProductCard({ name, price, description }) {\n  return (\n    <div className=\"p-4 border rounded-lg shadow-md hover:shadow-lg\">\n      <h2 className=\"font-bold text-lg\">{name}</h2>\n      <p>{description}</p>\n      <span className=\"text-green-600 font-semibold\">${price}</span>\n    </div>\n  );\n}\n\nexport default ProductCard;`,

    // Frontend demo
    'frontend/App.js': `const root = ReactDOM.createRoot(document.getElementById('root'));

function App(){
  return (
    <div>
      <p>Browse prompt files and example outputs in the file explorer.</p>
      <div className=\"card\">
        <h2>Example Output — ProductCard (Claude)</h2>
        <div style={{border:'1px solid #e5e7eb',padding:'12px',borderRadius:'8px'}}>
          <h3 style={{fontWeight:'bold'}}>iPhone 16</h3>
          <p>Latest model with AI features</p>
          <span style={{color:'#16a34a',fontWeight:'600'}}>$799.99</span>
        </div>
      </div>
      <div className=\"card\">
        <h2>Example Output — models.py (GPT)</h2>
        <pre style={{whiteSpace:'pre-wrap'}}>{'from django.db import models\n\nclass Product(models.Model):\n    name = models.CharField(max_length=100)\n    price = models.FloatField()\n    description = models.TextField()\n    stock = models.IntegerField()\n\n    def __str__(self):\n        return self.name'}</pre>
      </div>
    </div>
  );
}

root.render(<App />);`,
  };
}