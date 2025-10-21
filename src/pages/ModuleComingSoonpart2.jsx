import React from 'react';

// Topic 6: Authentication & Environment Variable Management
export function Module3Topic6Lesson() {
  return (
    <div className="space-y-6 text-sm">
      <h2 className="text-xl font-semibold">🧩 Topic 6: Authentication & Environment Variable Management</h2>

      <div>
        <h3 className="text-base font-semibold">Lesson</h3>
        <p className="text-gray-700 dark:text-gray-300">Authentication ensures only authorized users can access certain parts of your web app, while environment variable management keeps sensitive data like API keys, passwords, and database URIs secure.</p>
        <p className="text-gray-700 dark:text-gray-300">In this lesson, you’ll learn how to implement user authentication (login, logout, registration) in Django and manage environment variables safely using <code>.env</code> files.</p>
      </div>

      <div>
        <h3 className="text-base font-semibold">🔐 Understanding Authentication in Django</h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
          <li>User model (with username, password, and permissions)</li>
          <li>Forms for login and registration</li>
          <li>Session management</li>
          <li>Middleware for user tracking</li>
        </ul>
        <p className="text-gray-700 dark:text-gray-300">Django automatically hashes passwords and manages sessions, saving you from manual implementation.</p>
      </div>

      <div>
        <h3 className="text-base font-semibold">🌿 Environment Variables</h3>
        <p className="text-gray-700 dark:text-gray-300">Environment variables store sensitive credentials like:</p>
        <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
          <li><code>SECRET_KEY</code></li>
          <li>Database credentials</li>
          <li>Third-party API keys</li>
        </ul>
        <p className="text-gray-700 dark:text-gray-300">You should never hard-code such values. Instead, store them in a <code>.env</code> file and load them dynamically.</p>
      </div>

      <div>
        <h3 className="text-base font-semibold">⚙️ Setup Steps</h3>
        <p className="text-gray-700 dark:text-gray-300">Install dependency:</p>
        <pre className="rounded bg-gray-900 text-gray-100 p-4 overflow-auto">{`pip install python-decouple`}</pre>

        <p className="text-gray-700 dark:text-gray-300">Create <code>.env</code> file in your root folder:</p>
        <pre className="rounded bg-gray-900 text-gray-100 p-4 overflow-auto">{`SECRET_KEY=your_django_secret_key
DEBUG=True
DB_NAME=product_db`}</pre>

        <p className="text-gray-700 dark:text-gray-300">Update <code>settings.py</code> to use environment variables:</p>
        <pre className="rounded bg-gray-900 text-gray-100 p-4 overflow-auto">{`from decouple import config

SECRET_KEY = config('SECRET_KEY')
DEBUG = config('DEBUG', cast=bool)
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': config('DB_NAME', default='db.sqlite3'),
    }
}`}</pre>

        <p className="text-gray-700 dark:text-gray-300">Implement authentication routes in your app using Django’s User model and auth views.</p>
      </div>
    </div>
  );
}

export function Module3Topic6Syntax() {
  return (
    <div className="space-y-6 text-sm">
      <h3 className="text-base font-semibold">Django Authentication — Syntax</h3>
      <div>
        <p className="text-gray-700 dark:text-gray-300">models.py</p>
        <pre className="rounded bg-gray-900 text-gray-100 p-4 overflow-auto">{`from django.contrib.auth.models import User`}</pre>
      </div>

      <div>
        <p className="text-gray-700 dark:text-gray-300">views.py</p>
        <pre className="rounded bg-gray-900 text-gray-100 p-4 overflow-auto">{`from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect


def login_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user:
            login(request, user)
            return redirect('home')
        else:
            return render(request, 'login.html', {'error': 'Invalid credentials'})
    return render(request, 'login.html')


def logout_view(request):
    logout(request)
    return redirect('login')


@login_required
def home_view(request):
    return render(request, 'home.html')
`}</pre>
      </div>

      <div>
        <p className="text-gray-700 dark:text-gray-300">settings.py (Using environment variables)</p>
        <pre className="rounded bg-gray-900 text-gray-100 p-4 overflow-auto">{`from decouple import config

SECRET_KEY = config('SECRET_KEY')
DEBUG = config('DEBUG', cast=bool)`}</pre>
      </div>
    </div>
  );
}

// Live Code builder for Module 3 Topic 6 — shows project structure & templates
export function buildModule3Topic6LiveFiles() {
  return {
    'index.html': `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Topic 6: Django Auth & .env</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div class="container">
      <h1>Django Authentication & Environment Variables</h1>
      <p>This sandbox displays code files for a Django auth demo and .env usage. Open the file explorer to view Python templates and settings.</p>
      <section>
        <h2>Login Form Preview</h2>
        <form method="POST" class="card">
          <input type="text" name="username" placeholder="Username" required />
          <input type="password" name="password" placeholder="Password" required />
          <button type="submit">Login</button>
          <p class="note">This is a static preview. In Django, the form is processed server-side.</p>
        </form>
      </section>
    </div>
  </body>
</html>`,
    'styles.css': `*{box-sizing:border-box}body{font-family:system-ui,Segoe UI,Arial,sans-serif;background:#f8fafc;color:#111827;margin:0;padding:24px}.container{max-width:860px;margin:0 auto}.card{display:grid;gap:10px;padding:16px;border:1px solid #e5e7eb;border-radius:8px;background:white}input,button{padding:10px;border:1px solid #cbd5e1;border-radius:6px}button{background:#111827;color:white;cursor:pointer}`,

    // .env
    'auth_demo/.env': `SECRET_KEY=your_django_secret_key\nDEBUG=True\nDB_NAME=product_db`,

    // app views & urls
    'auth_demo/auth_app/views.py': `from django.contrib.auth import authenticate, login, logout\nfrom django.contrib.auth.decorators import login_required\nfrom django.shortcuts import render, redirect\n\n\ndef login_view(request):\n    if request.method == 'POST':\n        username = request.POST['username']\n        password = request.POST['password']\n        user = authenticate(request, username=username, password=password)\n        if user:\n            login(request, user)\n            return redirect('home')\n        else:\n            return render(request, 'login.html', {'error': 'Invalid credentials'})\n    return render(request, 'login.html')\n\n\ndef logout_view(request):\n    logout(request)\n    return redirect('login')\n\n\n@login_required\ndef home_view(request):\n    return render(request, 'home.html')`,

    'auth_demo/auth_app/urls.py': `from django.urls import path\nfrom . import views\n\nurlpatterns = [\n    path('login/', views.login_view, name='login'),\n    path('logout/', views.logout_view, name='logout'),\n    path('', views.home_view, name='home'),\n]`,

    // templates
    'auth_demo/auth_app/templates/login.html': `<form method="POST">\n  {% csrf_token %}\n  <input type="text" name="username" placeholder="Username" required />\n  <input type="password" name="password" placeholder="Password" required />\n  <button type="submit">Login</button>\n  {% if error %}\n    <p>{{ error }}</p>\n  {% endif %}\n</form>`,

    'auth_demo/auth_app/templates/home.html': `<h1>Welcome, {{ user.username }}</h1>\n<a href="{% url 'logout' %}">Logout</a>`,

    // project settings & urls
    'auth_demo/auth_demo/settings.py': `from decouple import config\nSECRET_KEY = config('SECRET_KEY')\nDEBUG = config('DEBUG', cast=bool)\n# Database sample\nDATABASES = {\n    'default': {\n        'ENGINE': 'django.db.backends.sqlite3',\n        'NAME': config('DB_NAME', default='db.sqlite3'),\n    }\n}`,

    'auth_demo/auth_demo/urls.py': `from django.contrib import admin\nfrom django.urls import path, include\nurlpatterns = [\n  path('admin/', admin.site.urls),\n  path('', include('auth_app.urls')),\n]`,

    // manage.py placeholder for structure context
    'auth_demo/manage.py': `# Placeholder manage.py for structure preview\n# Use: python manage.py runserver\n# Actual content generated by \"django-admin startproject\"`,
  };
}

export function buildModule4Topic1LiveFiles() {
  return {
    'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Module 4 — Fullstack Integration</title>
  <link rel="stylesheet" href="css/styles.css" />
  <script src="https://cdn.tailwindcss.com"></script>
  <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body>
  <div id="root"></div>
  <script type="text/babel" src="App.js"></script>
</body>
</html>`,

    'css/styles.css': `*{box-sizing:border-box}body{font-family:system-ui,sans-serif;background:#f8fafc;color:#111827;margin:0;padding:24px}.container{max-width:860px;margin:0 auto}.card{padding:16px;border:1px solid #e5e7eb;border-radius:8px;background:white}`,

    // Preview App.js (inlined getProducts for browser demo)
    'App.js': `const { useEffect, useState } = React;

function getProducts(){
  const url = 'http://localhost:8000/products/';
  return fetch(url)
    .then(res => res.json())
    .then(data => ({ data: Array.isArray(data) ? data : (Array.isArray(data?.results) ? data.results : []) }))
    .catch(() => ({ data: [] }));
}

function App(){
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then(res => setProducts(res.data));
  }, []);

  return (
    <div className="max-w-xl mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Integrated Product List</h1>
      <ul>
        {products.map(p => (
          <li key={p.id || p._id || Math.random()} className="border-b py-2">
            {p.name} - $ {p.price}
          </li>
        ))}
      </ul>
      <div className="card mt-4">
        <strong>File Explorer</strong>
        <pre style={{whiteSpace:'pre-wrap'}}>{"/fullstack_integration/\n  backend/\n    manage.py\n    product_app/\n      models.py\n      views.py\n      serializers.py\n      urls.py\n    settings.py\n  frontend/\n    src/\n      App.js\n      api.js\n    package.json"}</pre>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);`,

    // Backend structure (reference only)
    'fullstack_integration/backend/manage.py': `#!/usr/bin/env python3\n# Placeholder manage.py for structure preview\nprint('Run: python manage.py runserver (in a real Django project)')`,
    'fullstack_integration/backend/settings.py': `INSTALLED_APPS = [
  'corsheaders',
  'rest_framework',
  'product_app',
]
MIDDLEWARE = [
  'corsheaders.middleware.CorsMiddleware',
  'django.middleware.common.CommonMiddleware',
]
CORS_ALLOWED_ORIGINS = [
  'http://localhost:5176',
  'http://localhost:5175',
  'http://localhost:5174',
]
REST_FRAMEWORK = {
  'DEFAULT_RENDERER_CLASSES': ('rest_framework.renderers.JSONRenderer',),
}`,
    'fullstack_integration/backend/product_app/models.py': `from django.db import models\n\nclass Product(models.Model):\n    name = models.CharField(max_length=100)\n    price = models.FloatField()\n    description = models.TextField(blank=True)\n\n    def __str__(self):\n        return self.name`,
    'fullstack_integration/backend/product_app/serializers.py': `from rest_framework import serializers\nfrom .models import Product\n\nclass ProductSerializer(serializers.ModelSerializer):\n    class Meta:\n        model = Product\n        fields = '__all__'`,
    'fullstack_integration/backend/product_app/views.py': `from rest_framework import viewsets\nfrom .models import Product\nfrom .serializers import ProductSerializer\n\nclass ProductViewSet(viewsets.ModelViewSet):\n    queryset = Product.objects.all()\n    serializer_class = ProductSerializer`,
    'fullstack_integration/backend/product_app/urls.py': `from rest_framework.routers import DefaultRouter\nfrom .views import ProductViewSet\n\nrouter = DefaultRouter()\nrouter.register('products', ProductViewSet)\n\nurlpatterns = router.urls`,

    // Frontend reference files (non-executed; kept for structure parity)
    'fullstack_integration/frontend/src/App.js': `import React, { useEffect, useState } from "react";\nimport { getProducts } from "./api";\n\nfunction App() {\n  const [products, setProducts] = useState([]);\n  useEffect(() => {\n    getProducts().then(res => setProducts(res.data));\n  }, []);\n\n  return (\n    <div className="max-w-xl mx-auto mt-8">\n      <h1 className="text-2xl font-bold mb-4">Integrated Product List</h1>\n      <ul>\n        {products.map(p => (\n          <li key={p.id} className="border-b py-2">\n            {p.name} - $${'{'}p.price{'}'}
          </li>\n        ))}\n      </ul>\n    </div>\n  );\n}\n\nexport default App;`,
    'fullstack_integration/frontend/src/api.js': `import axios from "axios";\n\nexport const getProducts = () => axios.get("http://localhost:8000/products/");`,
    'fullstack_integration/frontend/package.json': `{\n  "name": "fullstack_integration",\n  "private": true,\n  "dependencies": {\n    "axios": "^1.6.8",\n    "react": "^18.2.0"\n  }\n}`,
  };
}