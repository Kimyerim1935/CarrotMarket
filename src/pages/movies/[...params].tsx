import SeoHead from '@/components/SeoHead';
import { InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';

export default function Detail({ params }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  const [title, id] = params || [];

  return (
    <div>
      <SeoHead title={title} />
      <h4>{title}</h4>
    </div>
  )
}

export async function getServerSideProps({params: {params}}) {
  return {
    props: {
      params
    }
  }
}