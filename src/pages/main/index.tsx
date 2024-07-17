import { Header } from '@/modules/header';
import { Button } from '@/ui/button';

export const MainPage = () => {
  return (
    <main>
      <Header
        navbar={<Button>navbar</Button>}
        authUser={<Button>authUser</Button>}
        language={<Button>language</Button>}
      />
    </main>
  );
};
