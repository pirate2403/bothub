import { Header } from '@/modules/header';
import { Navigation } from '@/modules/navigation';
import { Button } from '@/ui/button';

export const MainPage = () => {
  return (
    <main style={{ paddingTop: '100px' }}>
      <Header
        navbar={<Navigation />}
        authUser={<Button>authUser</Button>}
        language={<Button>language</Button>}
      />
      <div>asdasd</div>
    </main>
  );
};
