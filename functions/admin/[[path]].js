export async function onRequest(context) {
  return context.env.ASSETS.fetch(context.request.url.replace(/\/admin\/.*/, '/admin/index.html'));
}
