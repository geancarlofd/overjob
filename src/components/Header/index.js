import Link from 'next/link';
import Image from 'next/image';
import styles from '../../../styles/components/Header.module.css'

function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <Link href="/" passHref>
                    <a>
                        <Image src="/images/overjob.svg" width="200" height="40" alt="logo" />
                    </a>
                </Link>

                <Link href="/description/1" passHref>
                    <a>
                        <button className={styles.btnPublish}>Cadastrar Vaga</button>
                    </a>
                </Link>
            </div>
            <div className={styles.search}>
                <div className={styles.searchFields}>
                    <input type="text" placeholder="Digite um cargo" />
                    <input type="text" placeholder="Digite uma cidade" />
                    <button>
                        <Image src="/images/lupa.svg" width="30" height="30" alt="icon search" />
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Header;