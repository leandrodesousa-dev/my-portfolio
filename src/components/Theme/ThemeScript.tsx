const themeInitializerScript = `
  (function() {
    const storedTheme = localStorage.getItem('theme');
    const isDark = storedTheme === 'dark' || 
                   (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.setAttribute('data-theme', 'light');
    }
  })();
`;

export function ThemeScript() {
  return (
    // biome-ignore lint/security/noDangerouslySetInnerHtml: Static application-owned script initializes the theme before rendering; no user input is interpolated.
    <script dangerouslySetInnerHTML={{ __html: themeInitializerScript }} />
  );
}
