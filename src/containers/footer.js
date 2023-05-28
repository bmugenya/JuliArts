import  React, { useState }  from 'react'
import { Footer } from '../components'



export default function footer() {
     const [image, setImage] = useState('');
  return (
    <Footer>
      <Footer.Row>
       <Footer.Column>
        
          <Footer.Image src={'/images/misc/logo.png'} />

          </Footer.Column>


             
  
          
        <Footer.Column>
          <Footer.Link href='#'>
            <Footer.Button>Youtube</Footer.Button>
            <Footer.Button>Facebook</Footer.Button>
            <Footer.Button>Tough Arch</Footer.Button>
          </Footer.Link>
        </Footer.Column>
      </Footer.Row>

      
   </Footer>
  )
}
