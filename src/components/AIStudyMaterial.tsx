import React, { useState } from 'react';
import teacherSticker from '../../video-explanations/teacher.png';
import { useNavigate } from 'react-router-dom';
import { 
  BookOpenIcon, 
  PlayIcon, 
  DocumentTextIcon, 
  AcademicCapIcon,
  ChevronRightIcon,
  StarIcon,
  ClockIcon,
  UserGroupIcon,
  CheckCircleIcon,
  ArrowLeftIcon,
  LightBulbIcon,
  CodeBracketIcon
} from '@heroicons/react/24/outline';
import MagnetLines from './MagnetLines';
import StarBorder from './StarBorder';
import LogoLoop from './LogoLoop';

const AIStudyMaterial = () => {
  const navigate = useNavigate();
  const [activeModule, setActiveModule] = useState(0);
  const [isStudying, setIsStudying] = useState(false);
  const [currentTopic, setCurrentTopic] = useState(0);
  const [moduleProgress, setModuleProgress] = useState<{[key: number]: {completed: boolean, progress: number}}>({});

  // Function to mark module as complete
  const markModuleComplete = (moduleId: number) => {
    setModuleProgress(prev => ({
      ...prev,
      [moduleId]: { completed: true, progress: 100 }
    }));
  };

  // Function to get module progress
  const getModuleProgress = (moduleId: number) => {
    return moduleProgress[moduleId] || { completed: false, progress: 0 };
  };

  // Function to calculate overall progress
  const calculateOverallProgress = () => {
    const completedModules = modules.filter(module => getModuleProgress(module.id).completed).length;
    const totalModules = modules.length;
    return Math.round((completedModules / totalModules) * 100);
  };

  // Function to get completed modules count
  const getCompletedModulesCount = () => {
    return modules.filter(module => getModuleProgress(module.id).completed).length;
  };

  const modules = [
    {
      id: 1,
      title: 'Module 1: Prompt Engineering Mastery',
      duration: '2 weeks',
      description: 'Foundations of great prompts: structure, context, constraints, style, and JSON.',
      topics: [
        'Prompt patterns: role, task, input, rules, outputs',
        'Chain-of-thought, critique, and refinement loops',
        'JSON Prompts: schemas, validators, and extraction',
        'Safety, bias, copyright, and compliance basics'
      ],
      completed: false,
      progress: 0
    },
    {
      id: 2,
      title: 'Module 2: Image Creation Suite',
      duration: '3 weeks',
      description: 'Create production-ready images for brands and marketing.',
      topics: [
        'DALL-E 3: styles, composition, and text-in-image',
        'Midjourney: parameter controls and workflows',
        'Stable Diffusion: LoRA, ControlNet, upscaling',
        'Copyright, licensing, and commercial usage'
      ],
      completed: false,
      progress: 0
    },
    {
      id: 3,
      title: 'Module 3: Video Creation & Animation',
      duration: '3 weeks',
      description: 'Generate, edit, and animate videos with modern AI tools.',
      topics: [
        'Runway ML: Gen-2 and editing workflows',
        'Synthesia: avatar video scripting and branding',
        'Luma AI: Dream Machine cinematography basics',
        'Pika Labs: motion design and transitions'
      ],
      completed: false,
      progress: 0
    },
    {
      id: 4,
      title: 'Module 4: AI Agents & Automations',
      duration: '3 weeks',
      description: 'Build practical agents and automated workflows for business.',
      topics: [
        'Claude API: tool-use, JSON I/O, auth & errors',
        'n8n: nodes, triggers, custom functions',
        'Make.com & Zapier: integrations and best practices',
        'Promptly AI: reusable prompt templates'
      ],
      completed: false,
      progress: 0
    },
    {
      id: 5,
      title: 'Module 5: Trading & Stock Insights with AI',
      duration: '2 weeks',
      description: 'Use AI for market research responsibly (education-focused).',
      topics: [
        'Data sources, feature engineering, and signals',
        'Sentiment analysis with LLMs (limitations & bias)',
        'Backtesting basics and risk management notes',
        'Non-financial-advice disclaimers and ethics'
      ],
      completed: false,
      progress: 0
    },
    {
      id: 6,
      title: 'Module 6: Capstone Projects & Portfolio',
      duration: '2 weeks',
      description: 'Ship real projects: image, video, agents, and automation.',
      topics: [
        'Client-style briefs and deliverables',
        'End-to-end workflow orchestration',
        'Cost tracking and optimization',
        'Portfolio polish and presentation'
      ],
      completed: false,
      progress: 0
    }
    ,
    {
      id: 7,
      title: 'Module 7: Coding with A.I',
      duration: '3 weeks',
      description: 'Use AI to plan, scaffold, code, test, and refactor applications.',
      topics: [
        'Prompting for specs and scaffolds',
        'AI-assisted coding in editors',
        'Test-first workflows and coverage',
        'Refactoring & code reviews with AI'
      ],
      completed: false,
      progress: 0
    }
  ];

  // Study material content with examples for each module
  const studyMaterials = {
    0: { // Module 1: Prompt Engineering Mastery
      title: 'Prompt Engineering Mastery',
      lessons: [
        {
          title: 'Introduction & Outcomes',
          content: `
            <h3>What you will learn</h3>
            <ul>
              <li>Design prompts that reliably achieve business outcomes</li>
              <li>Use refinement loops and critique to improve results</li>
              <li>Produce structured outputs (JSON) for apps</li>
            </ul>
            <h3>What is a prompt?</h3>
            <p>A prompt is the set of instructions you give to a generative model. It includes the role you assign, the task to perform, any input or context, constraints and rules, and the format you expect in the output. Clear prompts reduce ambiguity and produce consistent, high‑quality results.</p>
            <h3>Why draft proper prompts?</h3>
            <ul>
              <li>Improves accuracy and reduces retries</li>
              <li>Aligns outputs with business objectives and style guides</li>
              <li>Enables predictable parsing for automations and APIs</li>
            </ul>
            <h3>Why is Prompt Engineering important?</h3>
            <ul>
              <li>Transforms vague requests into measurable specifications</li>
              <li>Controls risk with constraints, validation, and governance</li>
              <li>Scales workflows by standardizing templates and JSON schemas</li>
            </ul>
          `,
          examples: [
            'Turn vague requests into clear, measurable prompts',
            'Add constraints to improve accuracy',
            'Produce JSON from natural text'
          ]
        },
        {
          title: 'Setup & Tools',
          content: `
            <h3>Accounts & Environment</h3>
            <ul>
              <li>Create accounts: OpenAI (ChatGPT), Anthropic (Claude), Stability (Stable Diffusion), Midjourney, Promptly AI (optional)</li>
              <li>Install VS Code or your preferred editor for testing prompts</li>
              <li>Use official playgrounds to iterate quickly and save templates</li>
            </ul>

            <h3>Subscriptions & Pricing Overview</h3>
            <ul>
              <li><strong>OpenAI ChatGPT</strong>: Free tier available; paid plans unlock larger context, faster responses, and tools.</li>
              <li><strong>Anthropic Claude</strong>: Free tier limited; paid plans provide higher rate limits and advanced models.</li>
              <li><strong>Midjourney</strong>: Paid subscription required for image generation; different tiers for usage volume.</li>
              <li><strong>Stable Diffusion</strong>: Free/open-source models available; cost is mainly GPU time if you run locally or in cloud.</li>
              <li><strong>Runway/Synthesia/Luma/Pika</strong>: Typically paid, with trial credits; pricing varies by plan and usage.</li>
              <li><strong>Automation (n8n/Make/Zapier)</strong>: Free tiers for small workflows; paid tiers unlock advanced features and higher limits.</li>
            </ul>
            <p class="text-gray-400 text-sm">Note: Pricing and availability change frequently. Always check official sites for current details and follow terms of service.</p>

            <h3>Setup Details</h3>
            <ul>
              <li>Store API keys securely using environment variables or a secrets manager.</li>
              <li>Create reusable prompt files/templates and version them in Git.</li>
              <li>Use JSON schemas for structured outputs and validate before consumption.</li>
            </ul>

            <h3>VPN Access (for regions where tools aren’t released)</h3>
            <div class="bg-gray-900/50 border border-gray-700 rounded p-3">
              <p class="mb-2">If a tool isn’t available in India, you can consider a reputable VPN:</p>
              <ul>
                <li>Choose a trusted provider with servers in supported countries.</li>
                <li>Connect to a region where the tool is available, then access the site.</li>
                <li>Respect local laws and each tool’s terms of service; avoid policy violations.</li>
              </ul>
            </div>
          `,
          examples: [
            'Configure model settings in playgrounds',
            'Save prompt templates for reuse',
            'Set tokens/temperature for consistency'
          ]
        },
        {
          title: 'How to Use: Prompt patterns and structure',
          content: `
            <h3>Role, Task, Input, Rules, Output</h3>
            <pre class="whitespace-pre-wrap break-words overflow-x-auto p-3 rounded bg-gray-800 text-gray-100 text-sm">{
  "role": "You are a senior AI tutor",
  "task": "Explain the box model",
  "input": "CSS topic",
  "rules": ["Use short paragraphs", "Give one code sample"],
  "output": "A 5-part explanation"
}</pre>
            <h4>Alternative JSON Example</h4>
            <pre class="whitespace-pre-wrap break-words overflow-x-auto p-3 rounded bg-gray-800 text-gray-100 text-sm">{
  "role": "Senior AI tutor",
  "intent": "Explain CSS box model to a beginner",
  "context": "Audience: new web devs",
  "constraints": ["Use one code sample", "Keep it under 200 words"],
  "examples": [{ "input": "What is margin?", "output": "Margin is the outer space around an element" }]
}</pre>
            <h4>Refinement Loop</h4>
            <ul>
              <li>Ask for critique and improvements</li>
              <li>Iterate with constraints and examples</li>
              <li>Lock style via few-shot prompts</li>
            </ul>
          `,
          examples: [
            'Rewrite a prompt with role/task/rules structure',
            'Add a critique loop to improve outputs',
            'Turn a free-form request into JSON specs'
          ]
        },
        {
          title: 'Best Practices & JSON prompts',
          content: `
            <h3>Use JSON for reliable outputs</h3>
            <p>Define a schema and validate outputs. Provide retry instructions when invalid.</p>
            <pre class="whitespace-pre-wrap break-words overflow-x-auto p-3 rounded bg-gray-800 text-gray-100 text-sm">{
  "type": "object",
  "properties": {
    "title": { "type": "string" },
    "steps": { "type": "array", "items": { "type": "string" } },
    "duration": { "type": "string" }
  }
}</pre>
          `,
          examples: [
            'Generate lesson plans as JSON',
            'Validate JSON with a schema and retry',
            'Extract structured tasks from raw text'
          ]
        },
        {
          title: 'Types of Prompt Engineering: RICE, CoT, Self-Ask',
          content: `
            <h3>RICE Framework</h3>
            <p><strong>R</strong>ole, <strong>I</strong>ntent, <strong>C</strong>ontext & Constraints, <strong>E</strong>xamples.</p>
            <ul>
              <li><strong>Role</strong>: Set the model's persona and responsibility.</li>
              <li><strong>Intent</strong>: State the objective and success criteria.</li>
              <li><strong>Context & Constraints</strong>: Provide inputs, domain info, format, tone, limits.</li>
              <li><strong>Examples</strong>: Few-shot demos to lock style and structure.</li>
            </ul>
            <br /><br />
            <h4>RICE Prompt Template</h4>
            <div class="bg-gray-900/50 border border-gray-700 rounded p-3 mb-4">
              <pre class="whitespace-pre-wrap break-words overflow-x-auto text-sm text-gray-100">{
  "role": "Senior AI tutor",
  "intent": "Explain CSS box model to a beginner",
  "context": "Audience: new web devs",
  "constraints": ["Use one code sample", "Keep it under 200 words"],
  "examples": [{ "input": "What is margin?", "output": "Margin is the outer space around an element" }]
}</pre>
            </div>
            <div class="bg-gray-900/50 border border-gray-700 rounded p-3 mb-4">
              <strong>Template</strong>
              <pre class="whitespace-pre-wrap break-words overflow-x-auto text-sm text-gray-100">{
  "role": "<persona>",
  "intent": "<goal with success criteria>",
  "context": "<inputs, domain details>",
  "constraints": ["<limits>", "<style>", "<format>"],
  "examples": [ { "input": "<example input>", "output": "<desired style/structure>" } ]
}</pre>
            </div>

            <br /><br />
            <h3>Chain-of-Thought (CoT)</h3>
            <p>Ask the model to reason step-by-step to improve clarity and correctness.</p>
            <div class="bg-gray-900/50 border border-gray-700 rounded p-3 mb-4">
              <strong>CoT Example</strong>
              <pre class="whitespace-pre-wrap break-words overflow-x-auto text-sm text-gray-100">You are a math tutor. Solve the problem and show reasoning steps, then provide a final answer labeled "Result:".
Problem: A rectangle has perimeter 20 and length 6. What is the width?</pre>
            </div>
            <div class="bg-gray-900/50 border border-gray-700 rounded p-3 mb-4">
              <strong>CoT Template</strong>
              <pre class="whitespace-pre-wrap break-words overflow-x-auto text-sm text-gray-100">Role: <expert>
Task: Solve <problem>. Show steps first, then "Result:".
Constraints: Be concise; avoid irrelevant steps.
Output: Steps + Result</pre>
            </div>

            <br /><br />
            <h3>Self-Ask</h3>
            <p>Have the model generate sub-questions it must answer before final output.</p>
            <div class="bg-gray-900/50 border border-gray-700 rounded p-3 mb-4">
              <strong>Self-Ask Cycle</strong>
              <pre class="whitespace-pre-wrap break-words overflow-x-auto text-sm text-gray-100">Generate a draft answer. Then list 3 critiques and revise the answer to address them. Return Final Answer and a brief summary of changes.</pre>
            </div>
            <div class="bg-gray-900/50 border border-gray-700 rounded p-3 mb-4">
              <strong>Self-Ask Template</strong>
              <pre class="whitespace-pre-wrap break-words overflow-x-auto text-sm text-gray-100">Role: <domain expert>
Task: Produce draft → Critique (3 points) → Revise → Final Answer.
Constraints: Follow style guide; keep under <N> words.
Output: Draft, Critiques, Final Answer</pre>
            </div>

            <h4>Expected Result</h4>
            <div class="bg-gray-900/50 border border-gray-700 rounded p-3">
              <pre class="whitespace-pre-wrap break-words overflow-x-auto text-sm text-gray-100">Title: Understanding the CSS Box Model
1) Content: The actual text or image.
2) Padding: Space around content.
3) Border: Line around padding.
4) Margin: Space outside border.
Code:
.div { padding: 16px; border: 1px solid #ccc; margin: 12px; }</pre>
            </div>
          `,
          examples: [
            'Rewrite a request using RICE to include constraints',
            'Add CoT + critique to improve accuracy',
            'Use few-shot examples to lock output style'
          ]
        },
        {
          title: 'How Generative AI Understands Your Prompts',
          content: `
            <h3>From Text to Output</h3>
            <ul>
              <li><strong>Tokenization</strong>: Your text is split into tokens (subword units).</li>
              <li><strong>Embeddings</strong>: Tokens become vectors that encode meaning.</li>
              <li><strong>Transformer Attention</strong>: The model relates all tokens to each other to understand context.</li>
              <li><strong>Instruction Following</strong>: System + user prompts set behavior; the model is tuned to follow instructions.</li>
              <li><strong>Sampling</strong>: Parameters like temperature/top_p control randomness vs. determinism.</li>
              <li><strong>Function/Tool Use</strong>: Models can call tools/functions and return structured JSON.</li>
            </ul>
            <h4>Give Prompts the Way Models Expect</h4>
            <ul>
              <li>State role + intent first; list constraints and output format.</li>
              <li>Provide examples (few-shot) that mirror the desired structure.</li>
              <li>Specify JSON schema or exact headings for predictable parsing.</li>
              <li>Iterate: ask for critique, fix mistakes, retry with tighter rules.</li>
            </ul>
            <h4>Example Prompt</h4>
            <pre>System: You are a precise explainer.\nUser: Explain "overfitting" in 4 bullet points. Use simple language. End with a 1-sentence tip.\nConstraints: 80-120 words.</pre>
            <h4>Expected Result</h4>
            <pre>- Overfitting happens when a model memorizes noise in the training data.\n- It performs well on training examples but poorly on new data.\n- Too many parameters and too few examples increase risk.\n- Regularization and cross-validation help reduce it.\nTip: Keep models simple and validate on unseen data.</pre>
          `,
          examples: [
            'Write a role+intent prompt and compare with a vague prompt',
            'Switch temperature and observe output differences',
            'Add a schema and validate the returned JSON'
          ]
        }
      ]
    },
    1: { // Module 2: Image Creation Suite
      title: 'Image Creation Suite',
      lessons: [
        {
          title: 'Introduction & Outcomes',
          content: `
            <h3>What you will learn</h3>
            <ul>
              <li>Design image prompts that match brand style and goals</li>
              <li>Use references, seeds, and parameters to control outputs</li>
              <li>Export and upscale assets for production use</li>
            </ul>
            <h3>Why proper prompts?</h3>
            <p>Clear, constraint-driven prompts reduce retries and produce usable images faster. Specify style, composition, subject, lighting, mood, and post-processing to get consistent results.</p>
          `,
          examples: [
            'Compose a brand-safe product hero image',
            'Match a reference moodboard across variants',
            'Lock aspect ratio and framing for banners'
          ]
        },
        {
          title: 'Setup & Tools',
          content: `
            <h3>Accounts & Environment</h3>
            <ul>
              <li>Create accounts: DALL·E, Midjourney, Stability AI</li>
              <li>Use official web UIs or Discord (Midjourney)</li>
              <li>Organize assets in folders; track seeds/params</li>
            </ul>
            <h3>Subscriptions & Pricing</h3>
            <ul>
              <li>DALL·E: pay-per-use via credits; check current pricing</li>
              <li>Midjourney: subscription tiers by usage volume</li>
              <li>Stable Diffusion: local (free) or cloud GPU costs</li>
            </ul>
            <h3>Open-Source Image Tools</h3>
            <ul>
              <li>Stable Diffusion WebUI (AUTOMATIC1111)</li>
              <li>ComfyUI (node-based workflows)</li>
              <li>InvokeAI (user-friendly SD interface)</li>
              <li>Fooocus (prompt-focused SD)
              </li>
              <li>Diffusers (Python library by Hugging Face)</li>
            </ul>
            <h3>VPN Access (if tools are region-restricted)</h3>
            <div class="bg-gray-900/50 border border-gray-700 rounded p-3">
              <p class="mb-2">Choose reputable providers, connect to supported regions, and follow terms of service.</p>
            </div>
          `,
          examples: [
            'Track seeds for reproducible variants',
            'Save style guides and prompt templates',
            'Store references and color palettes'
          ]
        },
        {
          title: 'Prompt Formats, Types & Examples',
          content: `
            <h3>Prompt Format</h3>
            <div class="bg-gray-900/50 border border-gray-700 rounded p-3 mb-4">
              <pre class="whitespace-pre-wrap break-words overflow-x-auto text-sm text-gray-100">Subject + Style + Composition + Lighting + Mood + Constraints (aspect, seed, background, post-processing)</pre>
            </div>
            <h3>Types of Prompts</h3>
            <ul>
              <li>Descriptive: Focus on subject and details</li>
              <li>Stylistic: Emphasize art style or brand look</li>
              <li>Instructional: Specify framing, aspect, constraints</li>
              <li>Reference-based: Include links or named styles</li>
            </ul>
            <h3>RICE for Image Prompts</h3>
            <p><strong>Role</strong>: Art director; <strong>Intent</strong>: brand hero; <strong>Context & Constraints</strong>: style, composition, aspect; <strong>Examples</strong>: reference pairs.</p>
            <div class="bg-gray-900/50 border border-gray-700 rounded p-3 mb-4">
              <strong>Template</strong>
              <pre class="whitespace-pre-wrap break-words overflow-x-auto text-sm text-gray-100">{
  "role": "Art director",
  "intent": "Create a product hero image",
  "context": "Brand: minimal, modern; Subject: wireless earbuds",
  "constraints": ["3:2 aspect", "soft daylight", "center composition", "plain background"],
  "examples": [{ "refStyle": "https://example.com/moodboard.jpg", "notes": "high-key lighting" }]
}</pre>
            </div>
            <div class="bg-gray-900/50 border border-gray-700 rounded p-3">
              <strong>DALL·E / Midjourney Prompt</strong>
              <pre class="whitespace-pre-wrap break-words overflow-x-auto text-sm text-gray-100">Minimal product hero of wireless earbuds, soft daylight, high-key lighting, center composition, plain background, 3:2 aspect, brand style: modern minimal, crisp detail</pre>
            </div>
            <br /><br />
            <h4>Proper Prompt Example</h4>
            <div class="bg-gray-900/50 border border-gray-700 rounded p-3 mb-4">
              <pre class="whitespace-pre-wrap break-words overflow-x-auto text-sm text-gray-100">Subject: Wireless earbuds on clean background
Style: Modern minimal, commercial product photography
Composition: Centered, ample negative space
Lighting: Soft daylight, high-key
Constraints: 3:2 aspect, plain background, seed=12345
Post: Subtle sharpening</pre>
            </div>
            <h4>Expected Image Preview</h4>
            <div class="bg-gray-800/50 border border-gray-700 rounded p-3 text-center">
              <div class="w-full h-40 bg-gray-700 rounded flex items-center justify-center">
                <span class="text-gray-300 text-sm">Preview: Clean product hero, centered; soft daylight; plain background (3:2)</span>
              </div>
            </div>
            <br /><br />
            <h4>Expected Result</h4>
            <div class="bg-gray-900/50 border border-gray-700 rounded p-3">
              <pre class="whitespace-pre-wrap break-words overflow-x-auto text-sm text-gray-100">Image: Clean product hero, centered
Lighting: Soft daylight, high-key
Background: Plain, minimal
Aspect: 3:2
Variants: 4 with seed tracking</pre>
            </div>
          `,
          examples: [
            'Adapt prompt to lifestyle setting',
            'Create matching banner and square crops',
            'Generate variants with fixed seed'
          ]
        },
        {
          title: 'Best Practices & Guardrails',
          content: `
            <h3>Quality & Ethics</h3>
            <ul>
              <li>Use references responsibly; avoid copyrighted styles unless licensed</li>
              <li>Document prompts, params, seeds, and post-processing</li>
              <li>Upscale and retouch for final delivery</li>
            </ul>
            <h3>What not to use</h3>
            <ul>
              <li>Avoid trademarked or copyrighted brand assets without permission</li>
              <li>Do not use disallowed terms or impersonate artists</li>
              <li>Avoid overly vague prompts (causes inconsistent results)</li>
            </ul>
            <h3>Tips for best outcomes</h3>
            <ul>
              <li>Be explicit: subject, style, composition, lighting, constraints</li>
              <li>Use seeds to reproduce and iterate variants</li>
              <li>Track parameters; maintain a prompt library</li>
              <li>Post-process: upscale, denoise, color-correct when needed</li>
            </ul>
          `,
          examples: [
            'Create a deliverable checklist',
            'Document licensing per asset',
            'Standardize export settings'
          ]
        }
      ]
    },
    1: { // Module 2: Image Creation Suite
      title: 'Image Creation Suite',
      lessons: [
        {
          title: 'Introduction',
          content: `
            <h3>Image tools overview</h3>
            <ul>
              <li>DALL‑E 3 for brand-ready images</li>
              <li>Midjourney for creative exploration</li>
              <li>Stable Diffusion for customization and control</li>
            </ul>
          `,
          examples: [
            'Compare outputs across the three tools',
            'Pick the right tool for the brief',
            'Define style guides for consistency'
          ]
        },
        {
          title: 'Installation & Setup',
          content: `
            <h3>Accounts and local install</h3>
            <ul>
              <li>DALL‑E 3: OpenAI account</li>
              <li>Midjourney: Discord + subscription</li>
              <li>Stable Diffusion: Install AUTOMATIC1111 WebUI, download models, set GPU</li>
            </ul>
          `,
          examples: [
            'Configure SD models and upscalers',
            'Set Midjourney parameters and remix',
            'Use DALL‑E reference images'
          ]
        },
        {
          title: 'How to Use: Quickstarts',
          content: `
            <h3>Prompts and workflows</h3>
            <ul>
              <li>DALL‑E: descriptive prompts + constraints</li>
              <li>Midjourney: stylize, aspect ratios, remix mode</li>
              <li>Stable Diffusion: LoRA + ControlNet pipelines</li>
            </ul>
          `,
          examples: [
            'Create product visuals with brand palettes',
            'Design social post templates',
            'Train a LoRA for a brand style'
          ]
        },
        {
          title: 'Best Practices',
          content: `
            <h3>Quality, ethics, and licensing</h3>
            <ul>
              <li>Use references for consistency</li>
              <li>Document licensing and usage rights</li>
              <li>Polish outputs with upscaling and retouching</li>
            </ul>
          `,
          examples: [
            'Create moodboards from prompts',
            'Upscale images for print',
            'Build a reusable prompt library'
          ]
        }
      ]
    },
    2: { // Module 3: Video Creation & Animation
      title: 'Video Creation & Animation',
      lessons: [
        {
          title: 'Introduction',
          content: `
            <h3>Video tools overview</h3>
            <ul>
              <li>Runway ML Gen‑2 for generation & editing</li>
              <li>Synthesia for avatar videos</li>
              <li>Luma AI & Pika Labs for motion design</li>
            </ul>
          `,
          examples: [
            'Storyboard a short brand film',
            'Compare tools for a specific brief',
            'Design animated brand openers'
          ]
        },
        {
          title: 'Installation & Setup',
          content: `
            <h3>Accounts and projects</h3>
            <ul>
              <li>Runway ML: account + project setup</li>
              <li>Synthesia: avatar and brand assets</li>
              <li>Pika/Luma: sign-in and asset prep</li>
            </ul>
            <h3>Open-Source Video Tools</h3>
            <ul>
              <li>Stable Video Diffusion</li>
              <li>FFmpeg (post-processing)</li>
              <li>ComfyUI pipelines for video (extensions)</li>
            </ul>
          `,
          examples: [
            'Import brand assets for consistency',
            'Prepare scripts and voice settings',
            'Organize project files and exports'
          ]
        },
        {
          title: 'How to Use: Quickstarts',
          content: `
            <h3>From prompt to polished video</h3>
            <p>Use role, intent, constraints, and references to control motion, pacing, framing, and branding.</p>
            <div class="bg-gray-900/50 border border-gray-700 rounded p-3 mb-4">
              <strong>Runway Gen‑2 Quickstart</strong>
              <pre class="whitespace-pre-wrap break-words overflow-x-auto text-sm text-gray-100">Step 1: Create project, import asset
Step 2: Select "text to video" or "image to video"
Step 3: Apply inpainting/masking, set duration (8–12s)
Step 4: Export 1080p, bitrate ~8–12 Mbps</pre>
            </div>
            <div class="bg-gray-900/50 border border-gray-700 rounded p-3 mb-4">
              <strong>Synthesia Quickstart</strong>
              <pre class="whitespace-pre-wrap break-words overflow-x-auto text-sm text-gray-100">Step 1: Pick avatar and background
Step 2: Paste 20–30s script (on-brand tone)
Step 3: Add lower-thirds, logo outro
Step 4: Export MP4 (1080p)</pre>
            </div>
            <div class="bg-gray-900/50 border border-gray-700 rounded p-3">
              <strong>Pika/Luma Quickstart</strong>
              <pre class="whitespace-pre-wrap break-words overflow-x-auto text-sm text-gray-100">Step 1: Choose camera path (dolly/pan)
Step 2: Set FOV, duration, easing
Step 3: Preview and refine transitions</pre>
            </div>
            <br /><br />
            <h4>Example & Output</h4>
            <div class="bg-gray-900/50 border border-gray-700 rounded p-3">
              <pre class="whitespace-pre-wrap break-words overflow-x-auto text-sm text-gray-100">Prompt: "12s brand intro with smooth dolly-in on logo, soft ambient music"
Output: 1080p clip with consistent branding, smooth motion, clear logo reveal</pre>
            </div>
          `,
          examples: [
            'Create 10–20s promotional clips',
            'Generate multilingual onboarding content',
            'Create transitions for social posts'
          ]
        },
        {
          title: 'Best Practices & Guardrails',
          content: `
            <h3>Branding, pacing, and export</h3>
            <ul>
              <li>Align visuals with brand guidelines</li>
              <li>Use pacing and music for engagement</li>
              <li>Export formats and compression tips</li>
            </ul>
            <h3>What not to use</h3>
            <ul>
              <li>Avoid disallowed celebrity likenesses or copyrighted footage</li>
              <li>Do not misrepresent endorsements or real events</li>
              <li>Avoid overly long intros; keep under 20–30s for social</li>
            </ul>
            <h3>Tips for best outputs</h3>
            <ul>
              <li>Use short, clear scripts; keep sentences concise</li>
              <li>Balance motion: avoid sudden pans; ease-in-out</li>
              <li>Export at 1080p with suitable bitrate; test platform presets</li>
            </ul>
          `,
          examples: [
            'Edit footage with prompts',
            'Create product demo explainers',
            'Prepare deliverables for platforms'
          ]
        },
        {
          title: 'Prompt Templates & Examples',
          content: `
            <h3>Video Prompt Patterns</h3>
            <p>Use role, intent, constraints, and examples to control motion, pacing, and framing.</p>
            <div class="bg-gray-900/50 border border-gray-700 rounded p-3 mb-4">
              <strong>Runway Gen‑2 Inpainting Prompt</strong>
              <pre class="whitespace-pre-wrap break-words overflow-x-auto text-sm text-gray-100">Role: Video editor
Intent: Replace background with brand gradient
Constraints: Maintain subject edges; duration 12s; 1080p
Steps: Upload clip → mask background → apply gradient → adjust motion</pre>
            </div>
            <div class="bg-gray-900/50 border border-gray-700 rounded p-3 mb-4">
              <strong>Synthesia Avatar Script Template</strong>
              <pre class="whitespace-pre-wrap break-words overflow-x-auto text-sm text-gray-100">Persona: Professional instructor
Goal: 20s onboarding intro
Script: "Welcome! In this short video, you'll learn the basics of..."
Visuals: Brand background, lower-third title, logo outro</pre>
            </div>
            <div class="bg-gray-900/50 border border-gray-700 rounded p-3">
              <strong>Pika/Luma Camera Movement</strong>
              <pre class="whitespace-pre-wrap break-words overflow-x-auto text-sm text-gray-100">Move: Slow dolly-in, ease-in-out; FOV: 35mm look; Duration: 3s; Transition: cross dissolve</pre>
            </div>
            <br /><br />
            <h4>Expected Result</h4>
            <div class="bg-gray-900/50 border border-gray-700 rounded p-3">
              <pre class="whitespace-pre-wrap break-words overflow-x-auto text-sm text-gray-100">Clips rendered at 1080p, consistent branding
Avatar script clear and concise (20s)
Camera motion smooth and on-style</pre>
            </div>
          `,
          examples: [
            'Write a Runway prompt for background replacement',
            'Compose a concise Synthesia script',
            'Design camera movement with Pika/Luma'
          ]
        }
      ]
    },
    3: { // Module 4: AI Agents & Automations
      title: 'AI Agents & Automations',
      lessons: [
        {
          title: 'Introduction',
          content: `
            <h3>What agents and automations can do</h3>
            <ul>
              <li>Connect LLMs to tools and data</li>
              <li>Automate multi-step business workflows</li>
              <li>Ensure reliability with validation and retries</li>
            </ul>
          `,
          examples: [
            'Summarize tickets and route to teams',
            'Generate weekly reports automatically',
            'Classify leads and notify sales'
          ]
        },
        {
          title: 'Installation & Setup',
          content: `
            <h3>Keys and environment</h3>
            <ul>
              <li>Claude API: get key and set environment vars</li>
              <li>n8n: local install or Docker</li>
              <li>Make/Zapier: connect apps and set webhooks</li>
            </ul>
          `,
          examples: [
            'Store secrets securely',
            'Create n8n credentials and test nodes',
            'Set webhook triggers for scenarios'
          ]
        },
        {
          title: 'How to Use: Build a workflow',
          content: `
            <h3>Example: Support summarizer</h3>
            <ol>
              <li>Webhook triggers new ticket</li>
              <li>Claude function-call extracts fields</li>
              <li>n8n routes to Gmail/Sheets/Slack</li>
              <li>Add retries and idempotency keys</li>
            </ol>
          `,
          examples: [
            'Lead enrichment pipeline',
            'Content generation and publishing',
            'Notification routing system'
          ]
        },
        {
          title: 'Best Practices',
          content: `
            <h3>Reliability and governance</h3>
            <ul>
              <li>Validate JSON outputs before use</li>
              <li>Retry with backoff for transient errors</li>
              <li>Log, monitor, and alert on failures</li>
            </ul>
          `,
          examples: [
            'CRM sync with email and sheets',
            'Automated invoices and notifications',
            'Support ticket escalation flow'
          ]
        }
      ]
    },
    4: { // Module 5: Trading & Stock Insights with AI
      title: 'Trading & Stock Insights with AI',
      lessons: [
        {
          title: 'Introduction & Disclaimer',
          content: `
            <h3>Education-focused module</h3>
            <p>Not financial advice. Use AI for research, never make decisions based solely on AI.</p>
          `,
          examples: [
            'Write a personal risk policy',
            'List limitations and biases',
            'Define guardrails for experiments'
          ]
        },
        {
          title: 'Installation & Setup',
          content: `
            <h3>Python environment & data</h3>
            <ul>
              <li>Install Python + venv</li>
              <li>Use Yahoo Finance & News APIs</li>
              <li>Set notebooks for experiments</li>
            </ul>
          `,
          examples: [
            'Fetch data and cache locally',
            'Create features (momentum, sentiment)',
            'Prepare backtesting notebook'
          ]
        },
        {
          title: 'How to Use: Signals & Backtests',
          content: `
            <h3>From data to insights</h3>
            <ol>
              <li>Collect OHLCV + headlines</li>
              <li>Classify sentiment (LLM) with validation</li>
              <li>Create toy signals and thresholds</li>
              <li>Run a simple backtest with guardrails</li>
            </ol>
          `,
          examples: [
            'Scrape headlines and classify sentiment',
            'Create simple momentum signals',
            'Run a toy backtest with guardrails'
          ]
        },
        {
          title: 'Best Practices & Ethics',
          content: `
            <h3>Responsible research</h3>
            <ul>
              <li>Avoid overfitting and data leakage</li>
              <li>Account for non-stationarity</li>
              <li>Document methods and disclaimers</li>
            </ul>
          `,
          examples: [
            'Add disclaimers to your UI',
            'Design experiment protocols',
            'Share reproducible notebooks'
          ]
        }
      ]
    },
    5: { // Module 6: Capstone Projects & Portfolio
      title: 'Capstone Projects & Portfolio',
      lessons: [
        {
          title: 'Introduction & Briefs',
          content: `
            <h3>Pick your capstone</h3>
            <ul>
              <li>Image campaign</li>
              <li>Video explainer</li>
              <li>Automation bot</li>
            </ul>
          `,
          examples: [
            'Scope the project and deliverables',
            'Define success metrics',
            'Create a timeline and checklist'
          ]
        },
        {
          title: 'Setup & Planning',
          content: `
            <h3>Assets and workflows</h3>
            <ul>
              <li>Collect references and brand assets</li>
              <li>Plan tools and pipelines</li>
              <li>Set progress tracking and reviews</li>
            </ul>
          `,
          examples: [
            'Build a project brief',
            'Create a workflow diagram',
            'Set milestones and reviews'
          ]
        },
        {
          title: 'Delivery & Portfolio',
          content: `
            <h3>Polish and publish</h3>
            <ul>
              <li>Prepare final exports and docs</li>
              <li>Create case study pages</li>
              <li>Collect feedback and iterate</li>
            </ul>
          `,
          examples: [
            'Publish a portfolio entry',
            'Share deliverables with clients',
            'Document lessons learned'
          ]
        }
      ]
    },
    6: { // Module 7: Coding with A.I
      title: 'Coding with A.I',
      lessons: [
        {
          title: 'Introduction',
          content: `
            <h3>Use AI as a coding partner</h3>
            <ul>
              <li>Plan features and break tasks down</li>
              <li>Generate scaffolds and boilerplate</li>
              <li>Write tests and refactor iteratively</li>
            </ul>
          `,
          examples: [
            'Turn a product idea into task list',
            'Generate a project scaffold',
            'Refactor code with AI suggestions'
          ]
        },
        {
          title: 'Installation & Setup',
          content: `
            <h3>Dev environment</h3>
            <ul>
              <li>Install Node.js, Git, and VS Code</li>
              <li>Configure an AI assistant or API keys</li>
              <li>Create a repo and run a starter project</li>
            </ul>
            <pre>npm create vite@latest myapp -- --template react-ts\ncd myapp && npm install && npm run dev</pre>
          `,
          examples: [
            'Initialize repo and CI',
            'Set environment variables securely',
            'Run dev server and tests'
          ]
        },
        {
          title: 'How to Use: Prompting for Code',
          content: `
            <h3>Prompt flows</h3>
            <ol>
              <li>Describe the feature and constraints</li>
              <li>Ask for plan + file changes</li>
              <li>Generate code with tests</li>
              <li>Run and fix errors iteratively</li>
            </ol>
            <p>Request diffs and function signatures to keep changes surgical.</p>
          `,
          examples: [
            'Add a component with props and tests',
            'Create an API route with validation',
            'Implement a utility with benchmarks'
          ]
        },
        {
          title: 'Best Practices: Testing & Refactoring',
          content: `
            <h3>Quality and maintainability</h3>
            <ul>
              <li>Red–Green–Refactor loop with AI help</li>
              <li>Use typed interfaces and small functions</li>
              <li>Document decisions and create checklists</li>
            </ul>
          `,
          examples: [
            'Write unit tests first',
            'Refactor to remove duplication',
            'Add docs and code comments where needed'
          ]
        }
      ]
    }
  };

  const resources = [
    {
      type: 'video',
      title: 'AI Tools Mastery Introduction',
      duration: '15 min',
      description: 'Overview of the complete AI Tools Mastery program'
    },
    {
      type: 'document',
      title: 'Course Handbook & Guidelines',
      duration: '30 min read',
      description: 'Complete guide to course structure and requirements'
    },
    {
      type: 'video',
      title: 'Setting Up Your AI Toolkit',
      duration: '45 min',
      description: 'Step-by-step setup for all AI tools and platforms'
    },
    {
      type: 'document',
      title: 'Enterprise AI Best Practices',
      duration: '20 min read',
      description: 'Professional guidelines for AI tool usage in business'
    }
  ];

  // Module-specific recommended YouTube videos (opens in a new tab)
  const moduleVideoLinks: { [index: number]: { label: string; url: string }[] } = {
    0: [
      { label: 'Andrej Karpathy — Zero to Hero Playlist', url: 'https://www.youtube.com/watch?v=VMj-3S1tku0&list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ' },
      { label: 'OpenAI — Official YouTube Channel', url: 'https://www.youtube.com/@OpenAI' },
      { label: 'AssemblyAI — Prompt Engineering Tips', url: 'https://www.youtube.com/@AssemblyAI' }
    ],
    1: [
      { label: 'OpenAI — DALL·E 3 Overview', url: 'https://www.youtube.com/@OpenAI' },
      { label: 'Stability AI — Stable Diffusion Tutorials', url: 'https://www.youtube.com/@StabilityAI' }
    ],
    2: [
      { label: 'Runway ML — Gen-2 Tutorials', url: 'https://www.youtube.com/@RunwayML' },
      { label: 'Luma AI — Dream Machine', url: 'https://www.youtube.com/@LumaLabsAI' },
      { label: 'Pika Labs — Motion Design', url: 'https://www.youtube.com/@PikaLabs' }
    ],
    3: [
      { label: 'n8n — Automation Tutorials', url: 'https://www.youtube.com/@n8n-io' },
      { label: 'Zapier — Integrations & Workflows', url: 'https://www.youtube.com/@Zapier' },
      { label: 'Make.com — Advanced Scenarios', url: 'https://www.youtube.com/@MakeHQ' }
    ],
    4: [
      { label: 'QuantConnect — Quant Tutorials', url: 'https://www.youtube.com/@QuantConnect' },
      { label: 'Sentdex — Python & Finance', url: 'https://www.youtube.com/@sentdex' },
      { label: 'DataTalks.Club — ML Best Practices', url: 'https://www.youtube.com/@DataTalksClub' }
    ],
    5: [
      { label: 'Andrej Karpathy — Project Tips', url: 'https://www.youtube.com/@AndrejKarpathy' },
      { label: 'Runway ML — Case Studies', url: 'https://www.youtube.com/@RunwayML' }
    ],
    6: [
      { label: 'Andrej Karpathy — Let’s build GPT', url: 'https://www.youtube.com/watch?v=kCc8FmEb1nY' },
      { label: 'Fireship — Coding with AI Assistants', url: 'https://www.youtube.com/@Fireship' },
      { label: 'OpenAI — Updates & Demos', url: 'https://www.youtube.com/@OpenAI' }
    ]
  };

  // Study Material View Component
  const StudyMaterialView = () => {
    const currentModule = studyMaterials[activeModule];
    const currentLesson = currentModule?.lessons[currentTopic];

    if (!currentModule || !currentLesson) {
      return (
        <div className="text-center text-white">
          <p>Study material not available for this module yet.</p>
          <button 
            onClick={() => setIsStudying(false)}
            className="mt-4 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg"
          >
            Back to Modules
          </button>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-black relative overflow-y-auto">
        {/* MagnetLines Background */}
        <div className="fixed inset-0 z-0">
          <MagnetLines 
            rows={12}
            columns={12}
            containerSize="100vw"
            lineColor="#666666"
            lineWidth="0.5vmin"
            lineHeight="4vmin"
            baseAngle={0}
            style={{ 
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              opacity: 0.3
            }}
          />
        </div>

        {/* Study Material Header */}
        <div className="relative z-10 bg-black/40 backdrop-blur-sm border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setIsStudying(false)}
                  className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2"
                >
                  <ArrowLeftIcon className="h-5 w-5" />
                  <span>Back to Modules</span>
                </button>
                <div>
                  <h1 className="text-2xl font-bold text-white">{currentModule.title}</h1>
                  <p className="text-gray-300">{currentLesson.title}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-sm text-gray-400">
                  Lesson {currentTopic + 1} of {currentModule.lessons.length}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Study Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-black/60 backdrop-blur-sm rounded-xl p-8 border border-gray-800">
                <div className="prose prose-invert max-w-none">
                  {currentLesson.title && currentLesson.title.toLowerCase().includes('box model') && (
                    <div className="mb-3">
                      <img
                        src={teacherSticker}
                        alt="Teacher"
                        className="rounded"
                        style={{ width: 28, height: 28, objectFit: 'contain' }}
                      />
                    </div>
                  )}
                  <div 
                    dangerouslySetInnerHTML={{ __html: currentLesson.content }}
                    className="text-gray-300 leading-relaxed"
                    style={{
                      fontSize: '16px',
                      lineHeight: '1.7'
                    }}
                  />
                </div>

                {/* Practical Examples Section */}
                <div className="mt-8 p-6 bg-gray-900/60 rounded-lg border border-gray-700">
                  <div className="flex items-center space-x-2 mb-4">
                    <LightBulbIcon className="h-6 w-6 text-yellow-400" />
                    <h3 className="text-xl font-semibold text-white">Practical Examples</h3>
                  </div>
                  <div className="space-y-3">
                    {currentLesson.examples.map((example, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300">{example}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation */}
                <div className="mt-8 flex justify-between items-center">
                  <button
                    onClick={() => setCurrentTopic(Math.max(0, currentTopic - 1))}
                    disabled={currentTopic === 0}
                    className="bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 disabled:text-gray-500 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2"
                  >
                    <ArrowLeftIcon className="h-4 w-4" />
                    <span>Previous Lesson</span>
                  </button>
                  
                  <div className="text-center">
                    <div className="text-sm text-gray-400 mb-2">Progress</div>
                    <div className="w-48 bg-gray-800 rounded-full h-2">
                      <div 
                        className="bg-gray-600 h-2 rounded-full transition-all duration-300" 
                        style={{ width: `${((currentTopic + 1) / currentModule.lessons.length) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  <button
                    onClick={() => setCurrentTopic(Math.min(currentModule.lessons.length - 1, currentTopic + 1))}
                    disabled={currentTopic === currentModule.lessons.length - 1}
                    className="bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 disabled:text-gray-500 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2"
                  >
                    <span>Next Lesson</span>
                    <ChevronRightIcon className="h-4 w-4" />
                  </button>
                </div>

                {/* Recommended Videos */}
                {moduleVideoLinks[activeModule] && moduleVideoLinks[activeModule].length > 0 && (
                  <div className="mt-8 bg-gray-900/40 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold text-white">Recommended Videos</h3>
                      <span className="text-xs text-gray-400">Opens on YouTube</span>
                    </div>
                    <div className="space-y-2">
                      {moduleVideoLinks[activeModule].map((v, idx) => (
                        <a
                          key={idx}
                          href={v.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-800/40 transition-colors text-blue-300"
                        >
                          <PlayIcon className="h-4 w-4" />
                          <span>{v.label}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* Mark as Complete Button removed as requested */}

                {/* Module Completed Message */}
                {getModuleProgress(currentModule.id).completed && (
                  <div className="mt-6 text-center">
                    <div className="bg-green-900/40 border border-green-700 rounded-lg p-4">
                      <div className="flex items-center justify-center space-x-2 text-green-400">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="font-semibold">Module Completed!</span>
                      </div>
                      <p className="text-green-300 text-sm mt-2">Great job! You've successfully completed this module.</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-black/60 backdrop-blur-sm rounded-xl p-6 border border-gray-800 sticky top-8 min-w-[350px]">
                <h3 className="text-lg font-semibold text-white mb-4">Module Lessons</h3>
                <div className="space-y-2">
                  {currentModule.lessons.map((lesson, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTopic(index)}
                      className={`w-full text-left p-3 rounded-lg transition-colors ${
                        currentTopic === index
                          ? 'bg-gray-700 text-white'
                          : 'bg-gray-900/40 text-gray-400 hover:bg-gray-800/40 hover:text-white'
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0 mt-0.5 ${
                          currentTopic === index ? 'bg-white text-black' : 'bg-gray-700 text-gray-300'
                        }`}>
                          {index + 1}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium leading-tight">{lesson.title}</div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Try It Now Section */}
                <div className="mt-6 p-4 bg-blue-900/30 border border-blue-500/30 rounded-lg">
                  <h4 className="text-blue-300 font-semibold mb-3">🚀 Try It Now!</h4>
                  <p className="text-gray-300 text-sm mb-4">Ready to create your own professional content? Try these cutting-edge AI tools:</p>
                  
                  {/* Image Generation Tools */}
                  <div className="mb-4">
                    <h5 className="text-blue-200 text-xs font-medium mb-2 uppercase tracking-wide">🎨 Image Generation</h5>
                    <div className="flex flex-col gap-2">
                      <StarBorder 
                        as="a" 
                        href="https://openai.com/dall-e-3" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block text-center"
                        color="cyan"
                        speed="5s"
                      >
                        <div className="flex items-center justify-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                          </svg>
                          Try DALL-E 3
                        </div>
                      </StarBorder>
                      <StarBorder 
                        as="a" 
                        href="https://www.midjourney.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block text-center"
                        color="purple"
                        speed="5s"
                      >
                        <div className="flex items-center justify-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                          </svg>
                          Try Midjourney
                        </div>
                      </StarBorder>
                    </div>
                  </div>

                  {/* Video Generation Tools */}
                  <div className="mb-4">
                    <h5 className="text-green-200 text-xs font-medium mb-2 uppercase tracking-wide">🎬 Video Generation</h5>
                    <div className="flex flex-col gap-2">
                      <StarBorder 
                        as="a" 
                        href="https://veo.google" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block text-center"
                        color="green"
                        speed="5s"
                      >
                        <div className="flex items-center justify-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                          </svg>
                          Try Veo 3 (Google)
                        </div>
                      </StarBorder>
                      <StarBorder 
                        as="a" 
                        href="https://klingai.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block text-center"
                        color="orange"
                        speed="5s"
                      >
                        <div className="flex items-center justify-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                          </svg>
                          Try Kling AI
                        </div>
                      </StarBorder>
                      <StarBorder 
                        as="a" 
                        href="https://runwayml.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block text-center"
                        color="pink"
                        speed="5s"
                      >
                        <div className="flex items-center justify-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                          </svg>
                          Try Runway ML
                        </div>
                      </StarBorder>
                    </div>
                  </div>

                  {/* Automation Tools */}
                  <div>
                    <h5 className="text-yellow-200 text-xs font-medium mb-2 uppercase tracking-wide">⚡ Automation & Workflows</h5>
                    <div className="flex flex-col gap-2">
                      <StarBorder 
                        as="a" 
                        href="https://n8n.io" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block text-center"
                        color="yellow"
                        speed="5s"
                      >
                        <div className="flex items-center justify-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                          </svg>
                          Try n8n Automation
                        </div>
                      </StarBorder>
                      <StarBorder 
                        as="a" 
                        href="https://zapier.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block text-center"
                        color="indigo"
                        speed="5s"
                      >
                        <div className="flex items-center justify-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                          </svg>
                          Try Zapier
                        </div>
                      </StarBorder>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // If studying, show study material view
  if (isStudying) {
    return <StudyMaterialView />;
  }

  return (
    <div className="min-h-screen bg-black relative overflow-y-auto">
      {/* MagnetLines Background */}
      <div className="fixed inset-0 z-0">
        <MagnetLines 
          rows={12}
          columns={12}
          containerSize="100vw"
          lineColor="#666666"
          lineWidth="0.5vmin"
          lineHeight="4vmin"
          baseAngle={0}
          style={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            opacity: 0.3
          }}
        />
      </div>

      {/* Logo Loop - Left Side */}
      <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-20 hidden lg:block">
        <LogoLoop 
          direction="up"
          speed={25}
          height="500px"
          width="80px"
          logoHeight={60}
          gap={30}
          pauseOnHover={true}
          scaleOnHover={true}
          fadeOut={true}
          fadeOutColor="rgba(0, 0, 0, 0.9)"
          logos={[
            { 
              node: (
                <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-10 h-10" fill="#10a37f">
                    <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142-.0852 4.783-2.7582a.7712.7712 0 0 0 .7806 0l5.8428 3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"/>
                  </svg>
                </div>
              ),
              title: "OpenAI DALL-E 3", 
              href: "https://openai.com/dall-e-3" 
            },
            { 
              node: (
                <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-10 h-10" fill="#000">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16c-.169 1.858-.896 3.433-2.043 4.568-.686.68-1.509 1.154-2.415 1.395-.906.24-1.857.24-2.763 0-.906-.241-1.729-.715-2.415-1.395C6.785 11.593 6.058 10.018 5.889 8.16c-.084-.927-.084-1.857 0-2.784.169-1.858.896-3.433 2.043-4.568C8.618.128 9.441-.346 10.347-.587c.906-.24 1.857-.24 2.763 0 .906.241 1.729.715 2.415 1.395 1.147 1.135 1.874 2.71 2.043 4.568.084.927.084 1.857 0 2.784z"/>
                  </svg>
                </div>
              ),
              title: "Midjourney", 
              href: "https://www.midjourney.com" 
            },
            { 
              node: (
                <div className="w-14 h-14 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">R</span>
                </div>
              ),
              title: "Runway ML", 
              href: "https://runwayml.com" 
            },
            { 
              node: (
                <div className="w-14 h-14 bg-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
              ),
              title: "Synthesia", 
              href: "https://www.synthesia.io" 
            },
            { 
              node: (
                <div className="w-14 h-14 bg-orange-500 rounded-lg flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-10 h-10 text-white" fill="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
              ),
              title: "Claude AI", 
              href: "https://console.anthropic.com" 
            },
            { 
              node: (
                <div className="w-14 h-14 bg-orange-400 rounded-lg flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-10 h-10 text-white" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
              ),
              title: "Zapier", 
              href: "https://zapier.com" 
            },
            { 
              node: (
                <div className="w-14 h-14 bg-red-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">n8n</span>
                </div>
              ),
              title: "n8n", 
              href: "https://n8n.io" 
            },
            { 
              node: (
                <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-10 h-10 text-white" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
              ),
              title: "ChatGPT", 
              href: "https://chat.openai.com" 
            }
          ]}
        />
      </div>

      {/* Header */}
      <div className="relative z-10 bg-black/40 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate('/student-portal')}
                className="text-gray-400 hover:text-white transition-colors"
              >
                ← Back to Portal
              </button>
              <div>
                <h1 className="text-3xl font-bold text-white">A.I Tools Mastery</h1>
                <p className="text-gray-300">Professional Certification Program</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">24</div>
                <div className="text-sm text-gray-400">Weeks</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-sm text-gray-400">AI Tools</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">12</div>
                <div className="text-sm text-gray-400">Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Course Overview */}
            <div className="bg-black/60 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
              <h2 className="text-2xl font-bold text-white mb-4">Course Overview</h2>
              <p className="text-gray-300 mb-6">
                Master 50+ cutting-edge AI tools with hands-on industry projects. From DALL-E 3 & Midjourney to Claude API & enterprise automation. 
                Includes 1-on-1 mentorship, portfolio development, job placement assistance, and lifetime access to updates.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-800/60 rounded-lg p-4 text-center border border-gray-700">
                  <AcademicCapIcon className="h-8 w-8 text-gray-300 mx-auto mb-2" />
                  <div className="text-white font-semibold">Professional Certification</div>
                  <div className="text-sm text-gray-400">Industry-Recognized</div>
                </div>
                <div className="bg-gray-800/60 rounded-lg p-4 text-center border border-gray-700">
                  <StarIcon className="h-8 w-8 text-gray-300 mx-auto mb-2" />
                  <div className="text-white font-semibold">Lifetime Access</div>
                  <div className="text-sm text-gray-400">Course Updates</div>
                </div>
              </div>
            </div>

            {/* Course Modules */}
            <div className="bg-black/60 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
              <h2 className="text-2xl font-bold text-white mb-6">Course Modules</h2>
              <div className="space-y-4">
                {modules.map((module, index) => (
                  <div
                    key={module.id}
                    className={`border rounded-lg p-4 cursor-pointer transition-all ${
                      activeModule === index
                        ? 'border-gray-600 bg-gray-800/60'
                        : 'border-gray-800 bg-gray-900/40 hover:bg-gray-800/40'
                    }`}
                    onClick={() => setActiveModule(index)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          module.completed ? 'bg-gray-600' : 'bg-gray-700'
                        }`}>
                          {getModuleProgress(module.id).completed ? (
                            <CheckCircleIcon className="h-6 w-6 text-green-400" />
                          ) : (
                            <span className="text-white font-semibold">{module.id}</span>
                          )}
                        </div>
                        <div>
                          <h3 className="text-white font-semibold">{module.title}</h3>
                          <p className="text-gray-400 text-sm">{module.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <div className="text-sm text-gray-400">{module.duration}</div>
                          <div className="text-xs text-gray-500">{getModuleProgress(module.id).progress}% Complete</div>
                        </div>
                        <ChevronRightIcon className="h-5 w-5 text-gray-500" />
                      </div>
                    </div>
                    
                    {activeModule === index && (
                      <div className="mt-4 pt-4 border-t border-gray-800">
                        <h4 className="text-white font-medium mb-3">Topics Covered:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {module.topics.map((topic, topicIndex) => (
                            <div key={topicIndex} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                              <span className="text-gray-400 text-sm">{topic}</span>
                            </div>
                          ))}
                        </div>
                        <div className="mt-4 flex space-x-3">
                          <button 
                            onClick={() => {
                              setIsStudying(true);
                              setCurrentTopic(0);
                            }}
                            className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-2"
                          >
                            <PlayIcon className="h-4 w-4" />
                            <span>Start Module</span>
                          </button>
                          <button className="bg-gray-800/60 hover:bg-gray-700/60 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors border border-gray-700">
                            View Materials
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Resources */}
            <div className="bg-black/60 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-4">Quick Resources</h3>
              <div className="space-y-3">
                {resources.map((resource, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gray-900/40 rounded-lg hover:bg-gray-800/40 transition-colors cursor-pointer border border-gray-800">
                    {resource.type === 'video' ? (
                      <PlayIcon className="h-5 w-5 text-gray-400" />
                    ) : (
                      <DocumentTextIcon className="h-5 w-5 text-gray-400" />
                    )}
                    <div className="flex-1">
                      <div className="text-white text-sm font-medium">{resource.title}</div>
                      <div className="text-gray-500 text-xs">{resource.duration}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Progress Overview */}
            <div className="bg-black/60 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-4">Your Progress</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400">Overall Progress</span>
                    <span className="text-white">{calculateOverallProgress()}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full transition-all duration-300" style={{ width: `${calculateOverallProgress()}%` }}></div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-white">{getCompletedModulesCount()}</div>
                    <div className="text-sm text-gray-400">Modules Completed</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">{modules.length}</div>
                    <div className="text-sm text-gray-400">Total Modules</div>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default AIStudyMaterial;
/*
    3: { // Module 4: AI Agents & Automations
      title: 'AI Agents & Automations',
      lessons: [
        {
          title: 'Build Agents in n8n',
          content: `
            <h3>Overview</h3>
            <p>Use n8n to orchestrate AI calls with triggers, functions, and HTTP nodes.</p>
            <div class="bg-gray-900/50 border border-gray-700 rounded p-3 mb-4">
              <strong>Workflow Steps</strong>
              <pre class="whitespace-pre-wrap break-words overflow-x-auto text-sm text-gray-100">1) Trigger: Webhook or Schedule
2) Fetch data: HTTP Request
3) Process: Code node (JavaScript)
4) AI: HTTP to model API (JSON in/out)
5) Store: Database or Google Sheets
6) Notify: Email/Slack</pre>
            </div>
            <div class="bg-gray-900/50 border border-gray-700 rounded p-3">
              <strong>Prompt Template</strong>
              <pre class="whitespace-pre-wrap break-words overflow-x-auto text-sm text-gray-100">{"role":"Operations agent","intent":"Summarize new entries","context":"Source: webhook payload","constraints":["Return JSON","Include timestamps"]}</pre>
            </div>
          `,
          examples: [
            'Webhook → Summarize → Post to Slack',
            'Scheduled fetch → Transform → Append to Sheet',
            'API call → Validate → Notify'
          ]
        },
        {
          title: 'Build Agents in Python',
          content: `
            <h3>Libraries</h3>
            <ul>
              <li>OpenAI/Anthropic SDKs</li>
              <li>LangChain (chains/tools)</li>
              <li>Requests/HTTPX for API calls</li>
            </ul>
            <div class="bg-gray-900/50 border border-gray-700 rounded p-3 mb-4">
              <strong>Agent Skeleton</strong>
              <pre class="whitespace-pre-wrap break-words overflow-x-auto text-xs text-gray-100">import os
import requests

API_URL = "https://api.openai.com/v1/chat/completions"
API_KEY = os.getenv("OPENAI_API_KEY")

def run_agent(context):
    headers = {"Authorization": f"Bearer {API_KEY}", "Content-Type": "application/json"}
    prompt = {
        "role": "Operations agent",
        "intent": "Process input and return JSON",
        "context": context,
        "constraints": ["Return valid JSON"]
    }
    body = {"model": "gpt-4o-mini", "messages": [{"role": "user", "content": str(prompt)}]}
    r = requests.post(API_URL, headers=headers, json=body)
    return r.json()

print(run_agent({"records": 10}))</pre>
            </div>
            <p class="text-gray-400 text-sm">Note: Replace model and endpoint with your provider; store secrets securely.</p>
          `,
          examples: [
            'Fetch → Analyze → Return structured JSON',
            'Integrate with a database',
            'Add a tool for web search'
          ]
        }
      ]
    },
    4: { // Module 5: Trading & Stock Insights with AI
      title: 'Trading & Stock Insights with AI',
      lessons: [
        {
          title: 'Introduction & Disclaimer (Grok Overview)',
          content: `
            <h3>Important Disclaimer</h3>
            <p>This module is education-focused. Nothing here is financial advice or a prediction. Always do your own research.</p>
            <h3>What is Grok?</h3>
            <p>Grok (by xAI) is a conversational system designed for real-time knowledge and analysis. Use it to explore news, fundamentals, and scenarios.</p>
            <h3>Using Grok for Market Research</h3>
            <div class="bg-gray-900/50 border border-gray-700 rounded p-3 mb-4">
              <strong>Research Prompts</strong>
              <pre class="whitespace-pre-wrap break-words overflow-x-auto text-sm text-gray-100">1) "Summarize recent earnings and guidance for <TICKER>. List risks and catalysts."
2) "Compare valuation metrics (P/E, EV/EBITDA) of <TICKER> vs peers."
3) "Aggregate credible news on <TICKER> over the last week. Classify positive/neutral/negative."
4) "Simulate three scenarios for next quarter revenue under assumptions A/B/C; show impacts."</pre>
            </div>
            <h3>Guardrails</h3>
            <ul>
              <li>Do not rely on outputs as predictions</li>
              <li>Use it to explore and summarize, not to trade</li>
              <li>Cross-check data with official filings</li>
            </ul>
          `,
          examples: [
            'Summarize an earnings call safely',
            'Scenario analysis with assumptions',
            'Peer comparison of fundamentals'
          ]
        }
      ]
    },
    6: { // Module 7: Coding with A.I
      title: 'Coding with A.I',
      lessons: [
        {
          title: 'Introduction to Programming Languages',
          content: `
            <h3>Overview</h3>
            <ul>
              <li>Python: scripting, data, AI tooling</li>
              <li>Java: enterprise apps, strong typing</li>
              <li>JavaScript/TypeScript: web and tooling</li>
            </ul>
          `,
          examples: [
            'Pick the right language for a task',
            'Set up environment and package manager',
            'Write a minimal program'
          ]
        },
        {
          title: 'Teach Python: Basics',
          content: `
            <h3>Core Syntax</h3>
            <div class="bg-gray-900/50 border border-gray-700 rounded p-3 mb-4">
              <pre class="whitespace-pre-wrap break-words overflow-x-auto text-sm text-gray-100"># variables, functions, loops
def add(a, b):
    return a + b

for i in range(3):
    print(add(i, i+1))</pre>
            </div>
            <h3>Prompt to Generate Code</h3>
            <div class="bg-gray-900/50 border border-gray-700 rounded p-3">
              <pre class="whitespace-pre-wrap break-words overflow-x-auto text-sm text-gray-100">"You are a senior Python tutor. Write a function to parse CSV and return JSON list. Include error handling and a small test."</pre>
            </div>
          `,
          examples: [
            'Write functions with tests',
            'Use venv and pip',
            'Handle errors and logging'
          ]
        },
        {
          title: 'Teach Java: Basics',
          content: `
            <h3>Core Syntax</h3>
            <div class="bg-gray-900/50 border border-gray-700 rounded p-3 mb-4">
              <pre class="whitespace-pre-wrap break-words overflow-x-auto text-sm text-gray-100">public class Main {
  static int add(int a, int b) { return a + b; }
  public static void main(String[] args) {
    for (int i = 0; i < 3; i++) System.out.println(add(i, i+1));
  }
}</pre>
            </div>
            <h3>Prompt to Generate Code</h3>
            <div class="bg-gray-900/50 border border-gray-700 rounded p-3">
              <pre class="whitespace-pre-wrap break-words overflow-x-auto text-sm text-gray-100">"You are a senior Java tutor. Create a REST endpoint with Spring Boot that returns a paginated list. Include DTOs and unit tests."</pre>
            </div>
          `,
          examples: [
            'Maven/Gradle setup',
            'Write REST controllers',
            'Unit tests with JUnit'
          ]
        },
        {
          title: 'Coding with AI: Workflow',
          content: `
            <h3>Workflow</h3>
            <ul>
              <li>Write specs and use RICE for clarity</li>
              <li>Ask for scaffolds, then refine with tests</li>
              <li>Iterate: critique → revise → finalize</li>
            </ul>
            <div class="bg-gray-900/50 border border-gray-700 rounded p-3">
              <strong>Good Prompts</strong>
              <pre class="whitespace-pre-wrap break-words overflow-x-auto text-sm text-gray-100">1) "Generate data model (fields/types) and CRUD API in Flask; include unit tests."
2) "Refactor this function to be pure and add edge case tests."
3) "Explain time complexity and propose an O(n) alternative."</pre>
            </div>
          `,
          examples: [
            'Prompt for scaffolds',
            'Test-first refinement',
            'Code review with AI'
          ]
        }
      ]
    },
*/