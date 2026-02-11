export async function onRequest(context) {
  const url = new URL(context.request.url);
  
  // Se for o config.yml, deixa passar
  if (url.pathname === '/admin/config.yml') {
    return context.env.ASSETS.fetch(context.request);
  }
  
  // Se for qualquer outra rota /admin/*, redireciona para index.html
  if (url.pathname.startsWith('/admin/')) {
    return context.env.ASSETS.fetch(new Request(url.origin + '/admin/index.html'));
  }
  
  return context.env.ASSETS.fetch(context.request);
}
