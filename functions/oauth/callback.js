export async function onRequest(context) {
  const url = new URL(context.request.url);
  
  const CLIENT_ID = context.env.GITHUB_CLIENT_ID;
  const CLIENT_SECRET = context.env.GITHUB_CLIENT_SECRET;
  
  if (url.searchParams.has('code')) {
    const code = url.searchParams.get('code');
    
    const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code: code
      })
    });
    
    const data = await tokenResponse.json();
    
    const content = JSON.stringify(data);
    
    return new Response(
      `<!DOCTYPE html>
      <html>
      <head><title>Success</title></head>
      <body>
        <script>
          (function() {
            function receiveMessage(e) {
              window.opener.postMessage(
                'authorization:github:success:' + ${JSON.stringify(content)},
                e.origin
              );
            }
            window.addEventListener('message', receiveMessage, false);
            window.opener.postMessage('authorizing:github', '*');
          })();
        </script>
      </body>
      </html>`,
      { headers: { 'Content-Type': 'text/html' } }
    );
  }
  
  const redirectUrl = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=repo&redirect_uri=${encodeURIComponent(url.origin + '/oauth/callback')}`;
  return Response.redirect(redirectUrl, 302);
}
