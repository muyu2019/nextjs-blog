import Link from "next/link";
import Head from 'next/head'
import Layout from '../../components/layout'
import YourComponent from "../../components/YourComponent";

export default function Posts() {
  return (
    <Layout>
      <Head>
        <title>posts</title>
      </Head>
      <h1>First Post</h1>
      <YourComponent/>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  )
}