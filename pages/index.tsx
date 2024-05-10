import { Button } from '@/components/Button/Button';
import {Htag} from '../components'

export default function Home() {

  return (
    <>
      <Htag tag = 'h1'>Заголовок</Htag>
      <Button appearance='primary'>кнопка</Button>
      <Button appearance='ghost'>кнопка</Button>
    </>
  );
}
