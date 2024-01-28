import {inspect} from "util";
import styles from '../../page.module.css'
import Image from "next/image";
import Posts from "@/app/components/Post/Post";



const  Content: React.FC =()=>{

    return(
        <div className={styles.center}>

            <Image className={styles.logo} src="/next.svg" alt="Next.js Logo" width={180} height={37} priority/>

        </div>
    )
}

export default  Content;