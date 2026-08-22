import Image from "next/image";

export default function AboutPage(){
    return(
        <section>
            <div className="about">
                <Image 
                    alt="3D Master community- A group of makers cpllaborating on 3D printing projects"
                    className="about-img" 
                    width={742}
                    height={742}
                    src="/hero-image-square.png"
                    >
                </Image>
                <div className="about-content">
                    <p>ABOUT 3D-Master</p>
                    <h1>Empowering makers woldwide</h1>
                    <p>Founded in 2026, 3D-Master will be becoming the go-to platform for 3D printing
                        enthusiasts, makers, and professional designers to share and discover amazing STL
                        files for 3D printing.
                    </p>
                    <br />
                    <p>Our mission is to foster a vibrant community where creativity meets technology, enabling anyone
                        to bring their ideas to life through 3D printing.
                    </p>
                </div>
            </div>
            <hr/>
            <div className="features">
                <div className="feature">
                    <h1>100K+ Models</h1>
                    <p>Acess out vast libraries of community-created 3D models</p>
                </div>
                <div className="feature">
                    <h1>Active Community</h1>
                    <p>Join Thousands of makers who share tips,provide feedback</p>
                </div>
                <div className="feature">
                    <h1>Free to Use</h1>
                    <p>Most models are free to download</p>
                </div>
            </div>
        </section>
    );
}