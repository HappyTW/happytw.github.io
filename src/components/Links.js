import './style/Links.css'
import SocialLink from './svgs/components/SocialLink';
import HT from './svgs/ht.png'

const Links = () => {
    return (
    <div className='section links'>
      <div id='link'>
          <h1>其他連結(๑´ㅂ`๑)</h1>
          <div className='linkin-icons'>
              <SocialLink content="HelloTaiwan" bgcolor='black' haveLink={true} src={HT} href='https://www.hellotaiwan.ml'/>
          </div>
      </div>
    </div>
    );
  };
  
export default Links;