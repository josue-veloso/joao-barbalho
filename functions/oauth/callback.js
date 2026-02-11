export async function onRequest(context) {
  const url = new URL(context.request.url);
  
  const CLIENT_ID = 'Ov23liEod8d7JwbzjnMb';
  const CLIENT_SECRET = 'e5a5b895b41cf68bec3adf098f158fe7efa7bc63';
  
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
    
    return new Response(
      `<!DOCTYPE html>
      <html>
      <head><title>Success</title></head>
      <body>
        <script>
          window.opener.postMessage(
            'authorization:github:success:${JSON.stringify(data)}',
            window.location.origin
          );
          window.close();
        </script>
      </body>
      </html>`,
      { headers: { 'Content-Type': 'text/html' } }
    );
  }
  
  const redirectUrl = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=repo&redirect_uri=${encodeURIComponent(url.origin + '/oauth/callback')}`;
  return Response.redirect(redirectUrl, 302);
}
