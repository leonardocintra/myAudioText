import {redirect} from 'next/navigation';

export default function RootPage() {
  // This is a temporary redirect to the default locale.
  redirect('/pt-BR');
}
