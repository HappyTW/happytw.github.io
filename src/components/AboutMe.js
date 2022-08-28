import './style/AboutMe.css'
import SocialLink from './svgs/components/SocialLink';
import Github from './svgs/github.svg'
import Discord from './svgs/discord.svg'
import Instagram from './svgs/instagram.svg'
import Facebook from './svgs/facebook.svg'

const AboutMe = () => {
    return (
        <div className='section about'>
            <div id='about'>
                <h1>About Me</h1>
                <p>窩是小廢物(つ´ω`)つ</p>
                <p>有網站好像很酷欸wwww</p>
                <div className='social-icons'>
                    <SocialLink content="HappyTW" src={Github} bgcolor='black' haveLink={true} href='https://github.com/HappyTW'/>
                    <SocialLink content="黃品堯" src={Facebook} bgcolor='#4267B2' haveLink={true} href='https://www.facebook.com/xItzYao/'/>
                    <SocialLink content="@itz.yao" src={Instagram} bgcolor='#bc2a8d' haveLink={true} href='https://www.instagram.com/itz.yao/'/>
                    <SocialLink content="✿Happy黑皮✿#2176" src={Discord} bgcolor='#5865F2' haveLink={false}/>
                </div>
            </div>
        </div>
    );
  };
  
export default AboutMe;