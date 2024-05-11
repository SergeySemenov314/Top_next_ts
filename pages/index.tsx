import { Button, Htag, P, Tag } from '../components';
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
      <P size = 'middle' >
        Напишу сразу в двух курсах, так как проходил оба. Java будет многим непросвещённым сложновата в изучении, но здесь перевес из-за лидирующего положения языка как самого популярного в программировании. Выбор мой пал на эту профессию еще и потому, что Java-разработчики получают самую большую зарплату. Хотя Python начинает догонять Java по многим моментам, но вот в крупном екоме разработке Джава все-таки остается главенствующей сейчас. Скажу так – полнота программы и интенсивность присуща обоим курсам GeekBrains. Хочу отметить, что с первого дня занятий вы приступаете к практике и получаете опыт коммерческой разработки уже в свое резюме. Скажу вам как прошедший это – реально помогло в трудоустройстве!
      </P>

      <Tag size='m' color='grey' >
        10
      </Tag>
      <Tag href='https://www.google.com/' size='s' color='green' >
        -10 000 ₽ 
      </Tag>
      <Tag size='m' color='primary' >
        10
      </Tag>
      <Tag size='s' color='ghost' >
        Дизайн
      </Tag>
    </>
  );
}
