import { Button } from '@/components/Button/Button';
import {Htag} from '../components'
import Image from 'next/image';

export default function Home() {

  return (
    <>
      <Htag tag = 'h1'>Заголовок</Htag>
      <Button appearance='primary' className='new' arrow='down'>кнопка</Button>
      <Button appearance='ghost' arrow='right'>кнопка</Button>
      <Image
        src='/vercel.svg'
        width={100}
        height={24}
        alt=''
      />
    </>
  );
}
