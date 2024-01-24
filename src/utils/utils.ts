export function formatDate(date: string) {
   return new Date(date)
      .toLocaleDateString('en-AU', {
         day: 'numeric',
         month: 'long',
         year: 'numeric',
      })
      .toLowerCase();
}

export function matchRoute(route: string, path: string) {
   return route === path.replace(/\/$/, '');
}
