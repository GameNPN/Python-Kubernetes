import Image from 'next/image';

function Footer() {
    return (
        <div>
            <footer className="footer footer-center bg-neutral text-primary-content p-5 w-full">
                <aside>
                    <Image
                        src="https://lh3.googleusercontent.com/a/ACg8ocImc8m6AhcMN974sPbfbP-Hy1W5_WgypIx55w50QWarpA=s288-c-no"
                        alt="me"
                        width={50}
                        height={50}
                        className="inline-block fill-current rounded-xl"
                    />
                    <p className="font-bold text-white">
                        PCRP Industries Ltd. <br />Providing food advice services since 2003
                    </p>
                    <p className="text-white">Copyright © 2023 - All right reserved</p>
                </aside>
                <nav className='text-white'>
                    <header className="footer-title ">Social</header>
                    <div className="grid grid-flow-col gap-4">
                        <a
                            className='link link-primary'
                            href="https://www.facebook.com/HallsXII"
                            target='_blank'
                        >
                            Facebook
                        </a>
                        <a
                            className='link link-primary'
                            href="https://www.instagram.com/luk._.aom/"
                            target='_blank'
                        >
                            Instagram
                        </a>
                        <a
                            className='link link-primary'
                            href="https://www.youtube.com/channel/UCpFv37rd2_Lev-GzDLznEiw"
                            target='_blank'
                        >
                            Youtube
                        </a>
                    </div>
                </nav>
            </footer>
        </div>
    )
}

export default Footer;
