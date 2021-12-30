import Head from 'next/head';
import styles from './styles.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import thumbImg from '../../../public/images/thumb.png';
import {FiChevronLeft, FiChevronsLeft, FiChevronRight, FiChevronsRight} from 'react-icons/fi';


export default function Posts(){
    return(
        <>
            <Head>
                <title>Blog | Sujeito Programador</title>
            </Head>
            <main className={styles.container}>
                <div className={styles.posts}>
                    <Link href="/">
                        <a>
                            <Image 
                                src={thumbImg} 
                                alt="Post título 1"
                                width={720}
                                height={410}
                                quality={90}
                            />
                            <strong>Criando meu primeiro aplicativo</strong>
                            <time>14 JULHO 2021</time>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad provident, laboriosam voluptas ab facilis animi dignissimos consequatur, cum non maxime mollitia fuga quisquam unde delectus! Velit pariatur laudantium ipsum dicta!</p>
                        </a>
                    </Link>

                    <div className={styles.buttonNavigate}>
                        <div>
                            <button>
                                <FiChevronsLeft size={25} color="#FFF"/>
                            </button>
                            <button>
                                <FiChevronLeft size={25} color="#FFF"/>
                            </button>
                        </div>

                        <div>
                            <button>
                                <FiChevronRight size={25} color="#FFF"/>
                            </button>
                            <button>
                                <FiChevronsRight size={25} color="#FFF"/>
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}