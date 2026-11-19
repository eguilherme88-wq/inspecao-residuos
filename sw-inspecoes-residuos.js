self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (event.request.mode !== 'navigate' || !url.href.startsWith(self.registration.scope)) return;

  event.respondWith(fetch(event.request).catch(() => new Response(
    '<!doctype html><html lang="pt-BR"><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Inspeções de Resíduos</title><h1>Sem conexão</h1><p>Reconecte-se à internet e recarregue a página para abrir o sistema.</p></html>',
    {status: 503, headers: {'Content-Type': 'text/html; charset=utf-8'}}
  )));
});
